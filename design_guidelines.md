# Design Guidelines: Edinite DesignWorks

## Design Approach
**Reference-Based Approach**: Drawing inspiration from tescitylabs.com's calm, modern aesthetic combined with the glassmorphism engineering focus. Creating a professional yet approachable design that communicates technical expertise through clean visuals and smooth interactions.

## Color System
**Purple Gradient Theme** (calm and attractive):
- Deep Purple: `#7226FF` (primary accent, CTAs, highlights)
- Dark Purple: `#160078` (secondary accent, borders, glows)
- Near Black: `#010030` (background base, dark sections)
- Background Gradient: Linear gradient from `#010030` → `#0B0B2B` → `#160078` (subtle)
- Glass Overlays: `rgba(114, 38, 255, 0.1)` with blur
- Text: White `#FFFFFF`, Light Gray `#E5E7EB`
- Accent Glow: Soft purple halos around glass panels and floating orbs

## Typography
**Font Families**:
- Headings: **Montserrat** (Bold 700, SemiBold 600)
- Subheadings: **Poppins** (SemiBold 600, Medium 500)
- Body: **Inter** (Regular 400, Medium 500)
- Technical Labels: **Roboto Mono** (for specs, numbers)

**Scale** (desktop/mobile responsive):
- H1 Hero: 3.5rem / 2.5rem
- H2 Section: 2.5rem / 1.875rem
- H3 Card: 1.5rem / 1.25rem
- Body: 1.125rem / 1rem
- Small: 0.875rem

## Layout System
**Spacing Units**: Tailwind units `2, 4, 6, 8, 12, 16, 20, 24, 32`
- Common padding: `py-20` (desktop sections), `py-12` (mobile sections)
- Card spacing: `p-8` (desktop), `p-6` (mobile)
- Element gaps: `gap-8` (grids), `gap-4` (lists)
- Container: `max-w-7xl` (general), `max-w-6xl` (content), `max-w-prose` (text)

## Glassmorphism Components

**Glass Panels**:
- Background: `rgba(255, 255, 255, 0.05)`
- Backdrop blur: `blur(20px)` (desktop), `blur(12px)` (mobile)
- Border: `1px solid rgba(114, 38, 255, 0.2)`
- Border radius: `rounded-2xl` (cards), `rounded-xl` (buttons)
- Shadow: Multi-layer purple glow effects

**Floating Orbs** (background decorative):
- Large orbs: 400-600px diameter, radial gradient purple glow
- Medium orbs: 200-300px diameter
- Blur: `blur(80px)` to `blur(120px)`
- Opacity: 0.3-0.5
- Slow drift animation (60-90s duration)

## Page Architecture

### Homepage (Landing)
1. **Hero Section** (full viewport ~90vh):
   - Large glassmorphic center panel with company tagline
   - Background: Engineering-themed abstract image (circuit boards, CAD wireframes, 3D mesh overlays)
   - 3-4 floating purple orbs with slow parallax
   - Primary CTA: "Explore Our Services" (blurred background button on hero image)
   - Secondary CTA: "Request Quote"

2. **About Section** (two-column):
   - Left: Company story, expertise highlights
   - Right: Animated stats cards (glassmorphic) - "50+ Projects", "10+ Industries", "100% Delivery"

3. **Services Grid** (3x2 layout):
   - Six glassmorphic cards with icons (Lucide icons)
   - Each card links to dedicated service page
   - Hover: Subtle scale (1.02) and purple glow increase
   - Icons: CAD (Box), FEA/CFD (Wind), 3D Print (Printer), PCB (Chip), MATLAB (Code), Optimization (Zap)

4. **Technology Stack**:
   - Horizontal scroll carousel of tool logos (SolidWorks, ANSYS, AutoCAD, MATLAB, Altium, CATIA)
   - Grayscale logos with purple tint on hover

5. **Portfolio Preview** (4-6 projects):
   - Grid gallery with overlay titles
   - Click opens modal with project details, images, specs

6. **Contact Section**:
   - Two-column: Left (glassmorphic form), Right (contact info, map placeholder)
   - Form fields: Name, Email, Service Interest, Message, File Upload
   - Purple gradient submit button with glow

### Individual Service Pages (6 pages)
**Structure for each**:
1. Service Hero: Large header with service-specific background image, glassmorphic title panel
2. Overview: What the service includes, key benefits
3. Process Workflow: 3-4 step cards showing methodology
4. Case Studies: 2-3 relevant projects with technical details
5. Tools & Technologies: Specific software/hardware used
6. CTA Section: "Start Your Project" with contact form

## Images

**Hero Images** (to be sourced/created):
- Homepage: Abstract engineering montage (CAD models, simulation meshes, circuit patterns) with depth of field
- CAD Design Page: 3D mechanical parts, assemblies, technical drawings overlay
- FEA/CFD Page: Colorful stress analysis, fluid flow simulation visualization
- 3D Printing Page: Layer-by-layer printing process, finished prototypes
- PCB Design Page: Circuit board layouts, component placement views
- MATLAB Page: Data plots, control system diagrams, code interfaces
- Optimization Page: Before/after comparison renders, performance graphs

**Placement**: All hero sections use large background images (1920x1080+) with dark gradient overlay (bottom to top: `rgba(1,0,48,0.7)` to `rgba(1,0,48,0.3)`) to ensure text readability

## Component Library

**Navigation**:
- Fixed transparent header with backdrop blur on scroll
- Logo left, nav links center, "Request Quote" button right (purple gradient)
- Mobile: Hamburger menu with fullscreen glassmorphic overlay

**Cards** (Service/Portfolio):
- Glass background with border
- Icon/image at top
- Title (Poppins SemiBold)
- Description (Inter Regular)
- Hover: Scale 1.02, increased purple glow
- Padding: `p-8`

**Buttons**:
- Primary: Purple gradient background, white text, rounded-xl
- Secondary: Glass border, purple text, rounded-xl
- On images: Blurred background (`backdrop-blur-md`), no hover background change
- Hover: Slight scale (1.05), enhanced glow

**Forms**:
- Glass input fields with purple focus border
- Placeholders in light gray
- File upload: Drag-and-drop zone (glassmorphic, dashed purple border)
- Submit button: Primary style with loading state

**Modals** (Portfolio):
- Full-screen glassmorphic overlay
- Center panel with project images (carousel), description, specs
- Close button (X) top-right

## Animations & Interactions

**Minimal Motion Philosophy**:
- Background orbs: Slow drift only (60-90s)
- Scroll reveals: Simple fade-in (no slides)
- Hover: Scale and glow only
- Page transitions: Smooth fade (300ms)
- No parallax on scroll (performance)
- No cursor trail effects

**Loading State**: Rotating gear icon (purple) on transparent background during page transitions

## Responsive Behavior
- Desktop (1280px+): Full glassmorphism effects, multi-column layouts
- Tablet (768-1279px): Reduced blur intensity, 2-column grids
- Mobile (<768px): Single column, simplified glass effects, larger touch targets (min 44px)

## Accessibility
- All glassmorphic text maintains 4.5:1 contrast minimum
- Focus states: Purple ring (`ring-2 ring-purple-500`)
- ARIA labels for interactive elements
- Keyboard navigation throughout
- Skip to content link

This design creates a calm yet impressive professional presence that balances technical credibility with visual appeal, using the purple gradient theme throughout while maintaining clarity and usability across all devices.