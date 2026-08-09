const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Loose check: at least 7 digits, optionally with +, spaces, dashes, parentheses.
const PHONE_RE = /^[0-9+\-()\s]{7,20}$/;

function validateEnquiry(body) {
  const errors = [];
  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const productInterest = typeof body.productInterest === 'string' ? body.productInterest.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  if (!name) errors.push('Name is required.');
  if (!phone) {
    errors.push('Phone number is required.');
  } else if (!PHONE_RE.test(phone)) {
    errors.push('Phone number looks invalid.');
  }
  if (email && !EMAIL_RE.test(email)) {
    errors.push('Email looks invalid.');
  }

  return {
    valid: errors.length === 0,
    errors,
    cleaned: { name, phone, email, productInterest, message },
  };
}

module.exports = { validateEnquiry };
