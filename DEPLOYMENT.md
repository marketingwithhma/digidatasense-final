# Deployment Guide for DigiDataSense

This application uses React Router with client-side routing. To prevent 404 errors on page refresh, you need to configure your hosting platform to serve `index.html` for all routes.

## Configuration Files Included

We've included configuration files for common hosting platforms:

### 1. Netlify
- **File**: `/public/_redirects` or `/public/netlify.toml`
- **What it does**: Redirects all routes to index.html
- **No additional setup needed** - Just deploy to Netlify

### 2. Vercel
- **File**: `/vercel.json` (in root directory)
- **What it does**: Rewrites all routes to index.html
- **No additional setup needed** - Just deploy to Vercel

### 3. Apache Servers (cPanel, shared hosting, etc.)
- **File**: `/public/.htaccess`
- **What it does**: Uses mod_rewrite to redirect all routes to index.html
- **Make sure** mod_rewrite is enabled on your server

### 4. GitHub Pages
- **File**: `/public/404.html`
- **Additional setup**: You may need to use HashRouter instead of BrowserRouter
- **Alternative**: Use a service like Netlify or Vercel instead

## Build Command

```bash
npm run build
```

or

```bash
pnpm build
```

## Deploy Directory

After building, deploy the `dist` folder (or whatever your build output directory is).

## Testing Locally

To test if routing works correctly:

1. Build the project: `npm run build`
2. Serve the dist folder with a static server
3. Navigate to `/apac-revenue` or `/privacy-policy`
4. Refresh the page - it should NOT show a 404 error

## Troubleshooting

If you still see 404 errors after deployment:

1. **Check your hosting platform**: Make sure the correct configuration file is being used
2. **Verify build output**: Ensure the config files are in your build output directory
3. **Check server logs**: Look for any errors related to routing or redirects
4. **Contact hosting support**: They can help configure server-side routing

## Platform-Specific Instructions

### Netlify
1. Connect your Git repository
2. Build command: `npm run build` or `pnpm build`
3. Publish directory: `dist`
4. Deploy!

### Vercel
1. Import your Git repository
2. Framework Preset: Vite
3. Build command: Auto-detected
4. Output directory: Auto-detected
5. Deploy!

### cPanel / Apache
1. Build your project locally: `npm run build`
2. Upload the contents of the `dist` folder to your `public_html` directory
3. Make sure `.htaccess` is included in the upload
4. Ensure mod_rewrite is enabled in Apache

### AWS S3 + CloudFront
1. Upload build files to S3 bucket
2. In CloudFront, set the error page for 404 to redirect to `/index.html` with a 200 status code

### Firebase Hosting
Create a `firebase.json` in your root:
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

## Need Help?

If you're still experiencing issues, please provide:
- Your hosting platform
- The exact error message
- Your build configuration
