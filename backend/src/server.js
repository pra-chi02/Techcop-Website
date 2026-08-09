require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { addEnquiry, listEnquiries } = require('./enquiryStore');
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
  const { valid, errors, cleaned } = validateEnquiry(req.body || {});

  if (!valid) {
    return res.status(400).json({ error: 'Validation failed', details: errors });
  }

  try {
    const record = await addEnquiry(cleaned);
    // Return the full saved record so the frontend can show it back to the user.
    res.status(201).json(record);
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
