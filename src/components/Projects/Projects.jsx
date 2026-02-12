import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects';
import { HiCode, HiExternalLink } from 'react-icons/hi';

const Projects = () => {
    const [filter, setFilter] = useState('Tous');
    const categories = ['Tous', 'Data Analysis', 'Web Dev'];

    const filteredProjects = filter === 'Tous'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="section-padding bg-dark relative">
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Mes <span className="text-gradient">Projets</span>
                    </h2>
                    <p className="text-text-muted max-w-2xl mx-auto mb-8">
                        Une sélection de travaux démontrant mes capacités en analyse de données et en développement web.
                    </p>

                    {/* Filter Buttons */}
                    <div className="flex justify-center flex-wrap gap-4">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${filter === cat
                                        ? 'bg-primary text-white border-primary shadow-lg shadow-primary/25'
                                        : 'bg-dark-card text-text-muted border-white/5 hover:border-white/20 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                                className="group relative bg-dark-card rounded-xl overflow-hidden border border-white/5 hover:border-accent-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                            >
                                {/* Image Overlay */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="p-3 bg-white/10 rounded-full text-white hover:bg-primary transition-colors hover:scale-110 transform"
                                            title="Voir le code"
                                        >
                                            <HiCode size={20} />
                                        </a>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="p-3 bg-white/10 rounded-full text-white hover:bg-accent-secondary transition-colors hover:scale-110 transform"
                                            title="Voir la démo"
                                        >
                                            <HiExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-xs font-semibold text-accent-primary uppercase tracking-wider">
                                            {project.category}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-text-muted text-sm mb-4 line-clamp-3">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 bg-white/5 rounded text-xs text-text-muted border border-white/5"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
