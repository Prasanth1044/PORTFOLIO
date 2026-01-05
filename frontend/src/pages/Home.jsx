import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects';

const Home = () => {
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
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <div className="app-wrapper">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="hero container">
                    <h1>Hi, I'm Prasanth PM</h1>
                    <p>
                        A passionate full-stack developer creating beautiful, functional web applications 
                        with modern technologies. Specializing in React, Node.js, and responsive design.
                    </p>
                </section>

                {/* About Section */}
                <section className="section">
                    <div className="container">
                        <h2 className="section-title">About Me</h2>
                        <div className="about-content">
                            <p>
                                Hi! I'm <strong>Prasanth PM</strong>, a passionate full-stack developer with a deep love for creating elegant, 
                                user-centric web applications. Currently studying at <strong>Amrita Vishwa Vidyapeetham</strong> with a CGPA of <strong>7.2</strong>. 
                                My journey in tech started with a fascination for problem-solving and coding, and it continues to evolve as I build solutions that make a real impact.
                            </p>
                            <p>
                                I specialize in frontend development with React.js and modern JavaScript, but I'm equally comfortable building 
                                scalable backend systems with Node.js and databases. I believe in writing clean, maintainable code and staying 
                                current with the latest web technologies and best practices.
                            </p>
                            <p>
                                When I'm not coding, you'll find me contributing to open-source projects, learning new frameworks, reading tech 
                                articles, or exploring innovative solutions to complex problems. I'm always excited to collaborate on projects that 
                                challenge my skills and help me grow as a developer.
                            </p>
                        </div>

                        <div className="skills-grid" style={{ marginTop: '3rem' }}>
                            <div className="card skill-item">
                                <h4>Education</h4>
                                <p><strong>Amrita Vishwa Vidyapeetham</strong><br/>CGPA: 7.2</p>
                            </div>
                            <div className="card skill-item">
                                <h4>Frontend</h4>
                                <p>React, Vue.js, JavaScript, HTML5, CSS3, Tailwind, Bootstrap</p>
                            </div>
                            <div className="card skill-item">
                                <h4>Backend</h4>
                                <p>Node.js, Express, Python, Django, MongoDB, PostgreSQL</p>
                            </div>
                            <div className="card skill-item">
                                <h4>Tools & Platforms</h4>
                                <p>Git, Docker, AWS, Vite, Webpack, GitHub Actions, CI/CD</p>
                            </div>
                            <div className="card skill-item">
                                <h4>Soft Skills</h4>
                                <p>Problem Solving, Team Collaboration, Communication, Agile</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="section">
                    <div className="container">
                        <h2 className="section-title">My Projects</h2>
                        <p className="section-subtitle">
                            A collection of projects I've worked on, showcasing my skills in web development, design, and problem-solving.
                        </p>
                        <div className="projects-grid">
                            {projectsData.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="section">
                    <div className="container contact-wrapper">
                        <h2 className="section-title">Get In Touch</h2>
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

export default Home;