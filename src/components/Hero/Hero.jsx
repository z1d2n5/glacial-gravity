import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiArrowRight, HiDownload } from 'react-icons/hi';

const Typewriter = ({ text, delay }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);

    return <span>{currentText}</span>;
};

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative bg-dark overflow-hidden pt-20">
            {/* Animated Background Elements */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent-secondary/20 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="container mx-auto px-6 md:px-12 z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left"
                >
                    <h2 className="text-accent-primary font-mono text-lg mb-4">Bonjour, je suis</h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
                        Kouokam <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-secondary">Zidane</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-text-muted mb-8 font-light h-16 md:h-auto">
                        <Typewriter text="Data Analyst & Développeur Web" delay={50} />
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="text-accent-primary ml-1"
                        >
                            |
                        </motion.span>
                    </h2>
                    <p className="text-text-muted text-lg mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        Je transforme des données complexes en insights clairs et je construis des expériences web modernes et performantes.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link to="projects" smooth={true} duration={500}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium flex items-center justify-center gap-2 shadow-lg shadow-primary/25 transition-all"
                            >
                                Voir mes projets <HiArrowRight />
                            </motion.button>
                        </Link>
                        <motion.a
                            href="https://drive.google.com/file/d/1114UlXVWMlQOoSDUjbH43MPYFi3iLMCm/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-lg font-medium flex items-center justify-center gap-2 backdrop-blur-sm transition-all cursor-pointer"
                        >
                            Télécharger CV <HiDownload />
                        </motion.a>
                    </div>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        {/* Rotating Ring */}
                        <div className="absolute inset-0 border-2 border-dashed border-white/20 rounded-full animate-[spin_10s_linear_infinite]"></div>

                        {/* Glow Behind */}
                        <div className="absolute inset-4 bg-gradient-to-tr from-primary to-accent-secondary rounded-full opacity-50 blur-3xl animate-pulse"></div>

                        {/* Profile Image */}
                        <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white/10 glass-card">
                            <img
                                src="/kouokam-zidane.jpg"
                                alt="Kouokam Zidane"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = 'https://ui-avatars.com/api/?name=Kouokam+Zidane&background=0D8ABC&color=fff&size=512';
                                }}
                            />
                        </div>

                        {/* Floating Badges */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute top-10 -right-4 bg-dark-card/90 backdrop-blur-md border border-white/10 p-3 rounded-lg shadow-xl flex items-center gap-3"
                        >
                            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-sm font-semibold text-white">Open to Work</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-10 -left-8 bg-dark-card/90 backdrop-blur-md border border-white/10 p-3 rounded-lg shadow-xl"
                        >
                            <span className="text-sm font-bold text-accent-primary">React & Python</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
