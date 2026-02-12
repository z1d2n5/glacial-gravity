import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark-card border-t border-white/5 pt-16 pb-8">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12 text-center md:text-left">
                    <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start">
                        <h2 className="text-2xl font-bold font-mono text-white mb-4">
                            <span className="text-accent-primary">&lt;</span>
                            KZ
                            <span className="text-accent-secondary">/&gt;</span>
                        </h2>
                        <p className="text-text-muted max-w-sm mb-6">
                            Data Analyst & Développeur Web passionné par la création de solutions numériques impactantes.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: <FaGithub />, href: "https://github.com/z1d2n5" },
                                { icon: <FaLinkedin />, href: "https://linkedin.com/in/zidane-kouokam-0b6888229/" },
                                { icon: <FaTwitter />, href: "https://twitter.com/" },
                                { icon: <FaEnvelope />, href: "mailto:sintchenfeuzidane@gmail.com" }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-12 h-12 rounded-full bg-dark flex items-center justify-center text-text-muted hover:bg-primary hover:text-white transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6">Liens Rapides</h3>
                        <ul className="space-y-4">
                            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={item.toLowerCase()}
                                        smooth={true}
                                        duration={500}
                                        className="text-text-muted hover:text-white cursor-pointer transition-colors p-2 inline-block"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6">Contact</h3>
                        <ul className="space-y-4 text-text-muted">
                            <li>Douala, Cameroun</li>
                            <li>sintchenfeuzidane@gmail.com</li>
                            <li>+237 656871325</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted text-center md:text-left">
                    <p>&copy; {currentYear} Kouokam Zidane. Tous droits réservés.</p>
                    <p>Conçu et développé avec React & Tailwind</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
