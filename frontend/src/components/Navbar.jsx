import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={closeMenu}>
          <i className="bi bi-heart-pulse me-2"></i>
          Diyetisyenim
        </Link>
        
        <button 
          className={`navbar-toggler ${isMenuOpen ? 'active' : ''}`}
          type="button" 
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <i className={`bi ${isMenuOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={closeMenu}>Ana Sayfa</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/features" onClick={closeMenu}>Özellikler</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pricing" onClick={closeMenu}>Fiyatlandırma</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login" onClick={closeMenu}>Giriş Yap</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="btn btn-primary ms-3" to="/register" onClick={closeMenu}>Ücretsiz Dene</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
