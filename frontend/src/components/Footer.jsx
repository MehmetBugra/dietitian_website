import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: "/", label: "Ana Sayfa" },
    { to: "/features", label: "Özellikler" },
    { to: "/pricing", label: "Fiyatlandırma" },
    { to: "/login", label: "Giriş Yap" }
  ];

  const supportLinks = [
    { href: "#help", label: "Yardım Merkezi" },
    { href: "#faq", label: "S.S.S." },
    { href: "#contact", label: "İletişim" },
    { href: "#support", label: "Teknik Destek" }
  ];

  const socialLinks = [
    { href: "#", icon: "bi-facebook", label: "Facebook" },
    { href: "#", icon: "bi-twitter", label: "Twitter" },
    { href: "#", icon: "bi-instagram", label: "Instagram" },
    { href: "#", icon: "bi-linkedin", label: "LinkedIn" }
  ];

  const contactInfo = [
    { icon: "bi-envelope", text: "info@diyetisyenim.app" },
    { icon: "bi-telephone", text: "+90 (555) 123 45 67" },
    { icon: "bi-geo-alt", text: "İstanbul, Türkiye" }
  ];

  const legalLinks = [
    { href: "#privacy", label: "Gizlilik Politikası" },
    { href: "#terms", label: "Kullanım Şartları" },
    { href: "#cookies", label: "Çerez Politikası" }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Section */}
            <div className="footer-brand">
              <h3 className="brand-title">
                <i className="bi bi-heart-pulse"></i>
                Diyetisyenim
              </h3>
              <p className="brand-description">
                Diyetisyenler için tasarlanmış modern danışan yönetim sistemi. 
                İş süreçlerinizi dijitalleştirin, verimliliğinizi artırın.
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    className="social-link" 
                    aria-label={social.label}
                  >
                    <i className={`bi ${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h5 className="section-title">Hızlı Linkler</h5>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="footer-section">
              <h5 className="section-title">Destek</h5>
              <ul className="footer-links">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h5 className="section-title">İletişim Bilgileri</h5>
              <div className="contact-info">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="contact-item">
                    <i className={`bi ${contact.icon}`}></i>
                    <span>{contact.text}</span>
                  </div>
                ))}
              </div>
              <div className="newsletter">
                <h6>Bültene Abone Ol</h6>
                <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="E-mail adresiniz" 
                    className="form-control"
                    required
                  />
                  <button type="submit" className="btn btn-primary">
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; {currentYear} Diyetisyenim. Tüm hakları saklıdır.
            </p>
            <div className="footer-bottom-links">
              {legalLinks.map((link, index) => (
                <a key={index} href={link.href}>{link.label}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
