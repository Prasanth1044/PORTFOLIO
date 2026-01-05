import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Initialize EmailJS with your Public Key
emailjs.init('D_i27hMLA0iiIl6wT');

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // EmailJS will send to your Gmail
        const templateParams = {
            to_email: 'pras261105@gmail.com',
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
        };

        emailjs.send(
            'service_2xkmnk8',      // Your Service ID
            'template_9yxke1l',     // Your Template ID
            templateParams
        )
        .then((response) => {
            console.log('Email sent successfully!', response);
            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
            setLoading(false);
            setTimeout(() => setSubmitted(false), 5000);
        })
        .catch((err) => {
            console.error('Email failed to send:', err);
            setError('Failed to send email. Please try again.');
            setLoading(false);
        });
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

                        {error && (
                            <div style={{
                                background: '#f87171',
                                color: 'white',
                                padding: '1rem',
                                borderRadius: '8px',
                                marginBottom: '2rem',
                                textAlign: 'center',
                                animation: 'fadeInUp 0.6s ease-out'
                            }}>
                                ⚠️ {error}
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
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={loading}>
                                {loading ? 'Sending...' : 'Send Message'}
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
                                <a href="mailto:pras261105@gmail.com" style={{ fontSize: '1.1rem' }}>
                                    pras261105@gmail.com
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