import React from 'react';
import { Mail, Linkedin, Github, Twitter, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container contact-container">
                <div className="contact-content glass">
                    <h2 className="section-title">Let's <span className="text-gradient">Connect</span></h2>
                    <p className="contact-text">
                        I'm currently looking for new opportunities in Data Science and Machine Learning.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <a href="mailto:nikhildevatha.2000@gmail.com" className="btn btn-primary contact-btn">
                        <Mail size={20} /> Say Hello
                    </a>

                    <div className="social-links">
                        <a href="#" className="social-link" title="LinkedIn">
                            <Linkedin size={24} />
                        </a>
                        <a href="#" className="social-link" title="GitHub">
                            <Github size={24} />
                        </a>
                        <a href="#" className="social-link" title="Twitter">
                            <Twitter size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
