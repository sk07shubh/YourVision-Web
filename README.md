# YourVision Web

Next.js App Router + TypeScript website foundation based on the uploaded Stitch HTML exports and AlgoDark Precision design system.

## Local setup
1. Copy .env.example to .env.local.
2. Configure a dedicated Supabase project and apply supabase/migrations/0001_initial.sql.
3. Configure Razorpay plan IDs and webhook secret before enabling paid checkout.
4. Run npm install, npm run dev, and npm run typecheck.

The website fails clearly when auth, usage, or billing configuration is missing. It must not invent subscription state or payment success. Premium prices are only shown when explicit display values and matching provider plans are configured.

## Security boundary
The extension's local execution/trace service is separate from this site. Do not expose its localhost /visualize endpoint to the public internet. This web project handles account, usage-record lookup, and billing records only. Usage increments must be wired to a trusted authenticated service before claiming that quotas are enforced end-to-end.

## Deployment
Deploy to a Node-compatible Next.js host. Set secrets in the host secret manager, use a canonical HTTPS NEXT_PUBLIC_SITE_URL, configure Supabase auth redirect URLs, and point Razorpay webhooks to /api/billing/webhook. Test auth and billing in staging before accepting payments.

## Route groups
Public pages: home, product, how it works, pricing, docs, about, contact, FAQ, privacy, terms, refund and cancellation policy. Account pages: signup, login, dashboard, usage, subscription. API: health, usage, checkout, subscription, webhook.

Legal pages are starter copy and require review for the real operator, data flows, jurisdiction, and consumer terms before launch.