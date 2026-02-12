import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Accueil', to: 'home' },
        { name: 'À Propos', to: 'about' },
        { name: 'Compétences', to: 'skills' },
        { name: 'Projets', to: 'projects' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold font-mono text-white cursor-pointer"
                >
                    <span className="text-accent-primary">&lt;</span>
                    KZ
                    <span className="text-accent-secondary">/&gt;</span>
                </motion.div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8">
                    {navLinks.map((link, index) => (
                        <motion.li
                            key={link.name}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index, duration: 0.5 }}
                        >
                            <Link
                                to={link.to}
                                smooth={true}
                                duration={500}
                                className="text-sm font-medium text-white/80 hover:text-white hover:text-accent-primary transition-colors cursor-pointer relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-primary transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </motion.li>
                    ))}
                </ul>

                {/* Mobile Hamburger */}
                <div className="md:hidden text-white cursor-pointer p-2 z-50 relative" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-0 left-0 w-full min-h-screen bg-dark/95 backdrop-blur-xl border-b border-white/10 flex flex-col justify-center items-center md:hidden"
                    >
                        <ul className="flex flex-col items-center space-y-8">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.to}
                                        smooth={true}
                                        duration={500}
                                        offset={-80}
                                        onClick={() => setIsOpen(false)}
                                        className="text-2xl font-medium text-white hover:text-accent-primary transition-colors cursor-pointer relative group p-4"
                                    >
                                        {link.name}
                                        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-accent-primary transition-all duration-300 group-hover:w-1/2"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
