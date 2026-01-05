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