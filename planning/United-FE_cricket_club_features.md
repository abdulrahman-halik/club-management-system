# United-FE: Cricket Club Features Planning

This document outlines the Front-End Development Plan for the United Cricket Club web application. It is based on the 7-phase feature structure and focuses exclusively on the user interface, experience, and client-side architecture.

## Technology Stack
*   **Framework**: React 19.2 (via Vite)
*   **Styling**: Tailwind CSS 4.1
*   **State Management**: React Context API + TanStack Query (for server state)
*   **Routing**: React Router v7
*   **Icons**: Lucide React
*   **Forms**: React Hook Form + Zod

---

## Phase 1: Club Identity & Public Presence

### Phase Overview
The implementation of the public-facing "digital face" of the club. This phase establishes the design system, layout, and core public pages.

### UI Components
*   **Layout/Shell**: `MainLayout` (Navbar, Footer, content wrapper).
*   **Navigation**: `Navbar` with responsive mobile drawer.
*   **Branding**: `Logo` component (SVG/Image variant), `SocialIconLink`.
*   **Hero Section**: `HeroBanner` with background image, Motto overlay, and Call-to-Action.
*   **Contact Components**: `ContactCard` (Address, Map embed), `NewsletterSignupForm`.

### Page Structure
*   **Home (`/`)**: Hero section, Mission/Vision snippets, Latest News preview.
*   **Contact (`/contact`)**: Detailed contact info, Google Maps iframe, Enquiry form.

### Tailwind CSS Strategy
*   **Theme**: Define custom `colors.club-primary`, `colors.club-secondary` in `tailwind.config.js`.
*   **Typography**: Set up font family (e.g., Inter/Outfit) utilities.
*   **Responsiveness**: Mobile-first approach using `md:` and `lg:` prefixes for navbar and grid layouts.

### Routing Considerations
*   Standard public routes.
*   `ScrollToTop` behavior on route change.

---

## Phase 2: Club Committee

### Phase Overview
A dedicated section to display the club's governance structure, requiring a flexible grid layout to handle hierarchical data (Executive vs. General Committee).

### UI Components
*   **Committee Cards**: `CommitteeMemberCard` (Image, Name, Role, Bio toggle).
*   **Hierarchy Grid**: `ExecutiveGrid` (highlighted top tier) vs `MemberGrid` (standard grid).
*   **Placeholders**: `AvatarPlaceholder` for members without photos.

### Page Structure
*   **Committee (`/committee`)**:
    *   **Section 1**: Executive Officers (President, Secretary, Treasurer).
    *   **Section 2**: General Committee Members.

### State Management
*   **Data Fetching**: `useQuery(['committee'])` to fetch member JSON structure.
*   **Local State**: `isOpen` state for "Read More" bio expansion on cards.

### Reusable Components Strategy
*   Refactor `Card` basic styles (padding, shadow, rounded corners) to be used here and in Phase 4 (Member Directory).

---

## Phase 3: Accounts & Financial Management

### Phase Overview
A dashboard-style interface for financial tracking. This phase introduces authenticated / role-protected views and data visualization.

### UI Components
*   **Dashboard Widgets**: `StatCard` (Total Fees, Pending, Expenses).
*   **Tables**: `TransactionTable` with sortable columns (Date, Amount, Category).
*   **Forms**: `PaymentForm` (for fees), `ExpenseClaimForm` (with file upload preview).
*   **Sponsorship**: `SponsorShowcase` (Grid of sponsor logos/links).

### Page Structure
*   **Public**:
    *   **Donate / Sponsors (`/sponsors`)**: Public acknowledgement and donation CTA.
*   **Protected (Admin/Treasurer)**:
    *   **Finance Dashboard (`/admin/finance`)**: Overview.
    *   **Expenses (`/admin/finance/expenses`)**: Submission and approval list.

### Routing Considerations
*   **Protected Routre**: High-level wrapper `<ProtectedRoute role={['treasurer', 'admin']} />`.

### Performance
*   Lazy load Recharts or similar charting library if adding visual graphs for Balance Sheet.

---

## Phase 4: Club Members Directory

### Phase Overview
A searchable, filterable list of club members. Privacy and performance with large lists are key front-end concerns here.

### UI Components
*   **List Views**: `MemberListItem` (Row) vs `MemberGridItem` (Card).
*   **Search/Filter**: `SearchInput` (Debounced), `FilterDropdown` (Team, Role).
*   **Profile**: `MemberProfileModal` or `MemberProfilePage`.
*   **Privacy Masks**: `PrivateContactField` (Blur or "Click to Reveal").

### Page Structure
*   **Directory (`/members`)**: Sidebar filters + Main list area.
*   **Profile (`/members/:id`)**: Detailed view.

### State Management
*   **Client-Side Filtering**: If list < 500 members, fetch all and filter locally for speed.
*   **Server-Side Filtering**: If list > 500, use query params (`?q=name&team=1stXI`).

### Tailwind CSS Strategy
*   Use `group-hover` for interactive list items.
*   `line-clamp` for bio text in grid view.

---

## Phase 5: Club Meetings & Governance

### Phase Overview
A functional calendar and document repository area. Focus on clarity of dates and accessible document downloads.

### UI Components
*   **Calendar**: `EventCalendar` (Month view) or `AgendaList` (List view for mobile).
*   **Event Item**: `MeetingCard` (Date badge, Title, Location, Agenda snippet).
*   **Archives**: `DocumentList` with PDF icons and download buttons.

### Page Structure
*   **Meetings (`/meetings`)**: Tabs for "Upcoming" vs "Minutes Archive".
*   **Meeting Detail (`/meetings/:id`)**: Full agenda and resource links.

### Performance
*   Pre-fetch upcoming meeting details on hover.
*   Use browser-native PDF handling or lightweight wrapper.

---

## Phase 6: Club Inventory & Asset Management

### Phase Overview
A mobile-first inventory tracking system designed for use "on the go" (e.g., at the cricket storage shed).

### UI Components
*   **Inventory Cards**: `AssetCard` (Image, Status Badge, "Assign" button).
*   **Status Badges**: `StatusPill` (Color-coded: Good/Green, Damaged/Red).
*   **Actions**: `CheckOutModal` (Select Member), `StockUpdateInput` (Counter for balls).

### Page Structure
*   **Inventory (`/inventory`)**: Filterable list by category (Kits, Training, Ground).

### Responsiveness & Design
*   **Mobile-First**: Large touch targets (min 44px) for specific buttons (Check-in/Check-out).
*   **Layout**: Single column layout on default, switching to table on desktop.

### State Management
*   Optimistic UI updates for Stock levels (decrement immediately on click, revert if API fails).

---

## Phase 7: Administrative Features (Back Office)

### Phase Overview
A comprehensive control panel for managing the data across all previous phases.

### UI Components
*   **Admin Shell**: `AdminSidebar` (Collapsible), `MetricOverview`.
*   **Editors**: `RichTextEditor` (for News/CMS), `ImageUploader` (Drag & drop).
*   **User Management**: `UserTable` with bulk actions (Email, Delete).
*   **Feedback**: `ToastNotification` system for action success/failure.

### Page Structure
*   **Admin Root (`/admin`)**: Dashboard.
*   **CMS (`/admin/cms`)**: News editor.
*   **Users (`/admin/users`)**: Member database management.
*   **Communications (`/admin/comms`)**: Email/SMS blast interface.

### Routing Considerations
*   Nested Routes: `admin/*` with a shared layout.
*   Strict role verification on every admin route transition.

### Reusable Components Strategy
*   `AdminTable`: A generic, highly-configurable table component (sorting, pagination, actions) reused for Users, Inventory, and Finance.

---

## Project Structure

This folder structure organizes code by **Features** rather than strictly by file type. This improves scalability and maintainability as the application grows through the 7 phases.

```
src/
├── assets/                  # Static assets (images, fonts)
│   ├── images/
│   └── logos/
├── components/              # Shared/Common UI Components
│   ├── ui/                  # Basic atoms (Button, Input, Modal, Card) - Shadcn/UI style
│   ├── layout/              # Layout components (MainLayout, Navbar, Footer, Sidebar)
│   └── feedback/            # Toasts, Spinners, ErrorBoundaries
├── features/                # Domain-specific code (The 7 Phases)
│   ├── public/              # Phase 1: Public pages (Home, Contact)
│   │   ├── components/
│   │   └── pages/
│   ├── committee/           # Phase 2: Committee features
│   │   ├── components/
│   │   ├── hooks/
│   │   └── types.js
│   ├── finance/             # Phase 3: Finance & Accounts
│   │   ├── components/      # TransactionTable, PaymentForm
│   │   └── api/
│   ├── members/             # Phase 4: Member Directory
│   │   ├── components/      # MemberCard, MemberList
│   │   └── MembersPage.jsx
│   ├── meetings/            # Phase 5: Meetings & Minutes
│   │   ├── components/      # Calendar, MinutesList
│   │   └── MeetingsPage.jsx
│   ├── inventory/           # Phase 6: Inventory
│   │   ├── components/      # AssetCard, CheckInOutModal
│   │   └── InventoryPage.jsx
│   └── admin/               # Phase 7: Back Office
│       ├── layouts/         # AdminLayout
│       ├── components/      # AdminSidebar, CMSEditor
│       └── pages/           # Dashboard, UserManagement
├── hooks/                   # Global custom hooks (useAuth, useTheme, useMediaQuery)
├── lib/                     # Utility libraries (axios instance, date formatting)
│   ├── api-client.js
│   └── utils.js
├── context/                 # Global Contexts (AuthContext, ToastContext)
├── types/                   # Global JSDoc definitions (if needed)
├── App.jsx                  # Root component & Route definitions
└── main.jsx                 # Entry point
```

### Key Directories Explained

*   **`components/ui`**: Highly reusable base components. These are "dumb" components that receive props and render UI (e.g., `Button`, `Input`).
*   **`features/`**: The core of the application logic. Each folder here corresponds roughly to one of the 7 phases.
    *   *Self-Containment*: Each feature folder should ideally contain its own unique components, constants, and hooks to prevent the `src/components` folder from becoming bloated with domain-specific logic.
*   **`lib/`**: Helpers and configurations. `utils.js` for things like `clsx` or `tailwind-merge` class merging.
*   **`admin/`**: While technically a feature, the admin section often has its own layout and distinct styling needs, so it's isolated within `features/admin`.
