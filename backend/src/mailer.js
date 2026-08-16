const nodemailer = require('nodemailer');

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const ALERT_EMAIL_TO = process.env.ALERT_EMAIL_TO;

let transporter = null;
if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
} else {
  console.warn(
    'Email alerts are disabled — SMTP_HOST, SMTP_USER, or SMTP_PASS is missing from .env. ' +
      'Enquiries will still save normally; only the email notification is skipped.'
  );
}

// Fire-and-forget: never throw, never block the enquiry save/response on email issues.
async function sendEnquiryAlert(enquiry) {
  if (!transporter || !ALERT_EMAIL_TO) return;

  const lines = [
    `New enquiry received (#${enquiry.id})`,
    '',
    `Name: ${enquiry.name}`,
    `Phone: ${enquiry.phone}`,
    `Email: ${enquiry.email || '—'}`,
    `Product: ${enquiry.productInterest || '—'}`,
    `Message: ${enquiry.message || '—'}`,
    `Submitted: ${enquiry.submittedAt}`,
  ];

  try {
    await transporter.sendMail({
      from: `"TechnoCop Website" <${SMTP_USER}>`,
      to: ALERT_EMAIL_TO,
      subject: `New Enquiry #${enquiry.id} — ${enquiry.name}`,
      text: lines.join('\n'),
    });
  } catch (err) {
    // Log only — a failed email must never fail the enquiry submission itself.
    console.error('Failed to send enquiry alert email:', err.message);
  }
}

module.exports = { sendEnquiryAlert };
