# Google Analytics Setup Guide

## Option 1: Google Analytics 4 (GA4)

1. **Get your Measurement ID:**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Select your property or create a new one
   - Go to Admin → Data Streams → Select your stream
   - Copy your Measurement ID (starts with `G-`)

2. **Set up environment variable:**
   - Create a `.env.local` file in the root directory
   - Add your Measurement ID:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-YOUR-ID-HERE
   ```

3. **Deploy to Vercel:**
   - Go to your Vercel project dashboard
   - Navigate to Settings → Environment Variables
   - Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` with your GA4 ID
   - Redeploy your application

## Option 2: Google Tag Manager (GTM)

1. **Get your Container ID:**
   - Go to [Google Tag Manager](https://tagmanager.google.com/)
   - Create or select a container
   - Copy your Container ID (starts with `GTM-`)

2. **Set up environment variable:**
   - Create a `.env.local` file in the root directory
   - Add your Container ID:
   ```
   NEXT_PUBLIC_GTM_ID=GTM-YOUR-ID-HERE
   ```

3. **Configure tags in GTM:**
   - In GTM, set up your Google Analytics tag
   - Configure triggers for page views and events
   - Publish your container

4. **Deploy to Vercel:**
   - Go to your Vercel project dashboard
   - Navigate to Settings → Environment Variables
   - Add `NEXT_PUBLIC_GTM_ID` with your GTM ID
   - Redeploy your application

## Testing Your Setup

1. **Using Google Tag Assistant:**
   - Install [Google Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-companion/jmekfmbnaedfebfnmakmokmlfpblbfdm)
   - Navigate to your website
   - Click the Tag Assistant icon
   - Verify that your tags are firing correctly

2. **Check Real-Time Reports:**
   - Go to Google Analytics
   - Navigate to Reports → Real-time
   - Visit your website in another tab
   - Verify you see active users

## Important Notes

- Never commit `.env.local` to version control
- Always use environment variables for production deployments
- The setup supports either GA4 OR GTM, not both simultaneously
- If using GTM, configure your GA4 tags within GTM interface

## Troubleshooting

If tags are not appearing:
1. Check that environment variables are set correctly
2. Clear browser cache and cookies
3. Disable ad blockers temporarily
4. Check browser console for errors
5. Verify that the container is published (for GTM)
6. Make sure you're using the correct Measurement ID format