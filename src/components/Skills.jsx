import React from 'react';
import { Database, Cpu, Globe, Server } from 'lucide-react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "Machine Learning",
            icon: <Cpu className="text-accent" size={32} />,
            skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Computer Vision", "NLP", "LLMs", "Reinforcement Learning"]
        },
        {
            title: "Data Engineering",
            icon: <Database className="text-accent" size={32} />,
            skills: ["SQL", "NoSQL", "Spark", "Hadoop", "Airflow", "ETL Pipelines", "Data Warehousing"]
        },
        {
            title: "Languages & Tools",
            icon: <Globe className="text-accent" size={32} />,
            skills: ["Python", "R", "C++", "Docker", "Kubernetes", "Git", "AWS/GCP"]
        },
        {
            title: "Visualization",
            icon: <Server className="text-accent" size={32} />, // Placeholder icon
            skills: ["Tableau", "PowerBI", "Matplotlib", "Seaborn", "D3.js", "Streamlit"]
        }
    ];

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Technical <span className="text-gradient">Skills</span></h2>
                    <p className="section-subtitle">
                        A comprehensive toolset for solving complex data problems.
                    </p>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-card glass">
                            <div className="skill-icon-wrapper">
                                {category.icon}
                            </div>
                            <h3 className="skill-category-title">{category.title}</h3>
                            <div className="skill-tags">
                                {category.skills.map((skill, idx) => (
                                    <span key={idx} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
