# SecurityLink High-End UI Redesign Specification

## Design Philosophy
The goal is to move away from "standard corporate" to "technological authority." The design should feel like a high-tech command center or a premium security interface.

## Key Visual Elements
- **Grid Systems**: Use visible or subtle grid lines (like the `rigid-grid` in the homepage-2) to create a sense of structure and precision.
- **Glassmorphism**: Use `backdrop-blur-xl` and semi-transparent backgrounds for overlays and cards to create depth.
- **Micro-interactions**: Subtle hover animations, scale transitions, and shimmer effects on buttons.
- **Typography**: 
    - **Headlines**: `Plus Jakarta Sans` with tight tracking and uppercase for a bold, authoritative look.
    - **Technical Data**: `Courier Prime` for small labels, coordinates, or status indicators to give a "live feed" feel.
- **Color Palette Expansion**: 
    - Primary: `Cobalt Electric (#2563EB)`
    - Background: `Deep Obsidian (#031427 / #0B0F19)`
    - Accent: `Amber/Orange` for critical calls to action.
    - Borders: `Surface Border (rgba(100, 116, 139, 0.3))` for that technical, wireframe feel.

## Component Redesigns

### 1. Immersive Hero Section
- Instead of a simple title, use a "Technical HUD" (Heads-Up Display) style.
- Include background images with dark, high-contrast overlays.
- Add technical metadata (e.g., "SEC-DIV: GUARD", "STATUS: OPERATIONAL", "COORD: 23.81° N").
- Use large, bold typography with a "glitch" or "shimmer" entrance effect.

### 2. Service Matrix Grid
- Use a bento-style grid with varying card sizes.
- Cards should have border-glow effects on hover.
- Icons should be large, clean, and use the Cobalt Electric color.

### 3. Content Storytelling
- Instead of bullet points, use "Data Blocks" with vertical accent lines.
- Use high-quality imagery from the `public` folder (e.g., `hero1.jpg`, `hero10.JPG`) with consistent treatments.
- Integrate "Live Feed" components (e.g., a small box showing "Supervision Log: [OK]").

## Page-Specific Landmark Features

### Guard Division
- **Feature**: "Operational Hierarchy Visualization" using a technical diagram style.
- **Visual**: Use `hero16.JPG` or similar for a large, immersive background.

### Logistics Division
- **Feature**: "Service Grid" with unique icons and a clean, industrial aesthetic.
- **Visual**: Use `hero13.jpg` or similar to represent scale and operations.

### Risk Management Division
- **Feature**: "Strategic Roadmap" or "Threat Analysis Matrix" visual.
- **Visual**: Use `hero10.JPG` for a sophisticated, consulting-focused feel.

## Technical Execution
- Use Next.js `Image` component with proper sizing.
- Tailwind CSS for all styling.
- Framer Motion style animations (using standard CSS/Tailwind transitions for performance).
