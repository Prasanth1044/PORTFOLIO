import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <main>
                {/* Header Section */}
                <section className="section" style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>
                    <div className="container">
                        <h1 className="section-title">Prasanth PM</h1>
                        <div style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--text-muted)' }}>
                            <p>📞 +91 9092763604 | 📧 pras261105@gmail.com | 📍 Salem, India 636030</p>
                            <p><a href="https://github.com/Prasanth1044" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
                        </div>
                    </div>
                </section>

                {/* Professional Summary */}
                <section className="section">
                    <div className="container">
                        <h2 className="section-title">Professional Summary</h2>
                        <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
                            Developer focused on <strong>Generative AI, Deep Learning</strong>, and full-stack application development. 
                            Skilled in building AI-powered systems, working with LLMs, embeddings, and model workflows. Interested in 
                            integrating machine learning into scalable backend applications and real-world products.
                        </p>
                    </div>
                </section>

                {/* Education */}
                <section className="section">
                    <div className="container">
                        <h2 className="section-title">Education</h2>
                        <div className="card" style={{ padding: '1.5rem', marginBottom: '1rem' }}>
                            <h3 style={{ color: 'var(--text-light)', marginBottom: '0.5rem' }}>Amrita Vishwa Vidyapeetham</h3>
                            <p style={{ color: 'var(--primary-light)', marginBottom: '0.5rem' }}>Bachelor of Technology - Computer Science and Engineering</p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                GPA: 7.02 | 2023 - Present | Coimbatore, India
                            </p>
                            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                                <strong>Relevant Coursework:</strong> Data Structures and Algorithms, Operating Systems, Database Management Systems, Computer Networks
                            </p>
                        </div>

                        <div className="card" style={{ padding: '1.5rem', marginBottom: '1rem' }}>
                            <h3 style={{ color: 'var(--text-light)', marginBottom: '0.5rem' }}>IIT Madras</h3>
                            <p style={{ color: 'var(--primary-light)', marginBottom: '0.5rem' }}>Bachelor of Science - Data Science</p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                2023 - Present | Chennai, India
                            </p>
                            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                                <strong>Relevant Coursework:</strong> Deep Learning and Gen AI, Bayesian Statistics, Machine Learning
                            </p>
                        </div>

                        <div className="card" style={{ padding: '1.5rem' }}>
                            <h3 style={{ color: 'var(--text-light)', marginBottom: '0.5rem' }}>SRV Innovative Public School</h3>
                            <p style={{ color: 'var(--primary-light)', marginBottom: '0.5rem' }}>High School Diploma - Class XII (CBSE)</p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                Score: 91.8% | Tamil Nadu
                            </p>
                        </div>
                    </div>
                </section>

                {/* Technical Skills */}
                <section className="section">
                    <div className="container">
                        <h2 className="section-title">Technical Skills</h2>
                        <div className="skills-grid">
                            <div className="card skill-item">
                                <h4>Programming Languages</h4>
                                <p>C/C++, Python, Java, Haskell, JavaScript, TypeScript</p>
                            </div>
                            <div className="card skill-item">
                                <h4>Frameworks & Libraries</h4>
                                <p>ReactJS, Express, Tailwind CSS, PyTorch, FastAPI</p>
                            </div>
                            <div className="card skill-item">
                                <h4>Embedded Systems</h4>
                                <p>STM32 Microcontrollers, RFID, SPI, I2C, DMA, GPIO, Embedded C</p>
                            </div>
                            <div className="card skill-item">
                                <h4>Databases</h4>
                                <p>MySQL, MongoDB, Redis, Prisma, PostgreSQL</p>
                            </div>
                            <div className="card skill-item">
                                <h4>Interests & Specializations</h4>
                                <p>Machine Learning, NLP, Generative AI, Blockchain, Algorithms</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects */}
                <section className="section">
                    <div className="container">
                        <h2 className="section-title">Projects</h2>

                        <div className="card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
                            <h3 style={{ color: 'var(--text-light)', marginBottom: '0.3rem' }}>Optimized Rainbow Table Generator Using B-Tree</h3>
                            <p style={{ color: 'var(--primary-light)', fontSize: '0.9rem', marginBottom: '0.8rem' }}>Data Structures and Algorithms / Security</p>
                            <ul style={{ color: 'var(--text-muted)', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                                <li>Developed a customizable rainbow table generator for password hash reversal using SHA-1/MD5, enhanced with a B-tree-based GomuhryTree for faster hash lookup and collision management.</li>
                                <li>Integrated configuration-driven charset handling, structured logging, and efficient chain reduction algorithms for scalable password-cracking experiments.</li>
                            </ul>
                        </div>

                        <div className="card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
                            <h3 style={{ color: 'var(--text-light)', marginBottom: '0.3rem' }}>Academic Management Web Portal</h3>
                            <p style={{ color: 'var(--primary-light)', fontSize: '0.9rem', marginBottom: '0.8rem' }}>Frontend Developer (HTML, CSS, JavaScript)</p>
                            <ul style={{ color: 'var(--text-muted)', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                                <li>Developed responsive frontend web portal with role-based access for students and teachers using HTML, CSS, and JavaScript.</li>
                                <li>Implemented features including course management, attendance tracking, assignment uploads, and grade viewing.</li>
                            </ul>
                        </div>

                        <div className="card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
                            <h3 style={{ color: 'var(--text-light)', marginBottom: '0.3rem' }}>Smart Attendance System</h3>
                            <p style={{ color: 'var(--primary-light)', fontSize: '0.9rem', marginBottom: '0.8rem' }}>Embedded C, STM32, RFID, SPI, I2C, DMA</p>
                            <ul style={{ color: 'var(--text-muted)', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                                <li>Engineered a high-performance attendance tracking system using 32-bit microcontroller with innovative bit manipulation technique, where each integer represents 32 students using DMA for efficient memory operations.</li>
                                <li>Optimized attendance processing through bitwise operations on 32-bit integers, achieving significantly faster computation compared to traditional array-based methods.</li>
                                <li>Integrated RFID module via SPI and LED display via I2C protocols, designing a scalable system that handles real-time attendance marking with minimal memory footprint.</li>
                            </ul>
                        </div>

                        <div className="card" style={{ padding: '1.5rem' }}>
                            <h3 style={{ color: 'var(--text-light)', marginBottom: '0.3rem' }}>QoE-Aware Multi-Tier Edge Offloading for Real-Time Visual SLAM and Object Detection</h3>
                            <p style={{ color: 'var(--primary-light)', fontSize: '0.9rem', marginBottom: '0.8rem' }}>Python, YOLOv5, SLAM Libraries, OpenCV, SimPy, NumPy, Matplotlib</p>
                            <ul style={{ color: 'var(--text-muted)', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                                <li>Designed and simulated a dynamic multi-tier Edge Computing architecture (Tiers 1, 2, 3) to optimize the performance of real-time computer vision applications.</li>
                                <li>Implemented a computational offloading strategy for critical tasks, specifically integrating YOLOv5 (Object Detection) and Visual SLAM.</li>
                                <li>Modeled the system using SimPy discrete-event simulation library to analyze deployment trade-offs, focusing on minimizing latency and maximizing Quality of Experience (QoE).</li>
                            </ul>
                        </div>
            </main>
            <Footer />
        </div>
    );
};

export default About;