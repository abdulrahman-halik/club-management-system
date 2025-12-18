# Phase 5: Club Meetings & Governance

## Overview
Phase 5 ensures correct governance and keeps members informed about club decision-making. It provides a central repository for meeting schedules and official records.

## Detailed Feature Requirements

### 1. Meeting Schedule
*   **Calendar View**: Visual calendar displaying upcoming meetings.
    *   **Types**: Annual General Meeting (AGM), Monthly Committee Meeting, Extraordinary General Meeting (EGM).
*   **Event Details**:
    *   **Date & Time**: Start and expected duration.
    *   **Location**: Physical location (Clubhouse) or Virtual Link (Zoom/Teams).
    *   **Agenda Preview**: Brief bullet points of topics to be discussed.

### 2. Meeting Minutes Archive
*   **Document Repository**: A structured list of past meetings.
    *   **Downloadable Assets**: PDF links for "Minutes" and "Agendas".
*   **Organization**: Grouped by Year (e.g., 2024, 2025).
*   **Search**: Filter by meeting type or date.

### 3. Access & Permissions
*   **Public Access**:
    *   AGM Dates and Minutes (Required for transparency).
*   **Member-Only Access**:
    *   General Committee Meeting schedules.
*   **Committee-Only Access**:
    *   Draft minutes before approval.
    *   Sensitive financial meeting notes.

## Technical Considerations
*   **File Storage**: Store PDFs in a dedicated `/assets/documents/minutes/` directory or cloud storage (AWS S3/Firebase Storage).
*   **File Naming Convention**: `YYYY-MM-DD_MeetingType.pdf` (e.g., `2025-04-12_Committee.pdf`) for consistent sorting.
*   **Mobile View**: On mobile, the calendar should potentially degrade to a "List of Upcoming Events" for better usability.
