import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5>Diyetisyenim</h5>
            <p className="text-muted small">Danışan yönetiminizi kolaylaştıran modern çözüm.</p>
          </div>
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h5>Hızlı Linkler</h5>
            <ul className="list-unstyled">
              <li><Link to="/">Ana Sayfa</Link></li>
              <li><Link to="/features">Özellikler</Link></li>
              <li><Link to="/pricing">Fiyatlandırma</Link></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5>Destek</h5>
            <ul className="list-unstyled">
              <li><Link to="/faq">S.S.S.</Link></li>
              <li><Link to="/contact">İletişim</Link></li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h5>İletişim</h5>
            <p className="text-muted small">info@diyetisyenim.app</p>
          </div>
        </div>
        <div className="text-center mt-5 border-top pt-4">
          <p className="text-muted small">&copy; {new Date().getFullYear()} Diyetisyenim. Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
