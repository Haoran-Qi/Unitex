import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import './Bookpage.css';

export function Bookpage() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    numberwindows: '',
    notes: ''
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Format selected products as a readable list
      const productsList = selectedServices
        .map(value => {
          const product = products.find(p => p.value === value);
          return product ? `• ${t(product.labelKey)}` : '';
        })
        .filter(Boolean)
        .join('\n');

      // Prepare email template parameters
      const templateParams = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        selectedProducts: productsList || 'None selected',
        numberWindows: formData.numberwindows,
        notes: formData.notes || 'No additional notes',
        submissionDate: new Date().toLocaleString('en-US', {
          dateStyle: 'medium',
          timeStyle: 'short'
        })
      };

      // Send email via EmailJS
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', response);

      // Show success message
      setSubmitStatus('success');
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        numberwindows: '',
        notes: ''
      });
      setSelectedServices([]);

      // Auto-hide success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);

    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Auto-hide error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const products = [
    {
      id: '1',
      value: 'drapery',
      labelKey: 'bookpage.products.drapery',
    },
    {
      id: '2',
      value: 'sheer',
      labelKey: 'bookpage.products.sheer',
    },
    {
      id: '3',
      value: 'zebra',
      labelKey: 'bookpage.products.zebra',
    },
    {
      id: '4',
      value: 'roller',
      labelKey: 'bookpage.products.roller',
    },
    {
      id: '5',
      value: 'roman',
      labelKey: 'bookpage.products.roman',
    },
    {
      id: '6',
      value: 'vertical',
      labelKey: 'bookpage.products.vertical',
    },
    {
      id: '7',
      value: 'honeycomb',
      labelKey: 'bookpage.products.honeycomb',
    },
    {
      id: '8',
      value: 'others',
      labelKey: 'bookpage.products.others',
    },
  ];

  const handleCheckboxChange = (value) => {
    setSelectedServices(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };



  return (
    <div className="form-container">
      <div className="form-header">
        <h2>{t('bookpage.title')}</h2>
      </div>

      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="notification notification-success">
          <div className="notification-icon">✓</div>
          <div className="notification-content">
            <h3>Booking Request Sent!</h3>
            <p>Thank you for your interest. We'll contact you within 24 hours.</p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="notification notification-error">
          <div className="notification-icon">✕</div>
          <div className="notification-content">
            <h3>Oops! Something went wrong</h3>
            <p>Please try again or contact us directly at info@unitex.com</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="personal-form">
        <fieldset className="form-section" disabled={isSubmitting}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">
                {t('bookpage.form.firstName')} <span className="required">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder=''
                pattern="[a-zA-Z]{1,}"
                required
              />
              <span className="error-message" aria-live="polite">
                {t('bookpage.errors.firstName')}
              </span>
            </div>

            <div className="form-group">
              <label htmlFor="lastName">
                {t('bookpage.form.lastName')} <span className="required">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder=''
                pattern="[a-zA-Z]{1,}"
                required
              />
              <span className="error-message" aria-live="polite">
                {t('bookpage.errors.lastName')}
              </span>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">
                {t('bookpage.form.email')} <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t('bookpage.placeholders.email')}
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              />
              <span className="error-message" aria-live="polite">
                {t('bookpage.errors.email')}
              </span>
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                {t('bookpage.form.phone')}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder=''
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group full-width">
              <label htmlFor="address">
                {t('bookpage.form.address')}<span className="required">*</span>
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder=''
                required
              />
              <span className="error-message" aria-live="polite">
                {t('bookpage.errors.address')}
              </span>
              <div className="input-hint">
                {t('bookpage.hints.address')}
              </div>
            </div>

          </div>

          <div className="form-row">
            <div className="form-group full-width">
              <label htmlFor='products'>
                {t('bookpage.form.products')}<span className="required">*</span>
              </label>
              <div className="checkbox-grid">
                {products.map((product) => (
                  <div key={product.id} className="checkbox-card">
                    <input
                      type="checkbox"
                      id={product.id}
                      name="products"
                      value={product.value}
                      checked={selectedServices.includes(product.value)}
                      onChange={() => handleCheckboxChange(product.value)}
                      className="checkbox-input"
                    />
                    <label htmlFor={product.id} className="checkbox-label">
                      <span className="custom-checkbox"></span>
                      <div className="checkbox-content">
                        <h4 className="checkbox-item-title">{t(product.labelKey)}</h4>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
              <div className="input-hint">
                {t('bookpage.hints.products')}
              </div>

            </div>
          </div>
          <div className="form-row">
            <div className="form-group full-width">
              <label htmlFor="numberwindows">{t('bookpage.form.numberWindows')}<span className="required">*</span>
              </label>
              <input
                type="number"
                id="numberwindows"
                name="numberwindows"
                value={formData.numberwindows}
                onChange={handleChange}
                required
                placeholder={t('bookpage.placeholders.number')}
                pattern="[0-9]{1,}"
              />
              <span className="error-message" aria-live="polite">
                {t('bookpage.errors.number')}
              </span>
            </div>

            <div className="form-group full-width">
              <label htmlFor="notes">{t('bookpage.form.notes')}</label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows="4"
              />
              <div className="input-hint">
                {t('bookpage.hints.notes')}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <div className="form-actions">
                  <button type="submit" className="submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <span className="spinner"></span>
                        Sending...
                      </>
                    ) : (
                      t('bookpage.form.submit')
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </div>

  );
}