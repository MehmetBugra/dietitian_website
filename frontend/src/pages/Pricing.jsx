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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: 'easeIn',
      },
    },
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

        <div className="row mt-5">
          <AnimatePresence mode="wait">
            {packages[billingCycle].map((pkg, index) => (
              <motion.div
                key={`${billingCycle}-${pkg.name}`}
                className="col-lg-4 col-md-6 mb-4"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={index}
              >
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
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
