# TechnoCop Energy Co. — Full-Stack Website

Two folders, one site:

- **`frontend/`** — Angular 17 website (routed pages, product photos,
  Poppins/Manrope fonts). See `frontend/README.md`.
- **`backend/`** — Node/Express API that stores enquiry-form
  submissions to a local JSON file. See `backend/README.md`.

## Quick start (run both together)

**Terminal 1 — backend:**
```bash
cd backend
npm install
cp .env.example .env
npm start
```
Runs on http://localhost:4000

**Terminal 2 — frontend:**
```bash
cd frontend
npm install
npm start
```
Runs on http://localhost:4200 and proxies `/api/*` calls to the
backend automatically (via `frontend/proxy.conf.json`).

Open http://localhost:4200, go to **Contact**, and submit the
enquiry form — it's saved by the backend (`backend/data/enquiries.json`)
and the same details are shown back to you on screen as confirmation.

## Deploying

- Deploy `backend/` anywhere that runs Node (Render, Railway, a VPS,
  etc.), set `CORS_ORIGIN` in its `.env` to your live frontend URL,
  and note its public URL.
- Before building the frontend for production, put that URL into
  `frontend/src/environments/environment.prod.ts` (`apiUrl`), then
  run `npm run build` inside `frontend/` and deploy the `dist/`
  folder to any static host.
