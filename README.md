# Unitex Curtain Website

A beautiful, responsive landing page for Unitex Curtain - Custom Drapery & Window Blinds in the Greater Toronto Area.

## Features

- 🎨 Elegant, modern design with warm gold and cream color palette
- 📱 Fully responsive - works on all devices
- ⚡ Built with Vite + React + TypeScript for fast performance
- 🖼️ Placeholder images ready to be replaced with your own

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
cd unitex
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Google Reviews

The homepage loads live rating and review data through the server-side
`/api/google-reviews` endpoint. To enable it:

1. Enable **Places API (New)** in Google Cloud and create a restricted API key.
2. Add `GOOGLE_PLACES_API_KEY` to the Vercel project's environment variables.
3. Redeploy the project.

For local testing, copy `.env.example` to `.env.local`, fill in your own values,
and run `npm run dev`. Vite serves the Google Reviews endpoint locally; Vercel
CLI is not required. Never commit the real API key.


### Product Cards
In `src/components/Products/Products.tsx`, update the `products` array with image paths:

```tsx
const products = [
  {
    id: 1,
    title: 'Drapery',
    description: '...',
    image: '/images/drapery.jpg', // Your image path
  },
  // ...
]
```

### About Section
In `src/components/About/About.tsx`, replace the placeholder with your image.

### Services Section
In `src/components/Services/Services.tsx`, replace the placeholders with your images.

## Project Structure

```
unitex/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── Products/
│   │   ├── HowItWorks/
│   │   ├── About/
│   │   ├── Testimonials/
│   │   ├── Services/
│   │   └── Footer/
│   ├── pages/
│   │   └── HomePage.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.ts
```

## Customization

### Colors
Edit CSS variables in `src/index.css`:

```css
:root {
  --color-cream: #f8f5f0;
  --color-gold: #c9a962;
  --color-charcoal: #2c2c2c;
  /* ... */
}
```

### Fonts
The site uses:
- **Cormorant Garamond** - Elegant serif for headings
- **Montserrat** - Clean sans-serif for body text

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## License

© 2025 Unitex Curtain Studio. All rights reserved.
