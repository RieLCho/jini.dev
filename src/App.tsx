import React from 'react';
import { WorkExperiences } from './main/WorkExperiences';
import { Education } from './main/Education';
import { PersonalInfo } from './main/PersonalInfo';
import { PersonalProjects } from './main/PersonalProjects';
import Contribution from './main/Contributions';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background-light/80 backdrop-blur-sm border-b border-secondary-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="text-xl font-heading font-bold text-primary-600">Yangjin Cho</div>
                    <nav className="flex gap-6">
                        <a 
                            href="#about" 
                            className="text-secondary-600 hover:text-primary-600 transition-colors"
                        >
                            About
                        </a>
                        <a 
                            href="#experience" 
                            className="text-secondary-600 hover:text-primary-600 transition-colors"
                        >
                            Experience
                        </a>
                        <a 
                            href="#projects" 
                            className="text-secondary-600 hover:text-primary-600 transition-colors"
                        >
                            Projects
                        </a>
                        <a 
                            href="#contact" 
                            className="text-secondary-600 hover:text-primary-600 transition-colors"
                        >
                            Contact
                        </a>
                    </nav>
                    <div className="flex gap-4">
                        <a 
                            target="_blank" 
                            href="https://sheepjin99.tistory.com/"
                            className="text-secondary-600 hover:text-primary-600 transition-colors"
                            rel="noopener noreferrer"
                        >
                            Tistory
                        </a>
                        <a 
                            target="_blank" 
                            href="https://github.com/RieLCho"
                            className="text-secondary-600 hover:text-primary-600 transition-colors"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                        <a 
                            target="_blank" 
                            href="https://twitter.com/jini_QwQ"
                            className="text-secondary-600 hover:text-primary-600 transition-colors"
                            rel="noopener noreferrer"
                        >
                            Twitter
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

const Main = () => {
    return (
        <main className="pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="space-y-24">
                    <section id="about" className="animate-fade-in">
                        <PersonalInfo />
                    </section>
                    <section id="experience" className="animate-fade-in">
                        <WorkExperiences />
                    </section>
                    <section id="education" className="animate-fade-in">
                        <Education />
                    </section>
                    <section id="projects" className="animate-fade-in">
                        <PersonalProjects />
                    </section>
                    <section id="contributions" className="animate-fade-in">
                        <Contribution />
                    </section>
                </div>
            </div>
        </main>
    );
};

const Footer = () => {
    return (
        <footer className="bg-secondary-900 text-secondary-100 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-2">
                    <p className="text-sm">© 2024 Yangjin Cho. All rights reserved.</p>
                    <p className="text-xs text-secondary-400">
                        Built with React, TypeScript, and Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
};

const App = () => {
    return (
        <div className="min-h-screen bg-background-light">
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default App;
