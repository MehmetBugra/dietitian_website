import { useState } from 'react';
import '../styles/Dashboard.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../assets/yazisiz_logo.png';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Backend data will be fetched here
  const subscription = {
    plan: 'Premium',
    renewalDate: '2024-12-31',
    status: 'Aktif',
    nextPayment: '₺150'
  };

  const paymentHistory = [
    { id: 1, date: '2023-12-31', amount: '₺150', status: 'Tamamlandı', method: 'Kredi Kartı' },
    { id: 2, date: '2023-11-30', amount: '₺150', status: 'Tamamlandı', method: 'Banka Kartı' },
    { id: 3, date: '2023-10-31', amount: '₺150', status: 'Tamamlandı', method: 'Kredi Kartı' },
    { id: 4, date: '2023-09-30', amount: '₺150', status: 'Tamamlandı', method: 'Banka Kartı' },
  ];

  const activities = [
    { id: 1, title: 'Yeni müşteri kaydı', time: '2 saat önce', icon: 'bi-person-plus' },
    { id: 2, title: 'Diyet planı güncellendi', time: '5 saat önce', icon: 'bi-file-text' },
    { id: 3, title: 'Ödeme alındı', time: '1 gün önce', icon: 'bi-credit-card' },
    { id: 4, title: 'Randevu oluşturuldu', time: '2 gün önce', icon: 'bi-calendar-check' },
    { id: 5, title: 'Profil güncellendi', time: '3 gün önce', icon: 'bi-person-gear' },
  ];

  const customers = [
    { id: 1, name: 'Ayşe Yılmaz', email: 'ayse@email.com', phone: '0532-123-4567', status: 'Aktif', plan: 'Kilo Verme', startDate: '2024-01-15' },
    { id: 2, name: 'Mehmet Demir', email: 'mehmet@email.com', phone: '0533-987-6543', status: 'Aktif', plan: 'Kas Geliştirme', startDate: '2024-02-01' },
    { id: 3, name: 'Fatma Özkan', email: 'fatma@email.com', phone: '0534-456-7890', status: 'Beklemede', plan: 'Beslenme Düzeni', startDate: '2024-02-10' },
    { id: 4, name: 'Ali Kaya', email: 'ali@email.com', phone: '0535-321-0987', status: 'Aktif', plan: 'Spor Beslenmesi', startDate: '2024-01-20' },
  ];

  const dietPlans = [
    { id: 1, name: 'Kilo Verme Planı', description: 'Sağlıklı kilo verme için dengeli beslenme', customers: 8, status: 'Aktif', lastUpdated: '2024-02-15' },
    { id: 2, name: 'Kas Geliştirme Planı', description: 'Protein ağırlıklı kas geliştirme programı', customers: 5, status: 'Aktif', lastUpdated: '2024-02-10' },
    { id: 3, name: 'Diyabet Dostu Plan', description: 'Kan şekeri kontrolü için özel diyet', customers: 3, status: 'Aktif', lastUpdated: '2024-02-12' },
    { id: 4, name: 'Vejetaryen Plan', description: 'Et tüketmeyen kişiler için dengeli beslenme', customers: 6, status: 'Taslak', lastUpdated: '2024-02-08' },
  ];

  const menuItems = [
    { id: 'overview', label: 'Genel Bakış', icon: 'bi-house' },
    { id: 'subscription', label: 'Abonelik Bilgileri', icon: 'bi-person-circle' },
    { id: 'payments', label: 'Ödeme Geçmişi', icon: 'bi-credit-card' },
    { id: 'customers', label: 'Müşteri Yönetimi', icon: 'bi-people' },
    { id: 'plans', label: 'Diyet Planları', icon: 'bi-file-text' },
    { id: 'reports', label: 'Raporlar', icon: 'bi-graph-up' },
    { id: 'settings', label: 'Ayarlar', icon: 'bi-gear' },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="dashboard-content">
            <div className="content-header">
              <h2>Genel Bakış</h2>
              <p>Hesabınız ve işletmenizin genel durumu</p>
            </div>
            
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="bi bi-people"></i>
                </div>
                <div className="stat-info">
                  <h3>24</h3>
                  <p>Aktif Müşteri</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="bi bi-file-text"></i>
                </div>
                <div className="stat-info">
                  <h3>12</h3>
                  <p>Aktif Plan</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="bi bi-calendar-check"></i>
                </div>
                <div className="stat-info">
                  <h3>8</h3>
                  <p>Bu Hafta Randevu</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="bi bi-currency-dollar"></i>
                </div>
                <div className="stat-info">
                  <h3>₺3,600</h3>
                  <p>Bu Ay Gelir</p>
                </div>
              </div>
            </div>

            <div className="recent-activity-section">
              <h3>Son Aktiviteler</h3>
              <div className="activity-list">
                {activities.slice(0, 5).map((activity) => (
                  <div key={activity.id} className="activity-item">
                    <div className="activity-icon">
                      <i className={activity.icon}></i>
                    </div>
                    <div className="activity-content">
                      <div className="activity-title">{activity.title}</div>
                      <div className="activity-time">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'subscription':
        return (
          <div className="dashboard-content">
            <div className="content-header">
              <h2>Abonelik Bilgileri</h2>
              <p>Mevcut abonelik planınız ve detayları</p>
            </div>
            
            <div className="subscription-card">
              <div className="subscription-header">
                <h3>{subscription.plan} Paket</h3>
                <span className="status-badge active">{subscription.status}</span>
              </div>
              <div className="subscription-details">
                <div className="detail-item">
                  <span className="label">Yenileme Tarihi:</span>
                  <span className="value">{subscription.renewalDate}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Sonraki Ödeme:</span>
                  <span className="value">{subscription.nextPayment}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Ödeme Yöntemi:</span>
                  <span className="value">Kredi Kartı (**** 1234)</span>
                </div>
              </div>
              <div className="subscription-actions">
                <button className="btn btn-primary">Planı Yükselt</button>
                <button className="btn btn-outline-primary">Ödeme Yöntemini Değiştir</button>
              </div>
            </div>
            
            <div className="plan-features">
              <h4>Plan Özellikleri</h4>
              <ul className="features-list">
                <li><i className="bi bi-check-circle-fill"></i> 100 Müşteri Limiti</li>
                <li><i className="bi bi-check-circle-fill"></i> Sınırsız Diyet Planı</li>
                <li><i className="bi bi-check-circle-fill"></i> Gelişmiş Raporlar</li>
                <li><i className="bi bi-check-circle-fill"></i> WhatsApp Entegrasyonu</li>
                <li><i className="bi bi-check-circle-fill"></i> 7/24 Destek</li>
              </ul>
            </div>
          </div>
        );

      case 'payments':
        return (
          <div className="dashboard-content">
            <div className="content-header">
              <h2>Ödeme Geçmişi</h2>
              <p>Tüm ödemelerinizin detaylı geçmişi</p>
            </div>
            
            <div className="payments-table">
              <div className="table-header">
                <div className="table-row">
                  <div className="table-cell">Tarih</div>
                  <div className="table-cell">Tutar</div>
                  <div className="table-cell">Durum</div>
                  <div className="table-cell">Ödeme Yöntemi</div>
                  <div className="table-cell">İşlemler</div>
                </div>
              </div>
              <div className="table-body">
                {paymentHistory.map((payment) => (
                  <div key={payment.id} className="table-row">
                    <div className="table-cell">{payment.date}</div>
                    <div className="table-cell">{payment.amount}</div>
                    <div className="table-cell">
                      <span className="status-badge success">{payment.status}</span>
                    </div>
                    <div className="table-cell">{payment.method}</div>
                    <div className="table-cell">
                      <button className="btn-icon">
                        <i className="bi bi-download"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="payment-summary">
              <h4>Ödeme Özeti</h4>
              <div className="summary-stats">
                <div className="summary-item">
                  <span className="label">Toplam Ödeme:</span>
                  <span className="value">₺{paymentHistory.reduce((sum, p) => sum + parseInt(p.amount.replace('₺', '')), 0)}</span>
                </div>
                <div className="summary-item">
                  <span className="label">Bu Yıl:</span>
                  <span className="value">₺1,800</span>
                </div>
                <div className="summary-item">
                  <span className="label">Ortalama/Ay:</span>
                  <span className="value">₺150</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'customers':
        return (
          <div className="dashboard-content">
            <div className="content-header">
              <h2>Müşteri Yönetimi</h2>
              <p>Tüm müşterilerinizi yönetin ve takip edin</p>
              <button className="btn btn-primary">
                <i className="bi bi-plus"></i> Yeni Müşteri
              </button>
            </div>
            
            <div className="customers-stats">
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="bi bi-person-check"></i>
                </div>
                <div className="stat-info">
                  <h3>{customers.filter(c => c.status === 'Aktif').length}</h3>
                  <p>Aktif Müşteri</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="bi bi-person-dash"></i>
                </div>
                <div className="stat-info">
                  <h3>{customers.filter(c => c.status === 'Beklemede').length}</h3>
                  <p>Bekleyen Müşteri</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="bi bi-calendar-week"></i>
                </div>
                <div className="stat-info">
                  <h3>2</h3>
                  <p>Bu Hafta Eklenen</p>
                </div>
              </div>
            </div>

            <div className="customers-table">
              <div className="table-header">
                <div className="table-row">
                  <div className="table-cell">Müşteri</div>
                  <div className="table-cell">İletişim</div>
                  <div className="table-cell">Plan</div>
                  <div className="table-cell">Durum</div>
                  <div className="table-cell">Başlangıç</div>
                  <div className="table-cell">İşlemler</div>
                </div>
              </div>
              <div className="table-body">
                {customers.map((customer) => (
                  <div key={customer.id} className="table-row">
                    <div className="table-cell">
                      <div className="customer-info">
                        <div className="customer-avatar">
                          <i className="bi bi-person-circle"></i>
                        </div>
                        <div>
                          <div className="customer-name">{customer.name}</div>
                          <div className="customer-email">{customer.email}</div>
                        </div>
                      </div>
                    </div>
                    <div className="table-cell">{customer.phone}</div>
                    <div className="table-cell">{customer.plan}</div>
                    <div className="table-cell">
                      <span className={`status-badge ${customer.status === 'Aktif' ? 'success' : 'warning'}`}>
                        {customer.status}
                      </span>
                    </div>
                    <div className="table-cell">{customer.startDate}</div>
                    <div className="table-cell">
                      <div className="table-actions">
                        <button className="btn-icon" title="Düzenle">
                          <i className="bi bi-pencil"></i>
                        </button>
                        <button className="btn-icon" title="Görüntüle">
                          <i className="bi bi-eye"></i>
                        </button>
                        <button className="btn-icon" title="Mesaj Gönder">
                          <i className="bi bi-chat"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'plans':
        return (
          <div className="dashboard-content">
            <div className="content-header">
              <h2>Diyet Planları</h2>
              <p>Diyet planlarınızı oluşturun ve yönetin</p>
              <button className="btn btn-primary">
                <i className="bi bi-plus"></i> Yeni Plan
              </button>
            </div>
            
            <div className="plans-stats">
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="bi bi-file-check"></i>
                </div>
                <div className="stat-info">
                  <h3>{dietPlans.filter(p => p.status === 'Aktif').length}</h3>
                  <p>Aktif Plan</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="bi bi-file-earmark"></i>
                </div>
                <div className="stat-info">
                  <h3>{dietPlans.filter(p => p.status === 'Taslak').length}</h3>
                  <p>Taslak Plan</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="bi bi-people"></i>
                </div>
                <div className="stat-info">
                  <h3>{dietPlans.reduce((sum, p) => sum + p.customers, 0)}</h3>
                  <p>Toplam Kullanıcı</p>
                </div>
              </div>
            </div>

            <div className="plans-grid">
              {dietPlans.map((plan) => (
                <div key={plan.id} className="plan-card">
                  <div className="plan-header">
                    <h4>{plan.name}</h4>
                    <span className={`status-badge ${plan.status === 'Aktif' ? 'success' : 'warning'}`}>
                      {plan.status}
                    </span>
                  </div>
                  <p className="plan-description">{plan.description}</p>
                  <div className="plan-stats">
                    <div className="plan-stat">
                      <i className="bi bi-people"></i>
                      <span>{plan.customers} müşteri</span>
                    </div>
                    <div className="plan-stat">
                      <i className="bi bi-calendar"></i>
                      <span>Güncelleme: {plan.lastUpdated}</span>
                    </div>
                  </div>
                  <div className="plan-actions">
                    <button className="btn btn-outline-primary">Düzenle</button>
                    <button className="btn btn-primary">Görüntüle</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'reports':
        return (
          <div className="dashboard-content">
            <div className="content-header">
              <h2>Raporlar</h2>
              <p>İş performansınızı analiz edin</p>
            </div>
            
            <div className="reports-summary">
              <div className="summary-card">
                <div className="summary-header">
                  <h4>Bu Ay Özeti</h4>
                  <i className="bi bi-calendar-month"></i>
                </div>
                <div className="summary-stats">
                  <div className="summary-item">
                    <span className="label">Yeni Müşteri:</span>
                    <span className="value">8</span>
                  </div>
                  <div className="summary-item">
                    <span className="label">Toplam Gelir:</span>
                    <span className="value">₺3,600</span>
                  </div>
                  <div className="summary-item">
                    <span className="label">Aktif Plan:</span>
                    <span className="value">12</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="charts-section">
              <div className="chart-card">
                <h4>Aylık Gelir Trendi</h4>
                <div className="chart-placeholder">
                  <i className="bi bi-graph-up"></i>
                  <p>Grafik burada gösterilecek</p>
                </div>
              </div>
              <div className="chart-card">
                <h4>Müşteri Dağılımı</h4>
                <div className="chart-placeholder">
                  <i className="bi bi-pie-chart"></i>
                  <p>Grafik burada gösterilecek</p>
                </div>
              </div>
            </div>

            <div className="reports-actions">
              <button className="btn btn-outline-primary">
                <i className="bi bi-download"></i> Rapor İndir
              </button>
              <button className="btn btn-primary">
                <i className="bi bi-envelope"></i> E-posta Gönder
              </button>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="dashboard-content">
            <div className="content-header">
              <h2>Ayarlar</h2>
              <p>Hesap ve uygulama ayarlarınızı yönetin</p>
            </div>
            
            <div className="settings-sections">
              <div className="settings-card">
                <h4>Profil Bilgileri</h4>
                <div className="settings-form">
                  <div className="form-group">
                    <label>Ad Soyad</label>
                    <input type="text" defaultValue="Dr. Ayşe Nutritionist" />
                  </div>
                  <div className="form-group">
                    <label>E-posta</label>
                    <input type="email" defaultValue="ayse@nutritionist.com" />
                  </div>
                  <div className="form-group">
                    <label>Telefon</label>
                    <input type="tel" defaultValue="0532-123-4567" />
                  </div>
                  <button className="btn btn-primary">Kaydet</button>
                </div>
              </div>

              <div className="settings-card">
                <h4>Bildirim Ayarları</h4>
                <div className="settings-options">
                  <div className="setting-option">
                    <div className="option-info">
                      <h5>E-posta Bildirimleri</h5>
                      <p>Yeni müşteri ve ödemeler için e-posta alın</p>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider"></span>
                    </label>
                  </div>
                  <div className="setting-option">
                    <div className="option-info">
                      <h5>SMS Bildirimleri</h5>
                      <p>Önemli güncellemeler için SMS alın</p>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </div>
                  <div className="setting-option">
                    <div className="option-info">
                      <h5>Randevu Hatırlatıcıları</h5>
                      <p>Yaklaşan randevular için bildirim alın</p>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="settings-card">
                <h4>Güvenlik</h4>
                <div className="security-options">
                  <button className="btn btn-outline-primary">Şifre Değiştir</button>
                  <button className="btn btn-outline-primary">İki Faktörlü Doğrulama</button>
                  <button className="btn btn-outline-danger">Hesabı Sil</button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="dashboard-content">
            <div className="content-header">
              <h2>Bu Bölüm Yakında</h2>
              <p>Bu özellik üzerinde çalışıyoruz, yakında eklenecek.</p>
            </div>
            <div className="coming-soon">
              <i className="bi bi-tools"></i>
              <p>Geliştirme aşamasında...</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="dashboard-container">
      {/* Dashboard Header/Topbar */}
      <header className="dashboard-header">
        <div className="header-left">
          <button 
            className="mobile-menu-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <i className="bi bi-list"></i>
          </button>
          <div className="brand">
            <img src={logo} alt="Diyetisyenim Logo" className="dashboard-logo-img" />
            <span>Diyetisyenim</span>
          </div>
        </div>
        
        <div className="header-center">
          <div className="search-bar">
            <i className="bi bi-search"></i>
            <input type="text" placeholder="Ara..." />
          </div>
        </div>
        
        <div className="header-right">
          <button className="header-btn" title="Bildirimler">
            <i className="bi bi-bell"></i>
            <span className="notification-badge">3</span>
          </button>
          <button className="header-btn" title="Mesajlar">
            <i className="bi bi-envelope"></i>
            <span className="notification-badge">2</span>
          </button>
          <div className="user-menu">
            <div className="user-avatar">
              <img src="https://via.placeholder.com/40x40/2DD470/ffffff?text=AY" alt="User" />
            </div>
            <div className="user-info">
              <span className="user-name">Dr. Ayşe Yılmaz</span>
              <span className="user-role">Diyetisyen</span>
            </div>
            <button className="dropdown-btn">
              <i className="bi bi-chevron-down"></i>
            </button>
          </div>
        </div>
      </header>

      <div className="dashboard-layout">
        <div className={`dashboard-sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <h3>Menü</h3>
            <button 
              className="close-sidebar-btn"
              onClick={() => setSidebarOpen(false)}
            >
              <i className="bi bi-x"></i>
            </button>
          </div>
          
          <nav className="sidebar-nav">
            {menuItems.map((item) => (
              <button
                key={item.id}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => setActiveSection(item.id)}
              >
                <i className={item.icon}></i>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
          
          <div className="sidebar-footer">
            <button className="logout-btn">
              <i className="bi bi-box-arrow-right"></i>
              <span>Çıkış Yap</span>
            </button>
          </div>
        </div>
        
        <div className="dashboard-main">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
