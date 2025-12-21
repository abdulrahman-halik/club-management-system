import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Committee from './pages/Committee';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="committee" element={<Committee />} />
          {/* Future routes will go here */}
          <Route path="about" element={<div className="p-8 text-center text-xl">About Page (Coming Soon)</div>} />
          <Route path="*" element={<div className="p-8 text-center text-xl">404 - Page Not Found</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
