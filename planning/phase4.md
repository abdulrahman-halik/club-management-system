# Phase 4: Club Members Directory

## Overview
Phase 4 creates a centralized, searchable directory of club members. This fosters community by helping members connect while strictly adhering to privacy standards.

## Detailed Feature Requirements

### 1. Member Directory (List View)
*   **Search & Filter**:
    *   **Search**: By Name.
    *   **Filter**: By Membership Type (Player, Social, Junior, Life Member).
*   **List Item Information**:
    *   **Thumbnail**: Profile photo (round).
    *   **Name**: Full name.
    *   **Category**: Badge indicating membership type (e.g., "1st XI Player").
    *   **Status**: Active/Inactive indicator.

### 2. Member Profiles (Detail View)
Clicking a member in the directory opens their full profile.
*   **Basic Info**: Name, Join Date, Membership Number.
*   **Role Info**:
    *   *Players*: Batting/Bowling style, Team (e.g., Saturday 2nd XI).
    *   *Committee*: Link to their committee role if applicable.
*   **Contact Info** (Protected):
    *   Phone and Email (Only visible to authorized users or logged-in members).

### 3. Privacy & Access Control
*   **Visibility Levels**:
    *   **Public**: Nothing (or just names if explicitly agreed).
    *   **Member-Only**: Basic profile info + photos.
    *   **Admin-Only**: Full contact details, address, payment status.
*   **Opt-Out**: "Hide my profile from directory" checkbox for privacy-conscious members.

## Technical Considerations
*   **Data Security**:
    *   Contact details MUST NOT be rendered in the HTML for non-privileged users.
    *   API endpoints for fetching member data must enforce authentication checks.
*   **Pagination**: Use infinite scroll or pagination (20 items per page) to handle large member lists efficiently.
*   **Mobile Experience**: The "Call" and "Message" buttons should trigger native mobile actions (`tel:`, `sms:`).
