# Phase 3: Accounts & Financial Management

## Overview
Phase 3 enables financial transparency and tracking for the club. It shifts from public-facing features to internal administration, managing both incoming revenue (fees, sponsors) and outgoing costs.

## Detailed Feature Requirements

### 1. Member Fees (Revenue)
*   **Tracking Dashboard**: View of all members and their payment status (Paid, Pending, Overdue).
*   **Categories**:
    *   **Annual Subs**: Senior, Student, Junior.
    *   **Match Fees**: Per-game payments.
*   **Transaction Record**: Note payment method (Cash, Bank Transfer) and date.

### 2. Donations & Sponsors (Revenue)
*   **Sponsor Profile**:
    *   Company Name, Logo, Contact Person.
    *   Sponsorship Amount & Term (e.g., 2025 Season).
*   **Donations**:
    *   Record individual donations (Name, Amount, Date).
    *   "Anonymous" option for public display.

### 3. Cost & Expenses (Expenditure)
*   **Expense Categories**:
    *   Ground Hiring / Maintenance.
    *   Equipment (Balls, Kits).
    *   Umpire/Scorer Fees.
    *   Teas/Catering.
*   **Entry Form**:
    *   Date, Amount, Category, Description.
    *   Upload Receipt (image/PDF support).

### 4. Financial Reporting (Basic)
*   **Summary View**: Total Income vs Total Expenditure for the season.
*   **Balance Sheet**: Current club funds availability.
*   **Export**: Ability to export data to CSV for the Treasurer.

## Technical Considerations
*   **Security**: Restricted access. Only specific roles (President, Treasurer) can view/edit financial data.
*   **Database**:
    *   `transactions` table: `id`, `type` (credit/debit), `amount`, `category`, `reference_id` (member_id or sponsor_id), `date`, `receipt_url`.
*   **Data Validation**: Ensure non-negative numbers for pricing.
*   **Currency**: Fixed to local currency (e.g., £/$/₹) based on club location.
