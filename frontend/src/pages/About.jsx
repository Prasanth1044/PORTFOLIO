import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <main>
                <section className="section">
                    <div className="container">
                        <h1 className="section-title">About Me</h1>
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
            </main>
            <Footer />
        </div>
    );
};

export default About;