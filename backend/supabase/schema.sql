-- Run this in the Supabase SQL Editor (Project → SQL Editor → New query)
-- to create the enquiries table used by the TechnoCop backend.

create table if not exists enquiries (
  id bigint generated always as identity primary key,
  name text not null,
  phone text not null,
  email text,
  product_interest text,
  message text,
  submitted_at timestamptz not null default now()
);

-- Row Level Security: locked down by default. The backend connects using
-- the Supabase SERVICE ROLE key, which always bypasses RLS — so the app
-- keeps working normally. No public policy is created below, which means
-- nobody can read or write this table directly from a browser using the
-- public anon key. This is what keeps enquiry data secure.
alter table enquiries enable row level security;
