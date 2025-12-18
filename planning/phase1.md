# Phase 1: Club Identity & Public Presence

## Overview
Phase 1 focuses on establishing the digital face of the cricket club ("United"). This includes the core branding, essential contact information, and initial user engagement channels.

## Detailed Feature Requirements

### 1. Brand Identity
*   **Club Name**: Displayed prominently in the header (Navbar) and footer. Text-based fallback if logo fails.
*   **Logo**: 
    *   **Header**: Scalable SVG or high-res PNG, max-height 64px.
    *   **Favicon**: Reduced version for browser tabs.
    *   **OpenGraph**: Version optimized for social media sharing cards.

### 2. Core Messaging
*   **Motto**: Short, punchy tagline (e.g., "United We Play"). displayed near the hero section.
*   **Vision Statement**: Forward-looking statement (e.g., "To be the premier cricket development hub...").
*   **Mission Statement**: Action-oriented statement (e.g., "Fostering talent through discipline and community...").
*   **Placement**: These should be featured on the Homepage hero or a dedicated "About Us" segment.

### 3. Location & Contact
*   **Physical Address**: Full postal address.
*   **Map Integration**: Google Maps embed (iframe) pointing to the club ground/clubhouse.
*   **Contact Channels**:
    *   **Phone**: Click-to-call (`tel:`) links for mobile users.
    *   **Email**: Click-to-email (`mailto:`) links for general enquiries.

### 4. Social Media Integration
*   **Platforms**: Twitter (X), Instagram, Facebook.
*   **Implementation**: 
    *   Icon-based links in the Header (top-right) and Footer (centered/right).
    *   Hover effects for interactivity.
    *   Accessibility: `aria-label` tags for screen readers.

### 5. Audience Engagement
*   **Newsletter Signup**:
    *   **UI**: Simple input field (`type="email"`) + "Subscribe" button.
    *   **Validation**: Basic client-side email format check.
    *   **Feedback**: Success message ("Thanks for subscribing!") or error handling.

## Technical Considerations
*   **Responsiveness**: Layout must adapt to mobile (vertical stack) vs desktop (horizontal layout for contacts/socials).
*   **SEO**: Implement `JSON-LD` Schema for `SportsTeam` or `Organization` containing name, logo, address, and social links.
*   **Performance**: Optimize logo assets (WebP/SVG) to minimize load time.
