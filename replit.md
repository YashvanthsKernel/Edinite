# Edinite DesignWorks - Engineering Design & Simulation Website

## Overview

Edinite DesignWorks is a modern, full-stack application for an engineering company specializing in design and simulation services. The platform showcases expertise in CAD design, FEA/CFD simulation, 3D printing, PCB design, and MATLAB solutions. The site features a premium glassmorphism design aesthetic with 3D visual elements and smooth animations.

## Architecture

### Frontend
- **Framework**: React with TypeScript via Vite.
- **Routing**: Client-side routing with `wouter`.
- **UI Components**: Radix UI primitives with shadcn/ui styling.
- **Styling**: Tailwind CSS with custom glassmorphism utilities.
- **Data Fetching**: TanStack Query (React Query).
- **Forms**: React Hook Form with Zod validation.

### Backend
- **Server**: Express.js (Node.js).
- **Authentication**: Integrated with Replit Auth for secure user management.
- **Database**: PostgreSQL (Neon Serverless) managed via Drizzle ORM.
- **Storage**: Abstracted storage layer (`IStorage`) with PostgreSQL implementation.

### Key Features
- **Engineering Portfolio**: Interactive showcase of technical projects and simulations.
- **Service Specializations**: Dedicated sections for CAD, Simulation, Prototyping, and Electronics.
- **Secure Access**: Member area for clients and collaborators via Replit Auth.
- **Responsive Design**: Fluid layouts optimized for technical content across all devices.

## Project Structure

- `client/src/components`: Reusable UI components (GlassPanel, FloatingOrbs, etc.).
- `client/src/pages`: Page-level components for specific services and features.
- `server/`: Express backend, authentication logic, and storage implementations.
- `shared/`: Shared TypeScript schemas and validation logic.
- `attached_assets/`: Technical drawings, simulations, and project imagery.
