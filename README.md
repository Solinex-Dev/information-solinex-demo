# Solinex Website

A modern, responsive one-page company website built with React and TailwindCSS.

## Features

- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Modern UI**: Clean, professional design with Solinex brand colors
- **Bilingual Support**: Full English and Thai language support
- **Interactive Components**: Smooth scrolling navigation and carousel showcase
- **Contact Form**: EmailJS-powered contact form with validation
- **Performance**: Optimized with Vite for fast loading
- **Accessibility**: Semantic HTML and proper ARIA labels

## Tech Stack

- React 18 with functional components and hooks
- TailwindCSS for styling
- Vite for build tooling
- EmailJS for contact form handling
- Radix UI for accessible components
- Lucide React for icons
- Modern JavaScript (ES6+)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and visit `http://localhost:5173`

## Project Structure

```
src/
├── features/
│   ├── layout/         # Layout components
│   │   ├── Navbar.jsx  # Navigation header
│   │   └── Footer.jsx  # Footer
│   ├── sections/       # Page sections
│   │   ├── Hero.jsx    # Hero section
│   │   ├── AboutUs.jsx # About section
│   │   ├── Solutions.jsx # Services section
│   │   ├── TechStack.jsx # Technology showcase
│   │   └── ContactForm.jsx # Contact form
│   └── data/           # Data files
├── shared/             # Shared components
│   ├── common/         # Common components
│   └── ui/             # UI components
├── contexts/           # React contexts
├── hooks/              # Custom hooks
├── translations/       # Language files
├── assets/             # Images and icons
├── App.jsx            # Main app component
└── index.css          # Global styles
```

## Color Palette

- **Solinex Blue**: #0ea5e9
- **Solinex Teal**: #14b8a6  
- **Solinex Green**: #10b981
- **Gray Scale**: Various shades for text and backgrounds

## Build for Production

```bash
npm run build
```

## License

© 2025 Solinex. All rights reserved.