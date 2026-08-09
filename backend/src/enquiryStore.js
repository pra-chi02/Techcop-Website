const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data');
const DATA_FILE = path.join(DATA_DIR, 'enquiries.json');

function ensureStore() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, '[]', 'utf-8');
  }
}

function readAll() {
  ensureStore();
  const raw = fs.readFileSync(DATA_FILE, 'utf-8');
  try {
    return JSON.parse(raw);
  } catch (err) {
    // Corrupt or empty file — reset rather than crash the server.
    fs.writeFileSync(DATA_FILE, '[]', 'utf-8');
    return [];
  }
}

function writeAll(enquiries) {
  ensureStore();
  fs.writeFileSync(DATA_FILE, JSON.stringify(enquiries, null, 2), 'utf-8');
}

function nextId(enquiries) {
  const maxId = enquiries.reduce((max, e) => Math.max(max, e.id || 0), 0);
  return maxId + 1;
}

function addEnquiry(payload) {
  const enquiries = readAll();
  const record = {
    id: nextId(enquiries),
    name: payload.name,
    phone: payload.phone,
    email: payload.email || null,
    productInterest: payload.productInterest || null,
    message: payload.message || null,
    submittedAt: new Date().toISOString(),
  };
  enquiries.push(record);
  writeAll(enquiries);
  return record;
}

function listEnquiries() {
  // Most recent first.
  return readAll().slice().sort((a, b) => b.id - a.id);
}

module.exports = { addEnquiry, listEnquiries };
