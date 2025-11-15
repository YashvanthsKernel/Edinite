# Edinite DesignWorks - Engineering Design & Simulation Website

## Overview

Edinite DesignWorks is a modern, single-page landing website for an engineering company specializing in design and simulation services. The platform showcases services including CAD design, FEA/CFD simulation, 3D printing, PCB design, and MATLAB solutions. The site features a glassmorphism design aesthetic with 3D visual elements, purple gradient theming, and smooth animations to convey innovation and technical expertise.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript using Vite as the build tool

**Routing**: Client-side routing implemented with Wouter for navigation between pages (Home, Services, Portfolio, Contact, Auth)

**UI Component System**: 
- Radix UI primitives for accessible, unstyled components
- shadcn/ui design system (New York style variant) built on top of Radix UI
- Custom glassmorphism components (GlassPanel, FloatingOrbs) for the signature visual aesthetic

**Styling Approach**:
- Tailwind CSS for utility-first styling with extensive customization
- CSS variables for theme colors supporting light/dark modes (currently forced to dark mode)
- Custom font stack: Montserrat (headings), Poppins (subheadings), Inter (body), Roboto Mono (technical)
- Purple gradient theme (#7226FF, #160078, #010030) with glassmorphism effects

**State Management**:
- TanStack Query (React Query) for server state and data fetching
- React Hook Form with Zod validation for form handling
- Local component state for UI interactions

**Design Pattern**: Component-based architecture with reusable UI components organized by function:
- `/components` - Shared application components
- `/components/ui` - Base UI primitives from shadcn/ui
- `/components/examples` - Component demonstrations
- `/pages` - Route-level page components

### Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js

**API Design**: RESTful API structure (currently minimal implementation with placeholder routes)
- All API routes prefixed with `/api`
- Request/response logging middleware for debugging
- JSON body parsing with raw body preservation for webhooks

**Development/Production Setup**:
- Vite dev server integration in development mode with HMR
- SSR-ready architecture with custom middleware mode
- Static file serving in production from built assets

**Database Layer**:
- Drizzle ORM for type-safe database operations
- PostgreSQL dialect configured (via @neondatabase/serverless)
- Schema-first approach with migrations in `/migrations`
- Storage abstraction layer allowing both in-memory (development) and database persistence

**Session Management**: Infrastructure in place for PostgreSQL-backed sessions (connect-pg-simple)

### Data Storage

**Database**: 
- PostgreSQL (configured for Neon serverless)
- Drizzle ORM schema definitions with Zod validation integration
- Current schema includes users table with username/password authentication

**Storage Pattern**:
- Interface-based storage abstraction (`IStorage`)
- In-memory implementation (`MemStorage`) for development/testing
- Designed for easy swap to PostgreSQL implementation

**Schema Management**:
- Schema definitions in `/shared/schema.ts` shared between client and server
- Type inference from database schema for end-to-end type safety
- Migration support via drizzle-kit

### Authentication Architecture

**Current Implementation**: Basic user authentication foundation
- User model with username/password fields
- Auth page with login/signup UI (forms not connected to backend)
- Session management infrastructure ready but not activated

**Design Decision**: Authentication scaffolding is prepared but minimal, allowing for future implementation of various strategies (JWT, session-based, OAuth) without requiring architectural changes.

## External Dependencies

### UI & Component Libraries
- **Radix UI** - Comprehensive suite of accessible, unstyled React components for dialogs, dropdowns, forms, etc.
- **shadcn/ui** - Pre-styled component collection built on Radix UI
- **Lucide React** - Icon library for consistent iconography
- **class-variance-authority** - Type-safe variant-based component styling
- **cmdk** - Command palette component

### Forms & Validation
- **React Hook Form** - Performant form state management
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Integration layer between React Hook Form and validation libraries

### Data Fetching
- **TanStack Query** - Server state management with caching, background updates, and optimistic UI
- **Wouter** - Lightweight client-side router

### Database & ORM
- **Drizzle ORM** - TypeScript ORM with excellent type inference
- **@neondatabase/serverless** - Neon serverless PostgreSQL driver
- **drizzle-zod** - Zod schema generation from Drizzle schemas
- **connect-pg-simple** - PostgreSQL session store for Express

### Development Tools
- **Vite** - Fast build tool and dev server with HMR
- **@vitejs/plugin-react** - React Fast Refresh support
- **TypeScript** - Static typing throughout the application
- **esbuild** - Fast JavaScript bundler for production server builds
- **tsx** - TypeScript execution for development

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS transformation with Autoprefixer
- **tailwind-merge** - Utility for merging Tailwind classes
- **clsx** - Conditional className utility

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal** - Development error overlay
- **@replit/vite-plugin-cartographer** - Development tooling
- **@replit/vite-plugin-dev-banner** - Development environment banner

### Additional Libraries
- **date-fns** - Date manipulation utilities
- **embla-carousel-react** - Carousel/slider component (used in TechnologyCarousel)
- **nanoid** - Compact unique ID generator