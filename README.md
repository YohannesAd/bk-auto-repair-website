# BK Auto Repair Website

A modern, professional website for BK Auto Repair built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean UI with smooth animations
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Fast performance with Next.js 15
- 🎭 Smooth animations using Framer Motion
- 🎯 TypeScript for type safety
- 💅 Tailwind CSS for styling

## Pages

- **Home Page**: Hero section, about section, and image gallery
- **Services Page**: Comprehensive list of auto repair services

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
bk-auto-repair-website/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── services/          # Services page
│   ├── layout.tsx         # Root layout with navbar
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navbar.tsx        # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Gallery.tsx       # Image gallery
│   └── ServiceCard.tsx   # Service card component
└── public/               # Static assets
```

## Customization

### Replacing Images

The gallery currently uses placeholder images from Unsplash. To replace with client photos:

1. Add images to the `public/images/` folder
2. Update the image sources in `components/Gallery.tsx`

### Updating Services

To modify services, edit the `services` array in `app/services/page.tsx`

### Changing Colors

Update the color scheme in `tailwind.config.ts` under the `theme.extend.colors` section

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This project can be easily deployed to:

- Vercel (recommended for Next.js)
- Netlify
- Any hosting platform that supports Node.js

## License

Private project for BK Auto Repair
