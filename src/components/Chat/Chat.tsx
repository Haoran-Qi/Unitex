import { useState } from 'react';
import './Chat.css';

export function Chat() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message:''
  });

  const [selectedServices, setSelectedServices] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSend = (e) => {
    e.preventDefault();
    const submissionData = {
      ...formData,
      selectedProducts: selectedServices
    };
    console.log('submissionData', submissionData);
  };

  return (
    <section id="chat" className="chat">
      <div className="container">
      <div className="chat-grid">
        <div className="chat-header">
            <h2>Let's Chat</h2>
        </div>

                
        <div className="chat-info-grid">
            <div className="chat-leftgrid">
                <p className="chat-info-detail">
                    Phone
                </p>
                <p className="chat-info-detail">
                    647-897-0424 
                </p>
            </div>

            <div className="chat-rightgrid">
                <p className="chat-info-detail">
                    Email
                </p>
                <p className="chat-info-detail">
                    unitex.curtain@gmail.com
                </p>
            </div>
        </div>
        

        <form onSubmit={handleSend} className="personal-form">
        <fieldset className="form-section">  
            <div className="form-row">
                <div className="form-group">
                        <label htmlFor="firstName">
                        First Name 
                        </label>
                        <input
                         type="text"
                         id="firstName"
                         name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        />
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">
                        Last Name 
                    </label>
                        <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        />
                </div>
               
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
                    placeholder="you@example.com"
                    required
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    />
                </div>
            </div>
               

            <div className="form-row">
                <div className="form-group full-width">
                    <label htmlFor="message">Message</label>
                        <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <div className="form-actions">
                        <button type="submit" className="submit-btn">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </fieldset>
        </form>
    </div>
    </div>
    </section>
  );
}