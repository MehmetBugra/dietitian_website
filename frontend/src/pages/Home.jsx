import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Home.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="display-3">Danışan Yönetiminde Devrim</h1>
                <p className="lead">Diyetisyenim, iş akışınızı basitleştirir, danışan bağlılığını artırır ve işinizi büyütmenize yardımcı olur.</p>
                <Link to="/register" className="btn btn-primary btn-lg">14 Gün Ücretsiz Dene</Link>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
                <div className="hero-image-placeholder"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      <section className="features-section section-padding">
        <div className="container">
          <div className="section-title">
            <h2>Neden Diyetisyenim?</h2>
            <p>İşinizi kolaylaştıracak, verimliliğinizi artıracak ve danışan memnuniyetini en üst seviyeye taşıyacak özellikler.</p>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <div className="feature-item">
                <div className="icon-box"><i className="bi bi-people-fill"></i></div>
                <h3>Kolay Danışan Takibi</h3>
                <p>Tüm danışan bilgilerini, notlarını ve ilerlemelerini tek bir yerden yönetin.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-item">
                <div className="icon-box"><i className="bi bi-calendar-check-fill"></i></div>
                <h3>Akıllı Randevu Sistemi</h3>
                <p>Online randevu takvimi ile zamanınızı verimli kullanın, çakışmaları önleyin.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-item">
                <div className="icon-box"><i className="bi bi-credit-card-fill"></i></div>
                <h3>Otomatik Ödeme</h3>
                <p>Abonelik ve paket satışlarınızı kolayca yönetin, ödemelerinizi takip edin.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="detailed-features-section section-padding bg-light">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-md-6">
              <div className="feature-image-placeholder"></div>
            </div>
            <div className="col-md-6">
              <h3>Detaylı Danışan Profilleri</h3>
              <p>Buraya danışan profilleriyle ilgili detaylı bir tanıtım metni gelecek.</p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <h3>Esnek Diyet Planları</h3>
              <p>Buraya diyet planı oluşturma özelliğiyle ilgili detaylı bir tanıtım metni gelecek.</p>
            </div>
            <div className="col-md-6">
              <div className="feature-image-placeholder"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section section-padding">
        <div className="container">
          <div className="section-title">
            <h2>Meslektaşlarımız Ne Diyor?</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="testimonial-item">
                <p>"Diyetisyenim sayesinde danışanlarımla olan iletişimim ve takip sürecim inanılmaz kolaylaştı."</p>
                <div className="author">- Dyt. Ayşe Yılmaz</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-item">
                <p>"Özellikle online randevu ve ödeme sistemi işimi çok büyüttü. Kesinlikle tavsiye ederim."</p>
                <div className="author">- Dyt. Ahmet Kaya</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-item">
                <p>"Kullanıcı dostu arayüzü ve mobil uyumluluğu sayesinde her an her yerden işimi yönetebiliyorum."</p>
                <div className="author">- Dyt. Fatma Demir</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Başlamaya Hazır mısınız?</h2>
          <p>14 gün boyunca ücretsiz deneyin, kredi kartı gerekmez.</p>
          <Link to="/register" className="btn btn-light btn-lg">Hemen Başla</Link>
        </div>
      </section>

      <footer className="footer section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <h5>Diyetisyenim</h5>
              <p className="text-muted">Danışan yönetiminizi kolaylaştıran modern çözüm.</p>
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
              <p className="text-muted">info@diyetisyenim.app</p>
            </div>
          </div>
          <div className="text-center mt-5 border-top pt-4">
            <p className="text-muted small">&copy; {new Date().getFullYear()} Diyetisyenim. Tüm Hakları Saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
