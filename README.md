# Karina KC - Web Developer Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and experience as a BCA student and Frontend Web Developer.

## 🌐 Live Demo

Visit the live portfolio: (https://karina-portfolio-nine.vercel.app/)

## 📋 About

Welcome to my digital portfolio! I'm Karina KC, a passionate BCA student and frontend web developer from Nepal. I specialize in building beautiful, responsive web experiences using modern technologies like React, JavaScript, and the MERN stack.

This portfolio showcases my projects, education, technical skills, and provides an easy way to get in touch.

## ✨ Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI** - Built with Tailwind CSS and shadcn/ui components
- **Multiple Sections**:
  - Hero Section with dynamic greeting
  - About Me
  - Education Timeline
  - Technical Skills
  - Project Showcase
  - Contact Section
  - Footer with social links
- **Fast Performance** - Optimized with Vite build tool
- **Type Safe** - Built with TypeScript
- **SEO Optimized** - Meta tags and Open Graph support

## 🛠️ Tech Stack

- **Frontend Framework**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Testing**: Vitest
- **Linting**: ESLint

## 📥 Installation

### Prerequisites

- Node.js 16+ 
- npm 7+ or yarn

### Setup Instructions

```bash
# Clone the repository
git clone https://github.com/karinakc/Portfolio.git

# Navigate to the project directory
cd Portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

## 📚 Project Structure

```
src/
├── components/           # React components
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   ├── EducationSection.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── Navbar.tsx
│   ├── ProjectsSection.tsx
│   ├── SkillsSection.tsx
│   └── ui/              # shadcn/ui components
├── pages/               # Page components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── App.tsx              # Main app component
├── main.tsx             # App entry point
└── index.css            # Global styles
```

## 🚀 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview

# Run tests
npm run test

# Run tests in watch mode
npm test:watch

# Lint code
npm run lint

# Format code
npm run format
```

## 📁 Public Assets

The `public/` directory contains:
- Logo and favicon
- Portfolio images
- Design project showcase images
- Design guidelines (README)

## 🎨 Customization

### Environment Variables

Create a `.env` file based on `.env.example`:

```bash
# Copy the example file
cp .env.example .env

# Edit as needed for your configuration
```

### Update Content

- **Hero Section**: Modify [src/components/HeroSection.tsx](src/components/HeroSection.tsx)
- **About**: Edit [src/components/AboutSection.tsx](src/components/AboutSection.tsx)
- **Skills**: Update [src/components/SkillsSection.tsx](src/components/SkillsSection.tsx)
- **Projects**: Modify [src/components/ProjectsSection.tsx](src/components/ProjectsSection.tsx)
- **Contact**: Edit [src/components/ContactSection.tsx](src/components/ContactSection.tsx)


## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Configure environment variables if needed
4. Deploy!

### Deploy to Other Platforms

The project can be deployed to any static hosting platform:
- Netlify
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront

Build command: `npm run build`
Output directory: `dist/`


## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS


