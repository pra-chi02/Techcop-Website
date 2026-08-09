const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.SUPABASE_URL;
// Service Role key — server-side only, NEVER expose this to the frontend.
// It bypasses Row Level Security, which is exactly what our backend needs
// to read/write the enquiries table while RLS blocks all public access.
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error(
    'Missing SUPABASE_URL or SUPABASE_SERVICE_KEY environment variables. ' +
      'Copy .env.example to .env and fill in your Supabase project credentials.'
  );
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY, {
  auth: { persistSession: false },
});

module.exports = { supabase };
