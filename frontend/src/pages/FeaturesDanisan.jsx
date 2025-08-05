import "../styles/Features.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const FeatureSection = ({ title, description, features, reverse = false }) => {
    return (
        <section className="feature-section">
            <div className="container">
                <div
                    className={`row align-items-center ${
                        reverse ? "flex-row-reverse" : ""
                    }`}
                >
                    <div className="col-lg-6">
                        <div className="feature-image-placeholder"></div>
                    </div>
                    <div className="col-lg-6">
                        <div className="feature-content">
                            <h3>{title}</h3>
                            <p className="lead">{description}</p>
                            <ul className="icon-list">
                                {features.map((feature, index) => (
                                    <li key={index}>
                                        <i className="bi bi-check-circle-fill"></i>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FeaturesDanisan = () => {
    return (
        <div className="features-page">
            <header className="features-page-header">
                <div className="container">
                    <h1>Diyetisyenim-Danışan Özellikleri</h1>
                    <p className="lead col-md-8 mx-auto">
                        Diyetisyenim-Danışan, sağlığınızı ve beslenmenizi takip
                        etmeniz için tasarlandı. İşte size sunduğumuz bazı güçlü
                        özellikler.
                    </p>
                </div>
            </header>

            <FeatureSection
                title="Markanızı Taşıyan Dijital Deneyim"
                description="Danışanlarınıza sunduğunuz uygulama sayesinde profesyonelliğinizi bir adım ileri taşıyın. Her diyetisyen için ayrı ayrı özelleştirilen danışan uygulaması, sadakati artırır."
                features={[
                    "Sade ve profesyonel kullanıcı deneyimi",
                    "Danışan memnuniyetini artıran mobil deneyim",
                    "Dijital çağda fark yaratan hizmet sunumu",
                ]}
                reverse={true}
            />

            <FeatureSection
                title="Danışanlarınız İçin Kişisel Randevu Takibi"
                description="Her danışanınıza özel mobil uygulama ile geçmiş ve gelecek randevularını takip etmesini sağlayın. Takvime bağlı kalmalarını kolaylaştırın."
                features={[
                    "Gelecek ve geçmiş randevulara anında erişim",
                    "Otomatik bildirimlerle randevu hatırlatmaları",
                    "Takvime entegre randevu kontrolü",
                ]}
            />

            <FeatureSection
                title="Diyet ve Ölçüm Bilgilerine Ulaşım"
                description="Planladığınız tüm diyet listeleri, tartı ölçümleri ve cihaz geçmişi danışanın cebinde. PDF'lerle uğraşmadan dijital olarak sunun."
                features={[
                    "Kişisel diyet listelerine doğrudan erişim",
                    "Tartı ve beden ölçümü geçmişi",
                    "Cihaz kullanımı ve yakılan kalori bilgisi",
                ]}
                reverse={true}
            />

            <FeatureSection
                title="Mobil Sağlık Hesaplayıcıları"
                description="Danışanlarınıza bilimsel araçlarla sağlık hedeflerine ulaşma imkanı sunun. Tamamen sizin markanızla."
                features={[
                    "Vücut Kitle İndeksi (BMI) hesaplayıcı",
                    "Günlük kalori, su ihtiyacı ve yağ oranı analizleri",
                    "Hedef kilo süresi hesaplama aracı",
                ]}
            />
        </div>
    );
};

export default FeaturesDanisan;
