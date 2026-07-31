# MoniAK - Construction & Engineering Company Website

A modern, responsive website for MoniAK Integrated Project Construction Company (MoniAK), showcasing their construction projects, services, and company information.

## 🏗️ About

MoniAK is a full-service construction and engineering company specializing in civil infrastructure, building construction, and project management. This website serves as their digital presence, featuring:

- **Home** - Company overview with hero section and call-to-action
- **About Us** - Mission, vision, team, and company statistics
- **Services** - Comprehensive list of construction and engineering services
- **Projects** - Portfolio of completed and ongoing projects with detailed case studies

## 🚀 Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) with [React 19](https://react.dev/)
- **Routing**: [TanStack Router](https://tanstack.com/router) (file-based routing)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Animations**: [Motion](https://motion.dev/) (formerly Framer Motion)
- **Carousel**: [Embla Carousel](https://www.embla-carousel.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Testing**: [Vitest](https://vitest.dev/)
- **Linting/Formatting**: ESLint + Prettier

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

```bash
# Clone the repository
git clone https://github.com/abdullmustyy/moniak.git

# Navigate to project directory
cd moniak

# Install dependencies
pnpm install
```

### Development

```bash
# Start development server on port 3000
pnpm dev
```

### Production Build

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 📁 Project Structure

```text
src/
├── components/
│   ├── features/      # Feature-specific components (scroll badge, smooth scroll)
│   ├── layout/        # Layout components (navbar, footer)
│   └── ui/            # Reusable UI components (button, dialog, carousel, icons)
├── constants/         # Static data (services, projects, about-us content)
├── lib/               # Utility functions
├── routes/            # File-based routes
│   ├── __root.tsx     # Root layout with navbar and footer
│   ├── index.tsx      # Home page
│   ├── about-us.tsx   # About page
│   ├── services.tsx   # Services page
│   └── projects/      # Projects with dynamic routing
│       ├── index.tsx  # Projects listing
│       └── $slug.tsx  # Individual project pages
└── styles.css         # Global styles and Tailwind configuration
```

## 🧪 Testing

```bash
# Run tests
pnpm test
```

## 🔧 Code Quality

```bash
# Run linter
pnpm lint

# Format code
pnpm format

# Run both lint fix and format
pnpm check
```

## 📝 Adding Components

This project uses shadcn/ui for consistent, accessible UI components:

```bash
pnpm dlx shadcn@latest add [component-name]
```

## 🌐 Features

- **Responsive Design** - Optimized for all screen sizes
- **Smooth Scrolling** - Enhanced UX with Lenis smooth scroll
- **Animations** - Polished UI animations powered by Motion
- **Dynamic Project Pages** - Individual project detail pages with slug-based routing
- **Interactive Carousels** - Project and team member showcases
- **Contact Form** - Project enquiry form
- **SEO Ready** - Proper meta tags and semantic HTML
