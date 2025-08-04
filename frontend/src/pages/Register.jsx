import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Auth.css';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    taxNumber: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
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
    
    // Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Ad gereklidir';
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = 'Ad en az 2 karakter olmalıdır';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Soyad gereklidir';
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = 'Soyad en az 2 karakter olmalıdır';
    }
    
    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefon numarası gereklidir';
    } else if (!/^(\+90|0)?[0-9]{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Geçerli bir telefon numarası girin';
    }
    
    // Tax number validation
    if (!formData.taxNumber.trim()) {
      newErrors.taxNumber = 'Vergi numarası gereklidir';
    } else if (!/^[0-9]{10,11}$/.test(formData.taxNumber.trim())) {
      newErrors.taxNumber = 'Vergi numarası 10-11 haneli olmalıdır';
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Şifre gereklidir';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Şifre en az 8 karakter olmalıdır';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Şifre en az 1 büyük harf, 1 küçük harf ve 1 rakam içermelidir';
    }
    
    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Şifre onayı gereklidir';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Şifreler eşleşmiyor';
    }
    
    // Terms validation
    if (!acceptTerms) {
      newErrors.terms = 'Kullanım koşullarını kabul etmelisiniz';
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
      
      // Registration logic here
      console.log('Registration data:', { ...formData, acceptTerms });
      
      // Handle successful registration
      // e.g., redirect user, show success message, etc.
      
    } catch (error) {
      console.error('Registration error:', error);
      setErrors({ general: 'Kayıt işlemi başarısız. Lütfen tekrar deneyin.' });
    } finally {
      setIsLoading(false);
    }
  };

  const formatPhone = (value) => {
    // Remove all non-digits
    const cleaned = value.replace(/\D/g, '');
    
    // Format as (5XX) XXX XX XX
    if (cleaned.length >= 10) {
      return cleaned.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '($1) $2 $3 $4');
    } else if (cleaned.length >= 7) {
      return cleaned.replace(/(\d{3})(\d{3})(\d{1,2})/, '($1) $2 $3');
    } else if (cleaned.length >= 4) {
      return cleaned.replace(/(\d{3})(\d{1,3})/, '($1) $2');
    }
    return cleaned;
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhone(e.target.value);
    setFormData(prev => ({
      ...prev,
      phone: formatted
    }));
    
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: '' }));
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">Üye Ol</h1>
          <p className="auth-subtitle">Yeni hesap oluşturun</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {errors.general && (
            <div className="form-error" style={{ textAlign: 'center', marginBottom: '1rem' }}>
              {errors.general}
            </div>
          )}

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Ad</label>
              <div className="input-wrapper">
                <i className="bi bi-person input-icon"></i>
                <input 
                  type="text" 
                  name="firstName"
                  className={`form-control ${errors.firstName ? 'error' : ''}`}
                  placeholder="Adınız"
                  value={formData.firstName} 
                  onChange={handleInputChange}
                  disabled={isLoading}
                />
              </div>
              {errors.firstName && <div className="form-error">{errors.firstName}</div>}
            </div>

            <div className="form-group">
              <label className="form-label">Soyad</label>
              <div className="input-wrapper">
                <i className="bi bi-person input-icon"></i>
                <input 
                  type="text" 
                  name="lastName"
                  className={`form-control ${errors.lastName ? 'error' : ''}`}
                  placeholder="Soyadınız"
                  value={formData.lastName} 
                  onChange={handleInputChange}
                  disabled={isLoading}
                />
              </div>
              {errors.lastName && <div className="form-error">{errors.lastName}</div>}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Telefon Numarası</label>
            <div className="input-wrapper">
              <i className="bi bi-telephone input-icon"></i>
              <input 
                type="tel" 
                name="phone"
                className={`form-control ${errors.phone ? 'error' : ''}`}
                placeholder="(5XX) XXX XX XX"
                value={formData.phone} 
                onChange={handlePhoneChange}
                disabled={isLoading}
                maxLength="15"
              />
            </div>
            {errors.phone && <div className="form-error">{errors.phone}</div>}
          </div>

          <div className="form-group">
            <label className="form-label">Vergi Numarası</label>
            <div className="input-wrapper">
              <i className="bi bi-card-text input-icon"></i>
              <input 
                type="text" 
                name="taxNumber"
                className={`form-control ${errors.taxNumber ? 'error' : ''}`}
                placeholder="10-11 haneli vergi numarası"
                value={formData.taxNumber} 
                onChange={handleInputChange}
                disabled={isLoading}
                maxLength="11"
              />
            </div>
            {errors.taxNumber && <div className="form-error">{errors.taxNumber}</div>}
          </div>

          <div className="form-group">
            <label className="form-label">Şifre</label>
            <div className="input-wrapper">
              <i className="bi bi-lock input-icon"></i>
              <input 
                type={showPassword ? "text" : "password"}
                name="password"
                className={`form-control ${errors.password ? 'error' : ''}`}
                placeholder="En az 8 karakter, büyük/küçük harf ve rakam"
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

          <div className="form-group">
            <label className="form-label">Şifre Onayı</label>
            <div className="input-wrapper">
              <i className="bi bi-lock input-icon"></i>
              <input 
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                className={`form-control ${errors.confirmPassword ? 'error' : ''}`}
                placeholder="Şifrenizi tekrar girin"
                value={formData.confirmPassword} 
                onChange={handleInputChange}
                disabled={isLoading}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                disabled={isLoading}
              >
                <i className={`bi ${showConfirmPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
              </button>
            </div>
            {errors.confirmPassword && <div className="form-error">{errors.confirmPassword}</div>}
          </div>

          <div className="form-group">
            <label className="checkbox-wrapper">
              <input 
                type="checkbox" 
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                disabled={isLoading}
              />
              <span className="checkmark"></span>
              <span className="terms-text">
                <Link to="/terms" className="terms-link">Kullanım Koşulları</Link> ve 
                <Link to="/privacy" className="terms-link"> Gizlilik Politikası</Link>'nı kabul ediyorum
              </span>
            </label>
            {errors.terms && <div className="form-error">{errors.terms}</div>}
          </div>

          <button 
            type="submit" 
            className="auth-btn"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="loading-spinner"></span>
                Kayıt oluşturuluyor...
              </>
            ) : (
              <>
                <i className="bi bi-person-plus"></i>
                Üye Ol
              </>
            )}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Zaten hesabınız var mı? 
            <Link to="/login" className="auth-link">
              Giriş Yap
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
