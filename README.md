# FUDASHI - Customer Service Strategy & AI Transformation Consulting

A modern React + Vite + Tailwind CSS website for FUDASHI Consulting Group.

## Prerequisites

- Node.js 18+ 
- npm or yarn

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

## Build for Production

```bash
npm run build
```

Output will be in the `dist` folder.

## Deploy to Vercel

### Option 1: Vercel CLI
```bash
# Install Vercel CLI globally (if not already installed)
npm i -g vercel

# Deploy
vercel
```

### Option 2: GitHub Integration
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Vite and configure build settings
5. Click Deploy

### Option 3: Manual Upload
1. Run `npm run build`
2. Drag and drop the `dist` folder to [vercel.com/new](https://vercel.com/new)

## ⚠️ IMPORTANT: Add Images Before Deploying

You must add two images to the `public/assets` folder before deploying:

### 1. Founder Image
- **Location:** `public/assets/founder/doug-founder-fudashi-netflix.png`
- **Source:** Download from https://raw.githubusercontent.com/FUDASHI-DASH/fudashi-assets/refs/heads/main/assets/founder/doug-founder-fudashi-netflix.png

### 2. EXO Logo
- **Location:** `public/assets/exo/exo-logo.png`
- **Source:** Download from https://raw.githubusercontent.com/FUDASHI-DASH/exo-assets/main/assets/exo-logo.png

```bash
# Quick download commands (run from project root):
curl -L -o public/assets/founder/doug-founder-fudashi-netflix.png "https://raw.githubusercontent.com/FUDASHI-DASH/fudashi-assets/refs/heads/main/assets/founder/doug-founder-fudashi-netflix.png"

curl -L -o public/assets/exo/exo-logo.png "https://raw.githubusercontent.com/FUDASHI-DASH/exo-assets/main/assets/exo-logo.png"
```

## Project Structure

```
fudashi-site/
├── public/
│   ├── assets/
│   │   ├── founder/
│   │   │   └── doug-founder-fudashi-netflix.png  # ADD THIS
│   │   └── exo/
│   │       └── exo-logo.png                       # ADD THIS
│   └── fudashi-favicon.svg
├── src/
│   ├── App.jsx          # Main React component
│   ├── main.jsx         # Entry point
│   └── index.css        # Tailwind + custom styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Contact

- Email: contact@fudashi.ai
- Location: Portland, OR
