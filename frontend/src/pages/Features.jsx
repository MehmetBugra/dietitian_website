import '../styles/Features.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const FeatureSection = ({ title, description, features, reverse = false }) => {
  return (
    <section className="feature-section">
      <div className="container">
        <div className={`row align-items-center ${reverse ? 'flex-row-reverse' : ''}`}>
          <div className="col-lg-6">
            <div className="feature-image-placeholder"></div>
          </div>
          <div className="col-lg-6">
            <div className="feature-content">
              <h3>{title}</h3>
              <p className="lead">{description}</p>
              <ul className="icon-list">
                {features.map((feature, index) => (
                  <li key={index}><i className="bi bi-check-circle-fill"></i>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <div className="features-page">
      <header className="features-page-header">
        <div className="container">
          <h1>Uygulama Özellikleri</h1>
          <p className="lead col-md-8 mx-auto">Diyetisyenim, işinizi bir sonraki seviyeye taşımanız için tasarlandı. İşte size sunduğumuz bazı güçlü özellikler.</p>
        </div>
      </header>

      <FeatureSection 
        title="Kapsamlı Danışan Yönetimi"
        description="Tüm danışanlarınızın bilgilerini, geçmişini ve ilerlemesini tek bir ekranda görün. Notlar alın, dosyalar yükleyin ve her detayı kontrol altında tutun."
        features={['Detaylı anamnez formu', 'Ölçüm ve ilerleme takibi', 'Kişiye özel notlar ve belgeler']}
      />

      <FeatureSection 
        title="Akıllı Randevu ve Takvim"
        description="Kendi çalışma saatlerinizi belirleyin, danışanlarınız online randevu alsın. Takviminiz otomatik olarak güncellensin, çakışmalar ve unutulan randevular son bulsun."
        features={['Online randevu sistemi', 'Otomatik hatırlatmalar', 'Google Calendar entegrasyonu']}
        reverse={true}
      />

      <FeatureSection 
        title="Esnek Diyet ve Egzersiz Planları"
        description="Kendi tariflerinizi ve egzersizlerinizi ekleyerek zengin bir kütüphane oluşturun. Danışanlarınıza saniyeler içinde kişiselleştirilmiş planlar atayın."
        features={['Görsel destekli tarif bankası', 'Hazır şablonlar ve kişiselleştirme', 'PDF olarak dışa aktarma']}
      />
    </div>
  );
};

export default Features;
