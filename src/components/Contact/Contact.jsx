import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiUser, HiChatAlt2, HiPaperAirplane } from 'react-icons/hi';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate sending
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        }, 2000);
    };

    return (
        <section id="contact" className="section-padding bg-dark relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-gradient">Contactez-moi</span>
                    </h2>
                    <p className="text-text-muted">
                        Vous avez un projet en tête ou simplement envie de discuter ? N'hésitez pas à m'envoyer un message.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-5 gap-8 md:gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 space-y-8"
                    >
                        <div className="bg-dark-card p-6 rounded-2xl border border-white/5 shadow-lg">
                            <h3 className="text-xl font-bold text-white mb-4">Mes Coordonnées</h3>
                            <div className="space-y-4 text-text-muted">
                                <p>Je suis actuellement disponible pour des projets freelance et des opportunités à temps plein.</p>
                                <p>Basé à : <span className="text-white">Douala, Cameroun</span></p>
                                <p>Email : <a href="mailto:sintchenfeuzidane@gmail.com" className="text-accent-primary hover:underline break-all">Sintchenfeuzidane@gmail.com</a></p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-3"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6 bg-dark-card p-6 md:p-8 rounded-2xl border border-white/5 shadow-lg">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-text-muted mb-2">Nom Complet</label>
                                <div className="relative">
                                    <HiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-3 bg-dark border border-white/10 rounded-lg focus:outline-none focus:border-accent-primary text-white transition-colors placeholder-white/20"
                                        placeholder="Zidane Kouokam"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-2">Email</label>
                                <div className="relative">
                                    <HiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-3 bg-dark border border-white/10 rounded-lg focus:outline-none focus:border-accent-primary text-white transition-colors placeholder-white/20"
                                        placeholder="Zidane@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-text-muted mb-2">Message</label>
                                <div className="relative">
                                    <HiChatAlt2 className="absolute left-4 top-4 text-text-muted" />
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-3 bg-dark border border-white/10 rounded-lg focus:outline-none focus:border-accent-primary text-white transition-colors resize-none placeholder-white/20"
                                        placeholder="Votre message..."
                                    ></textarea>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className={`w-full py-4 rounded-lg font-bold text-white transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 tap-target
                                    ${status === 'success' ? 'bg-green-600' : 'bg-gradient-to-r from-primary to-accent-secondary hover:shadow-lg hover:shadow-primary/25'}
                                `}
                            >
                                {status === 'sending' ? 'Envoi...' : status === 'success' ? 'Message Envoyé !' : (
                                    <>Envoyer le message <HiPaperAirplane className="rotate-90" /></>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
