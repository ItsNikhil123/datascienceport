import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero section">
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="badge glass">
                        Available for Hire
                    </div>
                    <h1 className="hero-title">
                        Turning Raw Data into <br />
                        <span className="text-gradient">Actionable Insights</span>
                    </h1>
                    <p className="hero-subtitle">
                        Hi, I'm <strong>Devatha Nikhil</strong>. A Data Scientist specializing in Machine Learning,
                        Predictive Analytics, and transforming complex datasets into impact.
                    </p>
                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">
                            View My Work <ArrowRight size={20} />
                        </a>
                        <button className="btn btn-outline">
                            Download CV <Download size={20} />
                        </button>
                    </div>

                    <div className="hero-stats glass">
                        <div className="stat-item">
                            <span className="stat-number text-gradient">3+</span>
                            <span className="stat-label">Years Exp.</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number text-gradient">20+</span>
                            <span className="stat-label">Projects</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number text-gradient">98%</span>
                            <span className="stat-label">Accuracy</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-glow"></div>
        </section>
    );
};

export default Hero;
