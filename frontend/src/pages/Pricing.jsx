import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Pricing.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const packages = {
    monthly: [
      { name: 'FitStart', clients: '1-50', price: '1500', features: ['Temel Raporlama', 'Email Desteği'] },
      { name: 'FitFlow', clients: '50-150', price: '2000', popular: true, features: ['Gelişmiş Raporlama', '7/24 Destek', 'Online Ödeme'] },
      { name: 'FitElite', clients: '150+', price: 'İletişime Geçin', features: ['Özelleştirilmiş Çözümler', 'Özel Müşteri Temsilcisi', 'API Erişimi'] },
    ],
    yearly: [
      { name: 'FitStart', clients: '1-50', price: '15000', features: ['Temel Raporlama', 'Email Desteği'] },
      { name: 'FitFlow', clients: '50-150', price: '20000', popular: true, features: ['Gelişmiş Raporlama', '7/24 Destek', 'Online Ödeme'] },
      { name: 'FitElite', clients: '150+', price: 'İletişime Geçin', features: ['Özelleştirilmiş Çözümler', 'Özel Müşteri Temsilcisi', 'API Erişimi'] },
    ],
  };

  return (
    <div className="pricing-container section-padding">
      <div className="container">
        <div className="section-title">
          <h2>Size Uygun Planı Seçin</h2>
          <p>İhtiyaçlarınıza en uygun abonelik paketini seçerek hemen başlayın.</p>
        </div>

        <div className="toggle-buttons">
          <button 
            className={billingCycle === 'monthly' ? 'active' : ''}
            onClick={() => setBillingCycle('monthly')}
          >
            Aylık Ödeme
          </button>
          <button 
            className={billingCycle === 'yearly' ? 'active' : ''}
            onClick={() => setBillingCycle('yearly')}
          >
            Yıllık Ödeme (2 Ay Ücretsiz)
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={billingCycle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="row mt-5"
          >
            {packages[billingCycle].map((pkg, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className={`pricing-card ${pkg.popular ? 'popular' : ''}`}>
                  {pkg.popular && <div className="popular-badge">Popüler</div>}
                  <h3>{pkg.name}</h3>
                  <p className="text-muted">{pkg.clients} Danışan</p>
                  <div className="price">
                    {pkg.price.startsWith('İ') ? pkg.price : `₺${pkg.price}`}
                    {!pkg.price.startsWith('İ') && <span>/{billingCycle === 'monthly' ? 'ay' : 'yıl'}</span>}
                  </div>
                  <ul>
                    {pkg.features.map((feature, i) => (
                      <li key={i}><i className="bi bi-check-circle-fill"></i> {feature}</li>
                    ))}
                  </ul>
                  <button className="btn btn-primary w-100 mt-auto">Planı Seç</button>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Pricing;
