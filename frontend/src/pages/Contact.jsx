import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a backend or email service
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <div className="app-wrapper">
            <Header />
            <main>
                <section className="section">
                    <div className="container contact-wrapper">
                        <h1 className="section-title">Get In Touch</h1>
                        <p className="section-subtitle">
                            Have a question or want to work together? I'd love to hear from you. 
                            Send me a message and I'll respond as soon as possible.
                        </p>

                        {submitted && (
                            <div style={{
                                background: '#10b981',
                                color: 'white',
                                padding: '1rem',
                                borderRadius: '8px',
                                marginBottom: '2rem',
                                textAlign: 'center',
                                animation: 'fadeInUp 0.6s ease-out'
                            }}>
                                ✓ Thank you! Your message has been sent. I'll get back to you soon!
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="card" style={{ padding: '2rem' }}>
                            <div className="form-group">
                                <label htmlFor="name">Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                Send Message
                            </button>
                        </form>

                        <div style={{ 
                            marginTop: '3rem', 
                            padding: '2rem', 
                            textAlign: 'center',
                            borderTop: '1px solid #e5e7eb'
                        }}>
                            <p style={{ marginBottom: '1rem' }}>Or reach out directly:</p>
                            <p>
                                <a href="mailto:your.email@example.com" style={{ fontSize: '1.1rem' }}>
                                    your.email@example.com
                                </a>
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;