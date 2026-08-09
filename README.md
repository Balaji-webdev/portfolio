# Personal Portfolio

Personal portfolio showcasing frontend and mobile projects, built with a focus on clean architecture, motion, and production-grade deployments.

A dark-themed, motion-rich portfolio featuring a scroll-driven 3D hero, animated section transitions, and interactive project case studies. Built to demonstrate production-level frontend engineering rather than a static resume page.

## Tech Stack

| Layer         | Tools                                              |
| ------------- | -------------------------------------------------- |
| **Framework** | React 19, Vite                                     |
| **Language**  | TypeScript                                         |
| **Styling**   | Tailwind CSS v4, Custom CSS Variable Design System |
| **Animation** | Framer Motion, GSAP, Lenis                         |
| **3D**        | React Three Fiber, @react-three/drei, Three.js     |
| **Forms**     | EmailJS                                            |
| **Icons**     | Lucide React                                       |

## Features

* 🎨 Dark-themed modern portfolio
* 🌌 Scroll-pinned 3D hero visual
* 🖱️ Scroll-driven animations and transitions
* ✨ Section entrance animations with staggered children
* 🎭 Interactive project showcase
* 📂 Deep-dive project case study modals
* 🔍 Category-filterable project grid
* 📱 Fully responsive across mobile, tablet, and desktop
* 🎨 Violet/cyan accent system
* 🧩 Tokenized CSS custom property design system
* 📧 Live contact form using EmailJS
* ⚡ Fast development and production builds with Vite
* 🚀 Production-ready deployment

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Balaji-webdev/portfolio.git
```

### 2. Navigate to the project

```bash
cd portfolio
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will run at:

```text
http://localhost:5173
```

## Project Structure

```text
src/
├── assets/
│   └── images, mockups, logos
│
├── components/
│   ├── sections/
│   │   ├── Hero
│   │   ├── Timeline
│   │   ├── WorkShowcase
│   │   └── Contact
│   │
│   └── ui/
│       ├── Button
│       ├── Badge
│       └── SpotlightCard
│
├── hooks/
│   └── custom React hooks
│
├── lib/
│   ├── constants
│   ├── utilities
│   └── sound effects
│
└── styles/
    ├── global styles
    └── legacy component styles
```

## Architecture

The project follows a component-driven architecture focused on:

* Reusable UI components
* Separation of concerns
* Custom React hooks
* Centralized constants and utilities
* CSS design tokens
* Responsive design
* Performance-conscious animations
* Maintainable TypeScript code

## Animation & 3D

The portfolio uses several libraries to create the interactive experience:

### Framer Motion

Used for:

* Component animations
* Page transitions
* Staggered entrances
* Hover interactions
* Modal animations

### GSAP

Used for:

* Advanced timeline animations
* Scroll-based animation control
* Complex motion sequences

### Lenis

Used for:

* Smooth scrolling
* Improved scroll interaction
* Scroll-driven animation synchronization

### React Three Fiber

Used for:

* Interactive 3D hero experience
* Three.js scene rendering
* Scroll-controlled 3D animations

## Contact

<p align="center">
  <a href="https://balajiportfolioofficial.netlify.app/" target="_blank">
    <img src="https://img.shields.io/badge/Portfolio-Visit-8B5CF6?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Portfolio" />
  </a>
  <a href="https://github.com/Balaji-webdev" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-Profile-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="https://www.linkedin.com/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-Profile-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="mailto:your-email@example.com">
    <img src="https://img.shields.io/badge/Email-Contact-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
</p>

---

<p align="center">
  Built with ❤️ using React, TypeScript, Three.js and modern frontend technologies.
</p>
