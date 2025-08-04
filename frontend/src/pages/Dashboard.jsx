import { useState } from 'react';
import '../styles/Dashboard.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');

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
    <div className="dashboard-layout">
      <div className="dashboard-sidebar">
        <div className="sidebar-header">
          <h3>Dashboard</h3>
          <p>Hoş geldiniz!</p>
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
      </div>
      
      <div className="dashboard-main">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
