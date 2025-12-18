# Phase 7: Administrative Features (Back Office)

## Overview
Phase 7 consolidates control of the web application into a secure administration area. It empowers non-technical committee members to manage content, data, and communications without editing code.

## Detailed Feature Requirements

### 1. Content Management System (CMS)
*   **News & Announcements**:
    *   Rich Text Editor (WYSIWYG) for articles.
    *   Image upload for headers/content.
    *   Publish/Unpublish toggle.
*   **Fixture Management**:
    *   Create events: Team (Select 1st/2nd XI), Opponent, Venue, Date/Time.
*   **Document Uploads**:
    *   Interface to upload PDFs for Meeting Minutes (linked to Phase 5).

### 2. Centralized Member Database (Admin View)
*   **Extended Profile**:
    *   Matches Phase 4 but includes *private* data: Address, DOB (for junior eligibility), Emergency Contact.
*   **Data Export**:
    *   Export filtered lists to CSV (e.g., "All Junior Members") for league registration purposes.
*   **Tagging**: Ad-hoc tags (e.g., "Safeguarding Certificate Expiry").

### 3. Communication Tools
*   **Broadcast System**:
    *   **Email**: Send newsletters or announcements to specific groups (All Members, Committee, Juniors).
    *   **SMS**: Urgent alerts (e.g., "Match Cancelled") via integration (Twilio/AWS SNS).
*   **Templates**: Saved templates for recurring messages (e.g., "Weekly Selection").

## Technical Considerations
*   **Authentication & Authorization**:
    *   Strict Role-Based Access Control (RBAC).
    *   Roles: `SuperAdmin` (Dev), `ClubAdmin` (Secretary/Prez), `Editor` (Committee).
*   **Audit Logging**:
    *   Track *who* made changes to member data or sent communications.
*   **Security**:
    *   Force 2FA for Admin accounts if handling sensitive member data.
    *   Rate limiting on the email/SMS tool to prevent spam/cost overruns.