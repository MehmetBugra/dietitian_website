import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Auth.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Kullanıcı adı gereklidir';
    }
    
    if (!formData.password) {
      newErrors.password = 'Şifre gereklidir';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Şifre en az 6 karakter olmalıdır';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Login logic here
      console.log('Login data:', { ...formData, rememberMe });
      
      // Handle successful login
      // e.g., redirect user, store token, etc.
      
    } catch (error) {
      console.error('Login error:', error);
      setErrors({ general: 'Giriş işlemi başarısız. Lütfen tekrar deneyin.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card login-card">
        <div className="auth-header">
          <h1 className="auth-title">Hoş Geldiniz</h1>
          <p className="auth-subtitle">Hesabınıza giriş yapın</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {errors.general && (
            <div className="form-error" style={{ textAlign: 'center', marginBottom: '1rem' }}>
              {errors.general}
            </div>
          )}

          <div className="form-group">
            <label className="form-label">Kullanıcı Adı</label>
            <div className="input-wrapper">
              <i className="bi bi-person input-icon"></i>
              <input 
                type="text" 
                name="username"
                className={`form-control ${errors.username ? 'error' : ''}`}
                placeholder="Kullanıcı adınızı girin"
                value={formData.username} 
                onChange={handleInputChange}
                disabled={isLoading}
              />
            </div>
            {errors.username && <div className="form-error">{errors.username}</div>}
          </div>

          <div className="form-group">
            <label className="form-label">Şifre</label>
            <div className="input-wrapper">
              <i className="bi bi-lock input-icon"></i>
              <input 
                type={showPassword ? "text" : "password"}
                name="password"
                className={`form-control ${errors.password ? 'error' : ''}`}
                placeholder="Şifrenizi girin"
                value={formData.password} 
                onChange={handleInputChange}
                disabled={isLoading}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLoading}
              >
                <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
              </button>
            </div>
            {errors.password && <div className="form-error">{errors.password}</div>}
          </div>

          <div className="form-options">
            <label className="checkbox-wrapper">
              <input 
                type="checkbox" 
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                disabled={isLoading}
              />
              <span className="checkmark"></span>
              Beni hatırla
            </label>
            <Link to="/forgot-password" className="forgot-link">
              Şifremi unuttum
            </Link>
          </div>

          <button 
            type="submit" 
            className="auth-btn"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="loading-spinner"></span>
                Giriş yapılıyor...
              </>
            ) : (
              <>
                <i className="bi bi-box-arrow-in-right"></i>
                Giriş Yap
              </>
            )}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Henüz hesabınız yok mu? 
            <Link to="/register" className="auth-link">
              Üye Ol
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
