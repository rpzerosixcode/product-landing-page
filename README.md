# AUREX

A technology product landing page with a minimal, modern design focused on an elegant and intuitive visual experience.

> **Note:** This project is a simulation for design and development purposes only. The products, information, and features presented are not real.

## Tech Stack

- **Vue 3** — Composition API with `<script setup>`
- **Vite** — Fast development and build tooling
- **Font Awesome** — Icon library
- **Sora** — Display font (Google Fonts)

## Features

- Responsive layout (Desktop, Tablet, Mobile)
- Reusable UI components (Button, Icon)
- Semantic HTML structure
- Design tokens for consistent styling
- Optimized images for web performance
- Accessibility support (focus states, reduced motion)

## Project Structure

```
src/
├── assets/          # Images and fonts
├── components/
│   ├── layout/      # Header, Footer
│   ├── section/     # Hero, Features, Products, CTA
│   └── ui/          # BaseButton, BaseIcon
├── data/            # Product and feature data
├── icons/           # Font Awesome icon registration
└── styles/          # Global styles and design tokens
```

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Design System

The project uses CSS custom properties (design tokens) defined in `src/styles/tokens.css` for:

- Colors (achromatic palette)
- Typography (type scale, weights, fonts)
- Spacing
- Border radius
- Shadows
- Breakpoints

## License

[MIT](LICENSE)

## Roadmap

See [docs/ROADMAP.md](docs/ROADMAP.md) for the development roadmap.