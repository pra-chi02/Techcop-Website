const { supabase } = require('./supabaseClient');

const TABLE = 'enquiries';
const VALID_STATUSES = ['New', 'Contacted', 'Closed'];

async function addEnquiry(payload) {
  const { data, error } = await supabase
    .from(TABLE)
    .insert({
      name: payload.name,
      phone: payload.phone,
      email: payload.email || null,
      product_interest: payload.productInterest || null,
      message: payload.message || null,
    })
    .select()
    .single();

  if (error) {
    throw new Error(`Failed to save enquiry: ${error.message}`);
  }

  return toApiShape(data);
}

async function listEnquiries() {
  const { data, error } = await supabase
    .from(TABLE)
    .select('*')
    .order('id', { ascending: false });

  if (error) {
    throw new Error(`Failed to list enquiries: ${error.message}`);
  }

  return data.map(toApiShape);
}

async function updateEnquiryStatus(id, status) {
  if (!VALID_STATUSES.includes(status)) {
    throw Object.assign(new Error('Invalid status'), { code: 'INVALID_STATUS' });
  }

  const { data, error } = await supabase
    .from(TABLE)
    .update({ status })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    throw new Error(`Failed to update enquiry: ${error.message}`);
  }
  if (!data) {
    throw Object.assign(new Error('Enquiry not found'), { code: 'NOT_FOUND' });
  }

  return toApiShape(data);
}

function toApiShape(row) {
  return {
    id: row.id,
    name: row.name,
    phone: row.phone,
    email: row.email,
    productInterest: row.product_interest,
    message: row.message,
    status: row.status,
    submittedAt: row.submitted_at,
  };
}

module.exports = { addEnquiry, listEnquiries, updateEnquiryStatus, VALID_STATUSES };