import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
    return (
        <div className="app">
            <Navbar />
            <main>
                <Hero />
                <Skills />
                <Projects />
                <Contact />
            </main>

            <footer style={{
                textAlign: 'center',
                padding: '2rem',
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
                borderTop: '1px solid var(--glass-border)'
            }}>
                <p>© {new Date().getFullYear()} Devatha Nikhil. Built with React.</p>
            </footer>
        </div>
    );
}

export default App;
