import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/layout/ScrollToTop';
import LoadingSpinner from './components/ui/LoadingSpinner';
import ErrorBoundary from './components/ui/ErrorBoundary';
import './index.css';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Committee = lazy(() => import('./pages/Committee'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Finance Pages
const SponsorsPage = lazy(() => import('./features/finance/pages/SponsorsPage'));
const FinanceDashboard = lazy(() => import('./features/finance/pages/FinanceDashboard'));
const ExpensesPage = lazy(() => import('./features/finance/pages/ExpensesPage'));
const MembersPage = lazy(() => import('./features/members/pages/MembersPage'));
const GovernanceDashboard = lazy(() => import('./features/governance/pages/GovernanceDashboard'));

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
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* Admin / Finance Routes - Placeholder for protected routes */}
            <Route path="/admin/finance" element={<FinanceDashboard />} />
            <Route path="/admin/finance/expenses" element={<ExpensesPage />} />

            {/* Governance Routes */}
            <Route path="/governance" element={<GovernanceDashboard />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
