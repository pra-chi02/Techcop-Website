const { supabase } = require('./supabaseClient');

const TABLE = 'enquiries';

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

// Supabase/Postgres columns are snake_case (product_interest, submitted_at);
// the frontend expects camelCase (productInterest, submittedAt).
function toApiShape(row) {
  return {
    id: row.id,
    name: row.name,
    phone: row.phone,
    email: row.email,
    productInterest: row.product_interest,
    message: row.message,
    submittedAt: row.submitted_at,
  };
}

module.exports = { addEnquiry, listEnquiries };
