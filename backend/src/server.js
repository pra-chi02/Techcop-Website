require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { addEnquiry, listEnquiries, updateEnquiryStatus } = require('./enquiryStore');
const { sendEnquiryAlert } = require('./mailer');
const { validateEnquiry } = require('./validate');

const app = express();
const PORT = process.env.PORT || 4000;
const ADMIN_KEY = process.env.ADMIN_KEY || '';

const allowedOrigins = (process.env.CORS_ORIGIN || 'http://localhost:4200')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
  })
);
app.use(express.json());

// Basic request log — helpful when running `npm start` locally.
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.path}`);
  next();
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// Create a new enquiry (called by the Contact page on form submit).
app.post('/api/enquiries', async (req, res) => {
  const body = req.body || {};

  // Honeypot: a hidden field real users never fill. If it has a value, it's a bot.
  if (body.website) {
    return res.status(201).json({
      id: 0,
      name: body.name || '',
      phone: body.phone || '',
      email: body.email || null,
      productInterest: body.productInterest || null,
      message: body.message || null,
      status: 'New',
      submittedAt: new Date().toISOString(),
    }); // Silently "succeed" without saving, so bots don't learn the check failed.
  }

  // Timing check: a form filled out in under 2 seconds is almost certainly automated.
  const elapsedMs = Number(body.formRenderedAt) ? Date.now() - Number(body.formRenderedAt) : null;
  if (elapsedMs !== null && elapsedMs < 2000) {
    return res.status(400).json({ error: 'Submission too fast. Please try again.' });
  }

  const { valid, errors, cleaned } = validateEnquiry(body);

  if (!valid) {
    return res.status(400).json({ error: 'Validation failed', details: errors });
  }

  try {
    const record = await addEnquiry(cleaned);
    // Return the full saved record so the frontend can show it back to the user.
    res.status(201).json(record);
    // Fire-and-forget — never blocks or fails the response to the user.
    sendEnquiryAlert(record);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not save enquiry. Please try again shortly.' });
  }
});

// List all enquiries — for internal/admin use.
// Protected by ADMIN_KEY if one is configured in .env.
app.get('/api/enquiries', async (req, res) => {
  if (ADMIN_KEY) {
    const providedKey = req.header('x-admin-key');
    if (providedKey !== ADMIN_KEY) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  }

  try {
    const enquiries = await listEnquiries();
    res.json(enquiries);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not load enquiries.' });
  }
});

// Update an enquiry's status (New / Contacted / Closed) — admin only.
app.patch('/api/enquiries/:id', async (req, res) => {
  if (ADMIN_KEY) {
    const providedKey = req.header('x-admin-key');
    if (providedKey !== ADMIN_KEY) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  }

  const id = Number(req.params.id);
  const { status } = req.body || {};

  if (!Number.isInteger(id)) {
    return res.status(400).json({ error: 'Invalid enquiry id' });
  }

  try {
    const updated = await updateEnquiryStatus(id, status);
    res.json(updated);
  } catch (err) {
    if (err.code === 'INVALID_STATUS') {
      return res.status(400).json({ error: 'Status must be one of: New, Contacted, Closed' });
    }
    if (err.code === 'NOT_FOUND') {
      return res.status(404).json({ error: 'Enquiry not found' });
    }
    console.error(err);
    res.status(500).json({ error: 'Could not update enquiry.' });
  }
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`TechnoCop backend listening on http://localhost:${PORT}`);
  console.log(`Allowed CORS origins: ${allowedOrigins.join(', ')}`);
});
