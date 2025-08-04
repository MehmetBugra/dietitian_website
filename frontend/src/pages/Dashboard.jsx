import '../styles/Dashboard.css';

const Dashboard = () => {
  // Backend data will be fetched here
  const subscription = {
    plan: 'Premium',
    renewalDate: '2024-12-31',
  };

  const paymentHistory = [
    { date: '2023-12-31', amount: '₺150' },
    { date: '2023-11-30', amount: '₺150' },
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Kullanıcı Paneli</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="dashboard-card">
            <h5 className="card-title">Abonelik Bilgileri</h5>
            <p><strong>Paket:</strong> {subscription.plan}</p>
            <p><strong>Yenileme Tarihi:</strong> {subscription.renewalDate}</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="dashboard-card">
            <h5 className="card-title">Ödeme Geçmişi</h5>
            <ul className="list-group list-group-flush">
              {paymentHistory.map((payment, index) => (
                <li key={index} className="list-group-item">
                  {payment.date} - <strong>{payment.amount}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
