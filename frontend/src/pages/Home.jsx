import { Link } from "react-router-dom";
import "../styles/Home.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Home = () => {
    return (
        <div className="home-container">
            <header className="hero-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div>
                                <h1 className="display-3">
                                    Danışan Yönetiminde Devrim
                                </h1>
                                <p className="lead">
                                    Diyetisyenim, iş akışınızı basitleştirir,
                                    danışan bağlılığını artırır ve işinizi
                                    yönetmenize yardımcı olur.
                                </p>
                                <Link
                                    to="/register"
                                    className="btn btn-primary btn-lg"
                                >
                                    30 Gün Ücretsiz Dene
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div>
                                <div className="hero-image-placeholder"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="features-section section-padding">
                <div className="container">
                    <div className="section-title">
                        <h2>Neden Diyetisyenim?</h2>
                        <p>
                            İşinizi kolaylaştıracak, verimliliğinizi artıracak
                            ve danışan memnuniyetini en üst seviyeye taşıyacak
                            özellikler.
                        </p>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-4">
                            <div className="feature-item">
                                <div className="icon-box">
                                    <i className="bi bi-people-fill"></i>
                                </div>
                                <h3>Kolay Danışan Takibi</h3>
                                <p>
                                    Tüm danışan bilgilerini, notlarını ve
                                    ilerlemelerini tek bir yerden yönetin.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-item">
                                <div className="icon-box">
                                    <i className="bi bi-calendar-check-fill"></i>
                                </div>
                                <h3>Akıllı Randevu Sistemi</h3>
                                <p>
                                    Online randevu takvimi ile zamanınızı
                                    verimli kullanın, çakışmaları önleyin.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-item">
                                <div className="icon-box">
                                    <i className="bi bi-credit-card-fill"></i>
                                </div>
                                <h3>Otomatik Ödeme</h3>
                                <p>
                                    Abonelik ve paket satışlarınızı kolayca
                                    yönetin, ödemelerinizi takip edin.
                                </p>
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
                            <h3>Danışanlarınızı Daha İyi Yönetin</h3>
                            <p>
                                Randevudan diyet planına, ölçüm takibinden
                                hizmet paketlerine kadar tüm süreci tek panelden
                                yönetin. Zamandan kazanın, profesyonelliğinizi
                                artırın.
                            </p>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h3>Danışanlarınıza Değer Katan Mobil Deneyim</h3>
                            <p>
                                Kişisel uygulama ile danışanlarınız
                                randevularını takip eder, diyet listelerine
                                ulaşır ve hedeflerine motive şekilde ilerler.
                                Siz sadece planlayın, sistem sizin yerinize
                                takip etsin.
                            </p>
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
                        {/* <div className="col-md-4">
                            <div className="testimonial-item">
                                <p>
                                    "Diyetisyenim sayesinde danışanlarımla olan
                                    iletişimim ve takip sürecim inanılmaz
                                    kolaylaştı."
                                </p>
                                <div className="author">- Dyt. Ayşe Yılmaz</div>
                            </div>
                        </div> */}
                        <div className="col-md-4">
                            <div className="testimonial-item">
                                <p>
                                    "Özellikle online randevu ve paket takip
                                    sistemi işimi çok kolaylaştırdı. Kesinlikle
                                    tavsiye ederim."
                                </p>
                                <div className="author">
                                    - Uzm. Dyt Dilara Demirci
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-4"> */}
                        {/* <div className="testimonial-item"> */}
                        {/* <p> */}
                        {/* "Kullanıcı dostu arayüzü ve mobil uyumluluğu */}
                        {/* sayesinde her an her yerden işimi */}
                        {/* yönetebiliyorum." */}
                        {/* </p> */}
                        {/* <div className="author">- Dyt. Fatma Demir</div> */}
                        {/* </div> */}
                        {/* </div> */}
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <h2>Başlamaya Hazır mısınız?</h2>
                    <p>
                        14 gün boyunca ücretsiz deneyin, kredi kartı gerekmez.
                    </p>
                    <Link to="/register" className="btn btn-light btn-lg">
                        Hemen Başla
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
