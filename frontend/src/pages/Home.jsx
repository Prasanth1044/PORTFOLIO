import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <main>
                <section className="hero container">
                    <h1>Hi, I'm Prasanth PM</h1>
                    <p>
                        A passionate full-stack developer creating beautiful, functional web applications 
                        with modern technologies. Specializing in React, Node.js, and responsive design.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/projects" className="btn btn-primary">View My Work</Link>
                        <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <h2 className="section-title">Featured Projects</h2>
                        <p className="section-subtitle">
                            A selection of recent projects I've built. Visit the projects page to see more.
                        </p>
                        <div className="projects-grid">
                            <article className="card project-card">
                                <h3>E-Commerce Platform</h3>
                                <p>A full-featured e-commerce platform built with React and Node.js, featuring product management, shopping cart, and payment integration.</p>
                                <div className="project-tags">
                                    <span className="tag">React</span>
                                    <span className="tag">Node.js</span>
                                    <span className="tag">MongoDB</span>
                                </div>
                                <div className="project-links">
                                    <a href="https://github.com">Code</a>
                                    <a href="https://demo.com">Live Demo</a>
                                </div>
                            </article>
                            
                            <article className="card project-card">
                                <h3>Task Management App</h3>
                                <p>A collaborative task management application with real-time updates, user authentication, and team collaboration features.</p>
                                <div className="project-tags">
                                    <span className="tag">React</span>
                                    <span className="tag">Firebase</span>
                                    <span className="tag">Tailwind</span>
                                </div>
                                <div className="project-links">
                                    <a href="https://github.com">Code</a>
                                    <a href="https://demo.com">Live Demo</a>
                                </div>
                            </article>
                            
                            <article className="card project-card">
                                <h3>Portfolio Website</h3>
                                <p>A modern, responsive portfolio website showcasing projects and skills with smooth animations and optimized performance.</p>
                                <div className="project-tags">
                                    <span className="tag">React</span>
                                    <span className="tag">Vite</span>
                                    <span className="tag">CSS3</span>
                                </div>
                                <div className="project-links">
                                    <a href="https://github.com">Code</a>
                                    <a href="https://demo.com">Live Demo</a>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container" style={{ textAlign: 'center' }}>
                        <h2 className="section-title">Let's Work Together</h2>
                        <p style={{ marginBottom: '2rem' }}>
                            I'm always interested in hearing about new projects and opportunities.
                        </p>
                        <Link to="/contact" className="btn btn-primary">Contact Me</Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;