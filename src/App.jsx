import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import ScrollToTop from './components/layout/ScrollToTop';
import LoadingSpinner from './components/ui/LoadingSpinner';
import ErrorBoundary from './components/ui/ErrorBoundary';
import './index.css';

// Lazy load pages
const Home = lazy(() => import('./features/public/pages/Home'));
const About = lazy(() => import('./features/public/pages/About'));
const Committee = lazy(() => import('./features/public/pages/Committee'));
const Login = lazy(() => import('./features/auth/pages/LoginPage'));
const Register = lazy(() => import('./features/auth/pages/RegisterPage'));
const Contact = lazy(() => import('./features/public/pages/Contact'));
const Events = lazy(() => import('./features/public/pages/Events'));
const NotFound = lazy(() => import('./features/public/pages/NotFound'));
const News = lazy(() => import('./features/public/pages/News'));
const Sponsors = lazy(() => import('./features/public/pages/Sponsors'));
const LiveTelecast = lazy(() => import('./features/live/LiveTelecastPage'));

// Finance Pages
// const SponsorsPage = lazy(() => import('./features/finance/pages/SponsorsPage')); // Replaced by public Sponsors page
const FinanceDashboard = lazy(() => import('./features/finance/pages/FinanceDashboard'));
const ExpensesPage = lazy(() => import('./features/finance/pages/ExpensesPage'));
const MembersPage = lazy(() => import('./features/members/MembersPage'));
const MeetingsPage = lazy(() => import('./features/meetings/MeetingsPage'));

// Inventory Pages
const InventoryPage = lazy(() => import('./features/inventory/InventoryPage'));

// Tournament Pages
const TournamentListPage = lazy(() => import('./features/tournaments/pages/TournamentListPage'));
const TournamentDashboard = lazy(() => import('./features/tournaments/pages/TournamentDashboard'));

// Admin Pages
const AdminLayout = lazy(() => import('./features/admin/layouts/AdminLayout'));
const AdminDashboard = lazy(() => import('./features/admin/pages/Dashboard'));
const NewsManagementPage = lazy(() => import('./features/admin/pages/cms/NewsManagementPage'));
const FixtureManagementPage = lazy(() => import('./features/admin/pages/cms/FixtureManagementPage'));
const DocumentsPage = lazy(() => import('./features/admin/pages/cms/DocumentsPage'));
const UserManagementPage = lazy(() => import('./features/admin/pages/Users'));
const BroadcastPage = lazy(() => import('./features/admin/pages/Communications'));

// Security
const ProtectedRoute = lazy(() => import('./features/auth/components/ProtectedRoute'));

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <ScrollToTop />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="committee" element={<Committee />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="events" element={<Events />} />
              <Route path="sponsors" element={<Sponsors />} />
              <Route path="news" element={<News />} />
              <Route path="live" element={<LiveTelecast />} />
              <Route path="tournaments" element={<TournamentListPage />} />
              <Route path="tournaments/:tournamentId/*" element={<TournamentDashboard />} />
              <Route path="members" element={
                <ProtectedRoute allowedRoles={['member', 'committee', 'admin']}>
                  <MembersPage />
                </ProtectedRoute>
              } />
              <Route path="inventory" element={
                <ProtectedRoute allowedRoles={['member', 'committee', 'admin']}>
                  <InventoryPage />
                </ProtectedRoute>
              } />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Admin Back Office Routes (Protected) */}
            <Route path="/admin" element={
              <ProtectedRoute allowedRoles={['admin', 'editor', 'committee']}>
                <AdminLayout />
              </ProtectedRoute>
            }>
              <Route index element={<AdminDashboard />} />
              <Route path="finance" element={<FinanceDashboard />} />
              <Route path="finance/expenses" element={<ExpensesPage />} />

              {/* CMS Routes */}
              <Route path="cms" element={<NewsManagementPage />} />
              <Route path="fixtures" element={<FixtureManagementPage />} />
              <Route path="documents" element={<DocumentsPage />} />

              {/* Users & Comms */}
              <Route path="users" element={<UserManagementPage />} />
              <Route path="comms" element={<BroadcastPage />} />
            </Route>

            {/* Governance Routes - Meetings (View for Members, Create/Update for Committee/Admin) */}
            {/* Note: Specific permission logic for create/update should be inside MeetingsPage or its sub-components */}
            <Route path="/meetings" element={
              <ProtectedRoute allowedRoles={['member', 'committee', 'admin']}>
                <MeetingsPage />
              </ProtectedRoute>
            } />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
