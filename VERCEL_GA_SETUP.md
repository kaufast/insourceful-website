# Vercel Google Analytics Setup

## Your Google Analytics Information
- **Property ID:** 507407152
- **Stream Name:** InSourceful
- **Stream URL:** https://insourceful.ai
- **Stream ID:** 12244042894
- **Measurement ID:** G-LSRCWE9M52

## Setting up in Vercel

1. **Go to Vercel Dashboard:**
   - Navigate to https://vercel.com/dashboard
   - Select your `insourceful.io` project

2. **Add Environment Variable:**
   - Go to Settings → Environment Variables
   - Click "Add New"
   - Add the following:
     - **Key:** `NEXT_PUBLIC_GA_MEASUREMENT_ID`
     - **Value:** `G-LSRCWE9M52`
     - **Environment:** Select all (Production, Preview, Development)

3. **Redeploy:**
   - After adding the environment variable
   - Go to Deployments tab
   - Click the three dots on the latest deployment
   - Select "Redeploy"

## Verify Installation

1. **Visit your production site:** https://insourceful.ai
2. **Open Google Tag Assistant Chrome Extension**
3. **You should see:** Google Analytics 4 tag with ID `G-LSRCWE9M52`

## Check in Google Analytics

1. Go to https://analytics.google.com/
2. Select InSourceful property
3. Navigate to Reports → Real-time
4. You should see active users when visiting your site

## Important Notes

- The `.env.local` file is for local development only
- Never commit `.env.local` to Git (already in .gitignore)
- Vercel environment variables are secure and encrypted
- Changes to environment variables require a redeploy to take effect