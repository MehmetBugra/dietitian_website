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

const FeaturesPro = () => {
    return (
        <div className="features-page">
            <header className="features-page-header">
                <div className="container">
                    <h1>Diyetisyenim-Pro Özellikleri</h1>
                    <p className="lead col-md-8 mx-auto">
                        Diyetisyenim-Pro, işinizi bir sonraki seviyeye taşımanız
                        için tasarlandı. İşte size sunduğumuz bazı güçlü
                        özellikler.
                    </p>
                </div>
            </header>

            <FeatureSection
                title="Gelişmiş Randevu Yönetimi"
                description="Cihaz ve danışmanlık randevularınızı tek bir panelden yönetin. Zamanlamaları değiştirin, detayları kaydedin ve geçmiş randevulara kolayca ulaşın."
                features={[
                    "Cihaz & danışmanlık randevusu ayrımı",
                    "Zamanlama ve verilerin esnek yönetimi",
                    "Geçmiş randevulara erişim",
                ]}
            />

            <FeatureSection
                title="Kapsamlı Danışan Takibi"
                description="Danışanlarınızı sisteme kolayca ekleyin, tüm ölçüm ve paket bilgilerini tek ekrandan yönetin."
                features={[
                    "Kolay danışan ekleme",
                    "Paket ve kullanım hakkı takibi",
                    "Diyet listeleri ve ölçüm verileri kaydı",
                ]}
                reverse={true}
            />

            <FeatureSection
                title="Randevu Esnası Araçları"
                description="Randevu sırasında ihtiyaç duyduğunuz her şey parmaklarınızın ucunda. Diyet planları otomatik olarak Danışan uygulamasına iletilir."
                features={[
                    "Beslenme danışmanlığında: Anamnez, tartı özeti, diyet planı",
                    "Cihaz randevularında: Süre, kalori ve cihaz istatistikleri",
                    "Planlanan öğün saatlerine otomatik bildirim",
                ]}
            />

            <FeatureSection
                title="Hızlı ve Kolay Muhasebe"
                description="Aylık gelir ve iadelerinizi takip edin. Finansal özetlerle kontrolü elinizde tutun."
                features={[
                    "Paket satış gelirleri takibi",
                    "İade ve ödeme hareketleri",
                    "Aylık performans özeti",
                ]}
                reverse={true}
            />
        </div>
    );
};

export default FeaturesPro;
