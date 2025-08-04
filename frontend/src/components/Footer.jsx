import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="row gy-4">
            {/* Brand Section */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-brand">
                <h3 className="brand-title">
                  <i className="bi bi-heart-pulse me-2"></i>
                  Diyetisyenim
                </h3>
                <p className="brand-description">
                  Diyetisyenler için tasarlanmış modern danışan yönetim sistemi. 
                  İş süreçlerinizi dijitalleştirin, verimliliğinizi artırın.
                </p>
                <div className="social-links">
                  <a href="#" className="social-link" aria-label="Facebook">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="social-link" aria-label="Twitter">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#" className="social-link" aria-label="Instagram">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="social-link" aria-label="LinkedIn">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="footer-section">
                <h5 className="section-title">Hızlı Linkler</h5>
                <ul className="footer-links">
                  <li><Link to="/">Ana Sayfa</Link></li>
                  <li><Link to="/features">Özellikler</Link></li>
                  <li><Link to="/pricing">Fiyatlandırma</Link></li>
                  <li><Link to="/login">Giriş Yap</Link></li>
                </ul>
              </div>
            </div>

            {/* Support */}
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="footer-section">
                <h5 className="section-title">Destek</h5>
                <ul className="footer-links">
                  <li><a href="#help">Yardım Merkezi</a></li>
                  <li><a href="#faq">S.S.S.</a></li>
                  <li><a href="#contact">İletişim</a></li>
                  <li><a href="#support">Teknik Destek</a></li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-section">
                <h5 className="section-title">İletişim Bilgileri</h5>
                <div className="contact-info">
                  <div className="contact-item">
                    <i className="bi bi-envelope"></i>
                    <span>info@diyetisyenim.app</span>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-telephone"></i>
                    <span>+90 (555) 123 45 67</span>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-geo-alt"></i>
                    <span>İstanbul, Türkiye</span>
                  </div>
                </div>
                <div className="newsletter">
                  <h6>Bültene Abone Ol</h6>
                  <div className="newsletter-form">
                    <input type="email" placeholder="E-mail adresiniz" className="form-control" />
                    <button type="submit" className="btn btn-primary">
                      <i className="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="copyright">
                &copy; {new Date().getFullYear()} Diyetisyenim. Tüm hakları saklıdır.
              </p>
            </div>
            <div className="col-md-6">
              <div className="footer-bottom-links">
                <a href="#privacy">Gizlilik Politikası</a>
                <a href="#terms">Kullanım Şartları</a>
                <a href="#cookies">Çerez Politikası</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
