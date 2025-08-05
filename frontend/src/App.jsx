import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import './App.css';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Dashboard Route - Full Screen Without Navbar/Footer */}
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Regular Routes - With Navbar/Footer */}
        <Route path="/*" element={
          <>
            <Navbar />
            <main className="app-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/features" element={<Features />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </main>
            <Footer />
          </>
        } />
      </Routes>
    </>
  );
}

export default App;
