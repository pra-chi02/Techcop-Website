# TechnoCop Backend

Express API that stores enquiry-form submissions from the TechnoCop
Energy Co. website into a **Supabase** (Postgres) database — data is
permanently secure and survives redeploys/restarts, unlike local
file storage.

## 1. Create a Supabase project

1. Go to [supabase.com](https://supabase.com), sign up / log in.
2. Click **"New Project"**, pick a name and a database password
   (save this password somewhere safe), choose a region, create it.
3. Wait ~1-2 minutes for it to provision.

## 2. Create the `enquiries` table

1. In your Supabase project, open **SQL Editor** (left sidebar) →
   **New query**.
2. Paste the contents of `supabase/schema.sql` (in this folder) and
   click **Run**.
3. This creates the `enquiries` table with Row Level Security
   enabled and **no public policies** — meaning nobody can read or
   write it directly from a browser. Only this backend (using the
   service role key) can access it. This is what keeps the data secure.

## 3. Get your API credentials

1. In Supabase, go to **Project Settings** (gear icon) → **API**.
2. Copy the **Project URL** (looks like `https://xxxxx.supabase.co`).
3. Copy the **`service_role`** key (under "Project API keys") — **not**
   the `anon`/`public` key. The service role key is secret; it bypasses
   Row Level Security so the backend can read/write the table.

## 4. Configure environment variables

```bash
cp .env.example .env
```

Edit `.env` and fill in:
```
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_SERVICE_KEY=eyJhbGciOi...   (your service_role key)
```

## 5. Install and run

```bash
npm install
npm start
```

Server runs on http://localhost:4000 by default.

## Endpoints

### `GET /api/health`
Health check. Returns `{ status: "ok", time: "..." }`.

### `POST /api/enquiries`
Creates a new enquiry. Body (JSON):

```json
{
  "name": "Ramesh Kumar",
  "phone": "+91 98765 43210",
  "email": "ramesh@example.com",
  "productInterest": "Solar Street Lights",
  "message": "Need pricing for a 50-pole highway project."
}
```

`name` and `phone` are required; `email`, `productInterest`, and
`message` are optional. On success, returns the saved record
(`201 Created`) including its `id` and `submittedAt` timestamp — the
frontend displays this back to the user as confirmation.

### `GET /api/enquiries`
Lists all saved enquiries, most recent first. If `ADMIN_KEY` is set in
`.env`, this endpoint requires a matching `x-admin-key` header —
leave it blank while developing locally.

## Viewing submitted enquiries

Easiest way: in Supabase, go to **Table Editor** → `enquiries` — every
submission shows up there as a normal database row, and you can
filter/sort/export from that UI directly.

## Deploying (e.g. Render)

Add the same environment variables from `.env` to your hosting
provider's dashboard (`SUPABASE_URL`, `SUPABASE_SERVICE_KEY`,
`CORS_ORIGIN` set to your live frontend URL). Nothing else changes —
no local file storage means no data loss on redeploy.

## Security notes

- The `service_role` key has full access to your database — it must
  only ever live in backend environment variables (`.env` locally,
  or your host's environment variable settings). Never put it in
  frontend code, `environment.ts`, or commit it to GitHub.
- Row Level Security is enabled on `enquiries` with no public
  policies, so even if someone got the public `anon` key, they still
  could not read or write enquiries directly from the browser.
