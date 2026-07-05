# VANAS - Authentic Coastal Cuisine

A single-page marketing website for VANAS, a Mangalorean coastal cuisine restaurant in Mangaluru, India.

## Tech Stack

- **React + Vite**
- **TypeScript**
- **Tailwind CSS v4** + **shadcn/ui**
- **framer-motion**, **wouter**

## Getting Started (Local Development)

This project has been restructured as a standalone React + Vite application. You no longer need to set Replit-specific environment variables (`PORT` or `BASE_PATH`) to run or build the project.

### 1. Install Dependencies

You can use any of the package managers:

**Using npm:**
```bash
npm install
```

**Using pnpm:**
```bash
pnpm install
```

**Using yarn:**
```bash
yarn install
```

### 2. Start Dev Server

**Using npm:**
```bash
npm run dev
```

**Using pnpm:**
```bash
pnpm run dev
```

**Using yarn:**
```bash
yarn dev
```

The app will start at `http://localhost:3000`.

### 3. Build for Production

**Using npm:**
```bash
npm run build
```

**Using pnpm:**
```bash
pnpm run build
```

Output is written to the `/dist` directory.

## Vercel Deployment

This project is fully ready for deployment on **Vercel**:

1. Push this project folder to your GitHub, GitLab, or Bitbucket repository.
2. Log in to [Vercel](https://vercel.com/) and click **Add New** > **Project**.
3. Import your repository.
4. Vercel will automatically detect that this is a Vite project and configure the correct build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build` or `pnpm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**!

## Project Structure

```text
├── attached_assets/   # Restaurant photos, logo, menu images
├── public/            # Static public assets (favicon, opengraph)
├── src/               # Application source code
│   ├── components/    # Reusable shadcn/ui components
│   ├── data/menu.ts   # Menu categories, dishes, testimonials, contact info
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility files
│   ├── pages/Home.tsx # Main single-page site page
│   ├── App.tsx        # Main application router and providers
│   ├── index.css      # CSS styling & Tailwind directives
│   └── main.tsx       # Vite entrypoint
├── index.html         # HTML entry template
├── package.json       # Project dependencies & scripts
├── tsconfig.json      # TypeScript compiler configuration
└── vite.config.ts     # Vite bundler configuration
```
