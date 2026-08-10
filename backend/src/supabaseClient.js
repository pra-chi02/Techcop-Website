const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = (process.env.SUPABASE_URL || '').trim();
const SUPABASE_SERVICE_KEY = (process.env.SUPABASE_SERVICE_KEY || '').trim();

if (!SUPABASE_URL) {
  throw new Error('SUPABASE_URL is missing');
}

if (!SUPABASE_SERVICE_KEY) {
  throw new Error('SUPABASE_SERVICE_KEY is missing');
}

console.log('Supabase URL:', SUPABASE_URL);
console.log(
  'Supabase key loaded:',
  SUPABASE_SERVICE_KEY.startsWith('sb_secret_') ||
  SUPABASE_SERVICE_KEY.startsWith('ey')
);

const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_SERVICE_KEY,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  }
);

module.exports = { supabase };