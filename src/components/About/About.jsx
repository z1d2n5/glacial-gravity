import React from 'react';
import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';

const stats = [
    { label: 'Années d\'expérience', value: '2+' },
    { label: 'Projets complétés', value: '15+' },
    { label: 'Technologies', value: '10+' },
];

const About = () => {
    return (
        <section id="about" className="section-padding bg-dark relative overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        À Propos de <span className="text-gradient">Moi</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-2xl overflow-hidden glass-card relative z-10 group">
                            <img
                                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop"
                                alt="Coding setup"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300"></div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent-secondary/20 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10"></div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-white">
                            Passionné par la donnée et le développement
                        </h3>
                        <p className="text-text-muted mb-6 leading-relaxed">
                            Je suis un développeur passionné qui combine l'analyse de données rigoureuse avec le développement web créatif.
                            Mon objectif est de créer des outils qui non seulement fonctionnent parfaitement, mais qui racontent aussi une histoire à travers les données.
                        </p>
                        <p className="text-text-muted mb-8 leading-relaxed">
                            Que ce soit pour construire une application React performante ou pour analyser des tendances complexes avec Python et SQL,
                            j'apporte une approche méthodique et orientée solutions à chaque projet.
                        </p>

                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-8 text-center sm:text-left">
                            {stats.map((stat, index) => (
                                <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/5 sm:bg-transparent sm:border-0 sm:p-0">
                                    <h4 className="text-3xl font-bold text-accent-primary mb-1">{stat.value}</h4>
                                    <p className="text-sm text-text-muted">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        <ul className="space-y-3">
                            {['Disponible pour freelance', 'Travail à distance', 'Ouvert aux collaborations'].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-white">
                                    <HiCheckCircle className="text-accent-secondary text-xl" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
