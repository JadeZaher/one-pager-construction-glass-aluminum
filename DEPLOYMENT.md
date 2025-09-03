# Deployment Guide for Vercel

## Prerequisites
- [Vercel account](https://vercel.com/signup)
- [Git repository](https://github.com) (optional but recommended)
- Node.js 18+ installed locally

## Local Testing
Before deploying, ensure your app builds and runs locally:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Test the production build locally
npm run preview
```

## Deployment Options

### Option 1: Deploy via Vercel Dashboard (Recommended for first deployment)

1. **Push to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js

3. **Configure Environment Variables** (if needed):
   - Add any required environment variables in the Vercel dashboard
   - Your current setup only requires `NODE_ENV` which is automatically set

4. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy your app

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Link to existing project or create new
   - Confirm deployment settings
   - Wait for build and deployment

## Post-Deployment

### Custom Domain (Optional)
- In your Vercel dashboard, go to your project
- Navigate to "Settings" → "Domains"
- Add your custom domain

### Environment Variables
If you add more environment variables later:
- Add them to `src/env.js`
- Set them in Vercel dashboard under "Settings" → "Environment Variables"

### Automatic Deployments
- Every push to your main branch will trigger automatic deployments
- Preview deployments are created for pull requests

## Troubleshooting

### Build Errors
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify TypeScript compilation locally with `npm run typecheck`

### Runtime Errors
- Check Vercel function logs
- Ensure environment variables are set correctly
- Verify API routes if you add them later

### Performance
- Your app is already optimized with Next.js 15
- Images are properly placed in the `public` folder
- Static generation is enabled by default

## Current Configuration

Your project is configured with:
- ✅ Next.js 15 with App Router
- ✅ TypeScript support
- ✅ Tailwind CSS
- ✅ ESLint and Prettier
- ✅ Environment validation
- ✅ Static asset optimization

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)
