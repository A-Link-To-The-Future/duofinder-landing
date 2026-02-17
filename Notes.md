# DuoFinder Landing Page Notes

## Project Overview
- **Repo**: https://github.com/A-Link-To-The-Future/duofinder-landing
- **Domain**: duofinder.pro (owned by Chayton)
- **Stack**: Next.js + Tailwind + Supabase + Resend

## Infrastructure

### Supabase
- **Project URL**: https://ytnkffbosemcbjmgwcut.supabase.co
- **Project ID**: ytnkffbosemcbjmgwcut
- **Table**: `waitlist` (created via SQL Editor)
  - Columns: `id` (uuid), `email` (text, unique), `created_at` (timestamp)
  - RLS enabled
  - Index on email for fast lookups

### Resend (Email)
- **From address**: hello@duofinder.pro
- **Domain**: duofinder.pro (needs verification in Resend dashboard)
- Sends confirmation email with Discord link

## Environment Variables (Vercel)
**Get these from 1Password or Vercel dashboard — don't commit secrets to repo**
```
NEXT_PUBLIC_SUPABASE_URL=https://ytnkffbosemcbjmgwcut.supabase.co
SUPABASE_SERVICE_ROLE_KEY=(see 1Password)
RESEND_API_KEY=(see 1Password)
```

## Waitlist Feature
- API route: `/api/waitlist` (POST)
- Stores emails in Supabase
- Checks for duplicates (409 error if already exists)
- Sends confirmation email via Resend
- Shows loading/error states in UI

## Recent Changes
- Increased header logo size (h-14 mobile, h-28 desktop)
- Centered nav buttons between logo and CTA
- Added working waitlist with email confirmation

## TODO
- [ ] Verify duofinder.pro domain in Resend dashboard
- [ ] Add DNS records for Resend verification
- [ ] Test waitlist end-to-end once domain is verified
