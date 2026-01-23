import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/layout/ScrollToTop';
import LoadingSpinner from './components/ui/LoadingSpinner';
import ErrorBoundary from './components/ui/ErrorBoundary';
import './index.css';

// Lazy load pages
const Home = lazy(() => import('./features/public/pages/Home'));
const About = lazy(() => import('./features/public/pages/About'));
const Committee = lazy(() => import('./features/committee/pages/CommitteePage'));
const Login = lazy(() => import('./features/public/pages/Login'));
const Register = lazy(() => import('./features/public/pages/Register'));
const Contact = lazy(() => import('./features/public/pages/Contact'));
const NotFound = lazy(() => import('./features/public/pages/NotFound'));

// Finance Pages
const SponsorsPage = lazy(() => import('./features/finance/pages/SponsorsPage'));
const FinanceDashboard = lazy(() => import('./features/finance/pages/FinanceDashboard'));
const ExpensesPage = lazy(() => import('./features/finance/pages/ExpensesPage'));
const MembersPage = lazy(() => import('./features/members/pages/MembersPage'));
const GovernanceDashboard = lazy(() => import('./features/governance/pages/GovernanceDashboard'));

// Inventory Pages
const InventoryPage = lazy(() => import('./features/inventory/pages/InventoryPage'));

// Admin Pages
const AdminLayout = lazy(() => import('./features/admin/layouts/AdminLayout'));
const AdminDashboard = lazy(() => import('./features/admin/pages/DashboardPage'));
const NewsManagementPage = lazy(() => import('./features/admin/pages/cms/NewsManagementPage'));
const FixtureManagementPage = lazy(() => import('./features/admin/pages/cms/FixtureManagementPage'));
const DocumentsPage = lazy(() => import('./features/admin/pages/cms/DocumentsPage'));
const UserManagementPage = lazy(() => import('./features/admin/pages/users/UserManagementPage'));
const BroadcastPage = lazy(() => import('./features/admin/pages/comms/BroadcastPage'));

// Security
const ProtectedRoute = lazy(() => import('./components/auth/ProtectedRoute'));

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <ScrollToTop />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="committee" element={<Committee />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="sponsors" element={<SponsorsPage />} />
              <Route path="members" element={<MembersPage />} />
              <Route path="inventory" element={<InventoryPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Admin Back Office Routes (Protected) */}
            <Route path="/admin" element={
              <ProtectedRoute allowedRoles={['admin', 'editor']}>
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

            {/* Governance Routes */}
            <Route path="/governance" element={<GovernanceDashboard />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
