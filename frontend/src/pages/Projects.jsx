import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects';

const Projects = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <main>
                <section className="section">
                    <div className="container">
                        <h1 className="section-title">My Projects</h1>
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
            </main>
            <Footer />
        </div>
    );
};

export default Projects;