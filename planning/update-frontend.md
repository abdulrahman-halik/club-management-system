# United-FE: Cricket Club Features Planning (Updated)

This document outlines the **Front-End Development Plan** for the United Cricket Club web application. It uses a **feature-based architecture** for scalability, maintainability, and role-based access control.

## Technology Stack

-   **Framework**: React 19.2 (via Vite)
-   **Styling**: Tailwind CSS 4.1
-   **State Management**: redux
-   **Routing**: React Router v7
-   **Icons**: Lucide React
-   **Forms**: React Hook Form + Zod
-   **Real-Time Features**: Socket.io (for live telecasting, auction, notifications)
-   **Charts/Data Visualization**: Recharts, Heatmaps, Worm Graphs

## User Roles and Feature Access

| Role | Who | Features |
| :--- | :--- | :--- |
| **Public (No Login)** | Visitors, sponsors, general users | Home, About, Committee (read-only), Sponsors, News, Contact, Live Telecasting (view only) |
| **Member (Logged In)** | Players and club members | All Public Features + Dashboard, Profile, Membership Status, Attendance, Inventory (assigned items), Meetings (view), Notifications |
| **Committee Member** | Limited administrative powers | All Member Features + Meetings (create/update), Inventory (assign), Finance (view only), Reports (view) |
| **Admin (Super User)** | Full control | All Committee Features + User Management, Finance Control, CMS (News/Pages), Inventory (full CRUD), Permissions, System Settings |

✅ This role-based approach is recommended for a **Club Management System** to separate **member features** and **admin privileges**, improving security and usability.

## Front-End Phases (Updated with Additional Features)

### Phase 1: Club Identity & Public Presence

**UI Components**

-   *MainLayout* (Navbar, Footer, content wrapper)
-   *Navbar* with responsive mobile drawer
-   *Logo* & *SocialIconLink*
-   *HeroBanner* with motto overlay and CTA
-   *ContactCard* + *NewsletterSignupForm*
-   **New**: *LiveTelecastBanner* (embedded live stream, YouTube/RTMP)

**Pages**

-   *Home (/)*: Hero, Club achievements, news snippet, upcoming live telecast
-   *About (/about)*: Club history, mission, vision
-   *Sponsors (/sponsors)*: Grid of sponsor logos
-   *Contact (/contact)*: Form + Google Map
-   *Committee (/committee)*: Public committee view
-   *News (/news)*: Read-only articles
-   *NotFound (/404)*: Page for unmatched routes

### Phase 2: Club Committee

**UI Components**

-   *CommitteeMemberCard* (Image, Name, Role, Bio toggle)
-   *ExecutiveGrid* vs *MemberGrid*
-   *AvatarPlaceholder*

**Pages**

-   */committee*: Executive Officers + General Committee members

**State Management**

-   *useQuery(['committee'])* for member JSON data
-   Local *isOpen* state for bios

### Phase 3: Accounts & Financial Management

**UI Components**

-   *StatCard* (Total Fees, Pending, Expenses)
-   *TransactionTable* (sortable)
-   *PaymentForm* + *ExpenseClaimForm*
-   *SponsorShowcase*

**Pages**

-   Public: */sponsors*
-   Protected: */admin/finance*, */admin/finance/expenses*

**Routing**

-   *<ProtectedRoute role={['treasurer','admin']} />*

### Phase 4: Club Members Directory

**UI Components**

-   *MemberListItem* / *MemberGridItem*
-   *SearchInput* (debounced)
-   *FilterDropdown* (Team, Role)
-   *MemberProfileModal* or */members/:id*

**Privacy**

-   *PrivateContactField*

**Pages**

-   */members*: Directory + filters
-   */members/:id*: Profile detail

**Performance**

-   Client-side filtering (<500 members)
-   Server-side filtering (>500 members)

### Phase 5: Club Meetings & Governance

**UI Components**

-   *EventCalendar* / *AgendaList*
-   *MeetingCard*
-   *DocumentList* with download

**Pages**

-   */meetings*: Tabs for upcoming vs archived
-   */meetings/:id*: Agenda + resources

**Performance**

-   Pre-fetch upcoming events

### Phase 6: Club Inventory & Asset Management

**UI Components**

-   *AssetCard*, *StatusPill*, *CheckOutModal*, *StockUpdateInput*

**Pages**

-   */inventory*: Filterable list by category (Kits, Training, Ground)

**Responsiveness**

-   Mobile-first with large touch targets
-   Optimistic UI updates

### Phase 7: Administrative Features (Back Office)

**UI Components**

-   *AdminSidebar*, *MetricOverview*, *RichTextEditor*, *ImageUploader*, *ToastNotification*, *AdminTable*

**Pages**

-   */admin*: Dashboard
-   */admin/cms*: News editor
-   */admin/users*: User management
-   */admin/comms*: Email/SMS blast interface

**Routing**

-   Nested *admin/** routes
-   Strict role verification

### Phase 8: Live Telecasting (New Feature)

**UI Components**

-   *LiveTelecastPage*: Embedded live stream, current match info, score overlay
-   *LiveChat* (optional for public interaction)

**Pages**

-   */live*: View-only access for Public & Members
-   Admins can schedule streams, embed links

**Integration**

-   Use *Socket.io* or API polling for live scores
-   Responsive video player with fallback

## Updated Project Structure (Feature-Based)

```text
src/
├── assets/
│   ├── images/               # Club images, icons, placeholder avatars
│   ├── logos/                # Logos for sponsors, club, and pages
│   └── videos/               # Live telecast recordings or intro videos
│
├── components/
│   ├── ui/                   # Reusable UI components (buttons, cards, modals)
│   ├── layout/               # MainLayout, AdminLayout, Navbar, Footer, Sidebar
│   └── feedback/             # Toast, Snackbars, Alerts, Notifications
│
├── features/
│   ├── auth/                 # Login/Register/Forgot Password
│   │   ├── components/
│   │   │   ├── LoginForm.jsx
│   │   │   ├── RegisterForm.jsx
│   │   │   └── ForgotPasswordForm.jsx
│   │   ├── pages/
│   │   │   ├── LoginPage.jsx
│   │   │   ├── RegisterPage.jsx
│   │   │   └── ForgotPasswordPage.jsx
│   │   └── authSlice.js      # Redux slice for auth state
│   │
│   ├── public/               # Phase 1: Public-facing pages
│   │   ├── components/
│   │   │   ├── HeroBanner.jsx
│   │   │   ├── ContactCard.jsx
│   │   │   └── LiveTelecastBanner.jsx
│   │   └── pages/
│   │       ├── Home.jsx
│   │       ├── About.jsx
│   │       ├── Sponsors.jsx
│   │       ├── Contact.jsx
│   │       ├── Committee.jsx
│   │       ├── News.jsx
│   │       └── NotFound.jsx
│   │
│   ├── committee/            # Phase 2
│   │   ├── components/
│   │   │   ├── CommitteeMemberCard.jsx
│   │   │   ├── ExecutiveGrid.jsx
│   │   │   └── MemberGrid.jsx
│   │   ├── hooks/
│   │   │   └── useCommitteeData.js
│   │   └── committeeData.js  # Replaces types.js (if needed)
│   │
│   ├── finance/              # Phase 3
│   │   ├── components/
│   │   │   ├── StatCard.jsx
│   │   │   ├── TransactionTable.jsx
│   │   │   └── PaymentForm.jsx
│   │   └── api/
│   │       └── financeApi.js
│   │
│   ├── members/              # Phase 4
│   │   ├── components/
│   │   │   ├── MemberListItem.jsx
│   │   │   ├── MemberGridItem.jsx
│   │   │   ├── SearchInput.jsx
│   │   │   └── FilterDropdown.jsx
│   │   └── MembersPage.jsx
│   │
│   ├── meetings/             # Phase 5
│   │   ├── components/
│   │   │   ├── EventCalendar.jsx
│   │   │   ├── MeetingCard.jsx
│   │   │   └── DocumentList.jsx
│   │   └── MeetingsPage.jsx
│   │
│   ├── inventory/            # Phase 6
│   │   ├── components/
│   │   │   ├── AssetCard.jsx
│   │   │   ├── StatusPill.jsx
│   │   │   ├── CheckOutModal.jsx
│   │   │   └── StockUpdateInput.jsx
│   │   └── InventoryPage.jsx
│   │
│   ├── admin/                # Phase 7
│   │   ├── layouts/
│   │   │   └── AdminLayout.jsx
│   │   ├── components/
│   │   │   ├── MetricOverview.jsx
│   │   │   ├── RichTextEditor.jsx
│   │   │   ├── ImageUploader.jsx
│   │   │   └── AdminTable.jsx
│   │   └── pages/
│   │       ├── Dashboard.jsx
│   │       ├── Users.jsx
│   │       ├── CMS.jsx
│   │       └── Communications.jsx
│   │
│   └── live/                 # Phase 8
│       ├── components/
│       │   ├── LiveTelecastPlayer.jsx
│       │   └── LiveChat.jsx
│       └── LiveTelecastPage.jsx
│
├── hooks/                     # Shared hooks
│   ├── useDebounce.js
│   ├── useSocket.js
│   └── useWindowSize.js
│
├── lib/                       # Utilities & API clients
│   ├── api-client.js
│   └── utils.js
│
├── context/                   # React Contexts (optional)
│   └── ToastContext.js
│
├── App.jsx
├── main.jsx
└── routes.jsx                 # Centralized route definitions

```

### Suggestions and Notes

1.  **Role-Based Access**:
    -   Public: only view pages (Home, About, Sponsors, News, Contact, Live Telecasting)
    -   Members: personal dashboards, meetings, inventory
    -   Committee: extra privileges like assigning inventory or creating meetings
    -   Admin: full CRUD, user/role management, system settings

2.  **Front-End Expansion Ideas**:
    -   **Gamification**: badges, streaks, leaderboards
    -   **Analytics**: charts, heatmaps, wagon wheels
    -   **Real-Time Features**: auction-style live player bidding (optional)
    -   **Accessibility**: mobile-first, touch-friendly, screen reader-friendly

3.  **Missing Pages Added**:
    -   About, NotFound, LiveTelecasting page

4.  **Tech Enhancements**:
    -   Lazy load heavy charts/videos
    -   Debounced search/filter
    -   Optimistic UI for fast interactions
