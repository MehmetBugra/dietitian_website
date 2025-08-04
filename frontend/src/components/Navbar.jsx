import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">Diyetisyenim</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Ana Sayfa</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/features">Özellikler</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pricing">Fiyatlandırma</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">Giriş Yap</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="btn btn-primary ms-3" to="/register">Ücretsiz Dene</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
