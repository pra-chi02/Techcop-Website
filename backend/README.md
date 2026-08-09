# TechnoCop Backend

Minimal Express API that stores enquiry-form submissions from the
TechnoCop Energy Co. website. Data is persisted to a local JSON file
(`data/enquiries.json`) — no database setup required to get started.

## Setup

```bash
npm install
cp .env.example .env
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

## Notes

- Swap `src/enquiryStore.js` for a real database (Postgres, MongoDB,
  etc.) when you're ready to move past file-based storage — the
  `addEnquiry` / `listEnquiries` function signatures are the only
  contract the rest of the app depends on.
- `CORS_ORIGIN` in `.env` must include your frontend's URL (defaults
  to `http://localhost:4200`, matching `ng serve`).
