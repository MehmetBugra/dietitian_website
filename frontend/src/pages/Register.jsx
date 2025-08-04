import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Auth.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Register logic here
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="text-center mb-4">Kayıt Ol</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Ad Soyad</label>
            <input 
              type="text" 
              className="form-control" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input 
              type="email" 
              className="form-control" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Şifre</label>
            <input 
              type="password" 
              className="form-control" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Kayıt Ol</button>
        </form>
        <div className="mt-3 text-center">
          <p>Zaten hesabın var mı? <Link to="/login">Giriş Yap</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
