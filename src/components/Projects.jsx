import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "Predictive Maintenance System",
            description: "End-to-end ML pipline to predict machinery failure using sensor data. Reduced downtime by 15%.",
            tags: ["Python", "TensorFlow", "IoT", "Flask"],
            links: { demo: "#", code: "#" },
            image: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)" // Placeholder gradient
        },
        {
            title: "Customer Churn Analyzer",
            description: "Interactive dashboard visualizing customer churn factors mixed with a Random Forest predictor.",
            tags: ["R", "Shiny", "Random Forest", "Visualization"],
            links: { demo: "#", code: "#" },
            image: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)"
        },
        {
            title: "NLP Sentiment Engine",
            description: "Real-time sentiment analysis for social media streams using BERT models.",
            tags: ["Transformers", "HuggingFace", "FastAPI", "React"],
            links: { demo: "#", code: "#" },
            image: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)"
        }
    ];

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
                    <p className="section-subtitle">
                        Real-world applications of data science and machine learning.
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card glass">
                            <div className="project-image" style={{ background: project.image }}>
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.links.code} className="project-link" title="View Code">
                                            <Github size={20} />
                                        </a>
                                        <a href={project.links.demo} className="project-link" title="Live Demo">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="project-tag"><Code size={12} /> {tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
