import { useState } from 'react';
import './Bookpage.css';

export function Bookpage() {
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
        <h2>Consultation Today</h2>
      </div>

      <form onSubmit={handleSubmit} className="personal-form">
        <fieldset className="form-section">  
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">
                First Name <span className="required">*</span>
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
              !Enter a first name
              </span>
            </div>

            <div className="form-group">
              <label htmlFor="lastName">
                Last Name <span className="required">*</span>
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
              !Enter a first name
              </span>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">
                Email <span className="required">*</span>
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
              !Enter an email address like example@mysite.com.
              </span>
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                Phone 
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
                Address<span className="required">*</span>
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
              !Enter an address.
            </span>
            <div className="input-hint">
              Street Address, City, Province, Postal Code
            </div>
        </div>

          </div>

          <div className="form-row">
          <div className="form-group full-width">
          <label htmlFor='products'>
          What product(s) are you considering?<span className="required">*</span>
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
                    <h4 className="checkbox-item-title">{product.label}</h4>
                  </div>    
                </label>
              </div>
            ))}
          </div>
          <div className="input-hint">
              Our blinds offer a motorized option, are compatible with smart home systems like HomeKit, Alexa, and Google Assistant, and feature solar charging for energy efficiency.
            </div>
        
        </div>
        </div>
        <div className="form-row">
            <div className="form-group full-width">
              <label htmlFor="numberwindows">What is the approx number of the windows?<span className="required">*</span>
              </label>
              <input
                type="number"
                id="numberwindows"
                name="numberwindows"
                value={formData.numberwindows}
                onChange={handleChange}
                required
                placeholder="Enter a number"
                pattern="[0-9]{1,}"
              />
              <span className="error-message" aria-live="polite">
              !Enter a number
              </span>
            </div>

            <div className="form-group full-width">
              <label htmlFor="notes">Additional Notes</label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows="4"
              />
            <div className="input-hint">
              Any other details about the window or custom features that you would like to add.
            </div>
         </div>
        <div className="form-row">
          <div className="form-group">
            <div className="form-actions">
            <button type="submit" className="submit-btn">
              Submit
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