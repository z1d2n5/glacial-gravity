import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaPython, FaDatabase, FaNodeJs, FaHtml5, FaCss3Alt, FaTable, FaChartBar } from 'react-icons/fa';
import { SiTailwindcss, SiPandas, SiJavascript, SiTypescript } from 'react-icons/si';

const skillsData = {
    data: [
        { name: 'Python', icon: <FaPython />, level: 90 },
        { name: 'SQL', icon: <FaDatabase />, level: 85 },
        { name: 'Power BI', icon: <FaChartBar />, level: 80 },
        { name: 'Pandas', icon: <SiPandas />, level: 85 },
        { name: 'Excel / VBA', icon: <FaTable />, level: 95 },
    ],
    web: [
        { name: 'React', icon: <FaReact />, level: 85 },
        { name: 'JavaScript', icon: <SiJavascript />, level: 90 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 75 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 95 },
        { name: 'Node.js', icon: <FaNodeJs />, level: 70 },
    ]
};

const SkillBar = ({ skill, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="mb-6"
    >
        <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2 text-white font-medium">
                <span className="text-accent-primary text-xl">{skill.icon}</span>
                {skill.name}
            </div>
            <span className="text-text-muted text-sm">{skill.level}%</span>
        </div>
        <div className="h-2 w-full bg-dark-card rounded-full overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-primary to-accent-secondary rounded-full relative"
            >
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </motion.div>
        </div>
    </motion.div>
);

const Skills = () => {
    return (
        <section id="skills" className="section-padding bg-dark relative">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Mes <span className="text-gradient">Compétences</span>
                    </h2>
                    <p className="text-text-muted max-w-2xl mx-auto">
                        Une expertise technique variée me permettant de naviguer entre l'analyse de données approfondie et le développement d'interfaces modernes.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16">
                    {/* Data Skills */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4 inline-block pr-12">
                            Data Analysis
                        </h3>
                        <div className="space-y-2">
                            {skillsData.data.map((skill, index) => (
                                <SkillBar key={skill.name} skill={skill} index={index} />
                            ))}
                        </div>
                    </div>

                    {/* Web Skills */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4 inline-block pr-12">
                            Développement Web
                        </h3>
                        <div className="space-y-2">
                            {skillsData.web.map((skill, index) => (
                                <SkillBar key={skill.name} skill={skill} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
