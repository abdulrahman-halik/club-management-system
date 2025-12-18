# Phase 2: Club Committee

## Overview
Phase 2 focuses on transparent governance by showcasing the club's leadership team. This section serves to build trust and provide clear points of contact for members and the public.

## Detailed Feature Requirements

### 1. Committee Structure & Roles
The committee section will be hierarchical to reflect the governance structure:

#### Executive Officers (High Priority Display)
*   **President**: The head of the club.
*   **Secretary**: Primary administrative contact.
*   **Treasurer**: Financial oversight.
*   **Vice President**: Deputy leadership.
*   **Vice Secretary**: Deputy administration.

#### General Committee
*   **Committee Members**: General supporting members (typically 4-8 individuals).

### 2. Member Profile Data
Each committee member entry requires the following data fields:
*   **Name**: Full name.
*   **Role/Title**: Official designated position (e.g., "Treasurer").
*   **Photo**:
    *   Professional headshot preferred.
    *   Fallback: "Generic Cricket Silhouette" or Club Logo if photo unavailable.
*   **Contact Info** (Optional/Permission-based):
    *   Email address (e.g., `treasurer@unitedcc.com`).
    *   Phone number (optional).
*   **Bio** (Optional): Short description (max 280 chars) of their tenure or goals.

### 3. User Interface & Layout
*   **Hierarchy Layout**:
    *   **Tier 1**: President (Center or Top Left).
    *   **Tier 2**: Senior Officers (Secretary, Treasurer, VP) in a row below.
    *   **Tier 3**: Committee Members in a responsive grid.
*   **Card Design**:
    *   Clean material design cards.
    *   Image top (circle or square aspect ratio).
    *   Name and Title clearly legible.
    *   "Contact" button or icon (reveals email/phone on click to prevent scraping).

## Technical Considerations
*   **Data Structure**: JSON array or Database table `committee_members` with fields: `id`, `name`, `role`, `image_url`, `email`, `priority_order`.
*   **Responsiveness**:
    *   Desktop: 3-4 cards per row.
    *   Tablet: 2 cards per row.
    *   Mobile: Single column vertical stack.
*   **Privacy**: Ensure explicit consent is recorded before publishing personal phone numbers or private emails. Use role-based generic emails where possible.
