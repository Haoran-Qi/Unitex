import { useState } from 'react';
import './Bookpage.css';
import { useTranslation } from 'react-i18next'

export function Bookpage() {

  const { t } = useTranslation()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    numberwindows: '',
    notes:''
  });

  const [selectedServices, setSelectedServices] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submissionData = {
      ...formData,
      selectedProducts: selectedServices
    };
    console.log('submissionData', submissionData);
  };

  const products = [
    { 
      id: '1', 
      value: 'drapery', 
      label: 'Drapery (blackout)',
    },
    { 
      id: '2', 
      value: 'sheer', 
      label: 'Sheer Curtains',
    },
    { 
      id: '3', 
      value: 'zebra', 
      label: 'Zebra Blinds',
    },
    { 
      id: '4', 
      value: 'roller', 
      label: 'Roller Shades',
    },
    { 
      id: '5', 
      value: 'roman', 
      label: 'Roman Shade',
    },
    { 
      id: '6', 
      value: 'vertical', 
      label: 'Vertical Blinds',
    },
    { 
      id: '7', 
      value: 'honeycomb', 
      label: 'Honeycomb Shades',
    },
    { 
      id: '8', 
      value: 'others', 
      label: 'Others',
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
        <h2>
        {t('bookpage.form_header')}
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="personal-form">
        <fieldset className="form-section">  
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">
                {t('bookpage.firstname.label')} <span className="required">*</span>
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
              {t('bookpage.firstname.error')}
              </span>
            </div>

            <div className="form-group">
              <label htmlFor="lastName">
                {t('bookpage.lastname.label')} <span className="required">*</span>
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
              {t('bookpage.firstname.error')}
              </span>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">
                {t('bookpage.email.label')} <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              />
              <span className="error-message" aria-live="polite">
              {t('bookpage.email.error')}
              </span>
            </div>

            <div className="form-group">
              <label htmlFor="phone">
              {t('bookpage.phone.label')} 
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
                {t('bookpage.address.label')}<span className="required">*</span>
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
            {t('bookpage.address.error')}
            </span>
            <div className="input-hint">
            {t('bookpage.address.hint')}
            </div>
        </div>

          </div>

          <div className="form-row">
          <div className="form-group full-width">
          <label htmlFor='products'>
          {t('bookpage.products.label')}<span className="required">*</span>
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
                    <h4 className="checkbox-item-title">
                    {t('bookpage.products.'+product.value)}
                    </h4>
                  </div>    
                </label>
              </div>
            ))}
          </div>
          <div className="input-hint">
              {t('bookpage.products.hint')}
            </div>
        
        </div>
        </div>
        <div className="form-row">
            <div className="form-group full-width">
              <label htmlFor="numberwindows">{t('bookpage.window.label')}<span className="required">*</span>
              </label>
              <input
                type="number"
                id="numberwindows"
                name="numberwindows"
                value={formData.numberwindows}
                onChange={handleChange}
                required
                placeholder={t('bookpage.window.placeholder')}
                pattern="[0-9]{1,}"
              />
              <span className="error-message" aria-live="polite">
              {t('bookpage.window.error')}
              </span>
            </div>

            <div className="form-group full-width">
              <label htmlFor="notes">{t('bookpage.note.label')}</label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows="4"
              />
            <div className="input-hint">
              {t('bookpage.note.hint')}
            </div>
         </div>
        <div className="form-row">
          <div className="form-group">
            <div className="form-actions">
            <button type="submit" className="submit-btn">
              {t('bookpage.submit')}
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