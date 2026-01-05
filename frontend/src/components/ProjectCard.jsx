import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <article className="card project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
                {project.technologies && project.technologies.map((tech, idx) => (
                    <span key={idx} className="tag">{tech}</span>
                ))}
            </div>
            <div className="project-links">
                {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">Code</a>}
                {project.liveDemo && <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>}
            </div>
        </article>
    );
};

export default ProjectCard;