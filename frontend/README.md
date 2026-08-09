# TechnoCop Energy Co. — Full-Stack Website

Angular 17 frontend + Node/Express backend for TechnoCop Energy Co.
(TechnoPlus LED Solar Light). Content — products, specs, clients,
projects, contact details — is sourced from the company brochure.

This folder is the **frontend**. The backend lives alongside it in
`../technocop-backend` (see the root-level README for how the two
folders relate).

## Requirements

- Node.js 18+
- npm 9+
- The backend running on port 4000 (see `../technocop-backend/README.md`)

## Setup

```bash
npm install
npm start
```

`npm start` runs `ng serve --proxy-config proxy.conf.json`, which
forwards any `/api/*` request from the Angular dev server to
`http://localhost:4000` — so make sure the backend is running first
(`cd ../technocop-backend && npm start`), otherwise the Contact page's
enquiry form will show a connection error.

Then open http://localhost:4200

## Build for production

```bash
npm run build
```

Output is written to `dist/technocop-energy`. The production build
uses `src/environments/environment.prod.ts` for the API URL (see
`angular.json` → `fileReplacements`) — update `apiUrl` there to your
deployed backend's public address before building.

## Fonts

Headings use **Poppins** (`font-heading` utility class), body text
uses **Manrope** (default `font-sans`) — both loaded via Google Fonts
in `src/index.html` and configured in `tailwind.config.js`.

## Routes

```
/                              -> Home
/about                         -> About Us (mission, vision, core values, why choose us)
/products                      -> All product categories + other solar products
/products/:slug                -> Product detail page (specs, features, applications, photo)
                                   slugs: solar-street-lights, semi-integrated-solar-street-lights,
                                   integrated-solar-street-lights, high-mast-lights,
                                   solar-flood-lights, solar-water-pumping-systems
/projects                      -> Clients, stats, project locations, commitment
/contact                       -> Address, phone, email, working hours, enquiry form, FAQ
**                             -> 404 Not Found
```

## Project structure

```
src/
  app/
    app.component.ts / .html    -> shell: header + <router-outlet> + footer
    app.config.ts                 -> standalone providers (router, HttpClient)
    app.routes.ts                 -> route table (lazy-loaded pages)
    data.ts                       -> all site content sourced from the brochure
    components/
      header/            -> sticky nav with products dropdown + mobile menu
      hero/               -> home hero section
      trust-bar/          -> feature strip (Solar Powered / Energy Efficient / etc.)
      faq-accordion/      -> reusable FAQ accordion (used on Home + Contact)
      footer/             -> site footer
    pages/
      home/               -> composes hero, trust-bar, about summary, products grid (with photos),
                              why-choose-us, stats/clients, FAQ, CTA
      about/               -> full About Us page
      products/            -> product category grid (with photos) + "other solar products"
      product-detail/      -> per-category spec sheet incl. product photo (reads :slug route param)
      projects/            -> clients, stats, project gallery, commitment
      contact/              -> address/contact info + enquiry form wired to the backend API,
                               shows the saved enquiry (name, phone, email, product, message,
                               reference ID, timestamp) back to the user after submit + FAQ
      not-found/            -> 404 page
  environments/
    environment.ts          -> dev config (apiUrl: '/api', used with the proxy)
    environment.prod.ts     -> prod config (apiUrl: full backend URL — edit before deploying)
  styles.css                -> Tailwind directives + global styles
  index.html
proxy.conf.json              -> forwards /api/* to http://localhost:4000 during `ng serve`
tailwind.config.js
postcss.config.js
```

## Notes

- All copy, specs, contact details, client names, and project locations come
  directly from the company brochure — update `src/app/data.ts` as the single
  source of truth if anything changes.
- Product photos are hotlinked from Unsplash (free-to-use stock photography)
  via the `heroImage` field on each entry in `productCategories` inside
  `data.ts`. Swap these for your own photography whenever you have it —
  just replace the URL string, no template changes needed.
- The enquiry form on the Contact page POSTs to `POST {apiUrl}/enquiries`
  on the backend and displays the saved record (including a reference ID
  and timestamp) back to the user on success.
