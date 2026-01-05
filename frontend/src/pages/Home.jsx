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
                                <h3>Smart Attendance System</h3>
                                <p>Engineered a high-performance attendance tracking system using 32-bit microcontroller with innovative bit manipulation. Optimized through bitwise operations achieving significantly faster computation. Integrated RFID via SPI and LED display via I2C protocols.</p>
                                <div className="project-tags">
                                    <span className="tag">Embedded C</span>
                                    <span className="tag">STM32</span>
                                    <span className="tag">RFID</span>
                                    <span className="tag">SPI/I2C</span>
                                </div>
                                <div className="project-links">
                                    <a href="https://github.com/Prasanth1044" target="_blank" rel="noopener noreferrer">Code</a>
                                </div>
                            </article>
                            
                            <article className="card project-card">
                                <h3>Optimized Rainbow Table Generator</h3>
                                <p>Developed a customizable rainbow table generator for password hash reversal using SHA-1/MD5, enhanced with B-tree-based GomuhryTree for faster hash lookup. Integrated configuration-driven charset handling and efficient chain reduction algorithms.</p>
                                <div className="project-tags">
                                    <span className="tag">Data Structures</span>
                                    <span className="tag">B-Tree</span>
                                    <span className="tag">Security</span>
                                </div>
                                <div className="project-links">
                                    <a href="https://github.com/Prasanth1044" target="_blank" rel="noopener noreferrer">Code</a>
                                </div>
                            </article>
                            
                            <article className="card project-card">
                                <h3>Portfolio Website</h3>
                                <p>A modern, responsive portfolio website built with React and Vite, showcasing projects, skills, and resume with smooth animations, dark theme, and optimized performance. Features smooth navigation and glassmorphism design.</p>
                                <div className="project-tags">
                                    <span className="tag">React</span>
                                    <span className="tag">Vite</span>
                                    <span className="tag">CSS3</span>
                                </div>
                                <div className="project-links">
                                    <a href="https://github.com/Prasanth1044" target="_blank" rel="noopener noreferrer">Code</a>
                                </div>
                            </article>

                            <article className="card project-card">
                                <h3>QoE-Aware Multi-Tier Edge Offloading</h3>
                                <p>Designed and simulated dynamic multi-tier Edge Computing architecture to optimize real-time computer vision applications. Implemented computational offloading strategy for YOLOv5 object detection and Visual SLAM using SimPy.</p>
                                <div className="project-tags">
                                    <span className="tag">Python</span>
                                    <span className="tag">YOLOv5</span>
                                    <span className="tag">SLAM</span>
                                    <span className="tag">SimPy</span>
                                </div>
                                <div className="project-links">
                                    <a href="https://github.com/Prasanth1044" target="_blank" rel="noopener noreferrer">Code</a>
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