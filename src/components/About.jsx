import React from 'react';
import { motion } from 'framer-motion';
import teamImg from '../assets/nosotros.jpg';
import TeamCarousel from './TeamCarousel';

const About = () => {
    return (
        <section id="nosotros" className="py-24 bg-brand-dark relative px-6 md:px-12 overflow-hidden">

            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6 lg:px-12">

                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    {/* Abstract Glow Background */}
                    <div className="absolute -inset-4 bg-brand-pink/30 rounded-full blur-3xl opacity-50 animate-pulse"></div>

                    <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-700">
                        <img
                            src={teamImg}
                            alt="Equipo Pink Energy"
                            className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-brand-pink/10 mix-blend-overlay"></div>
                    </div>


                </motion.div>

                {/* Text Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-4 mb-4">
                        <span className="w-12 h-[2px] bg-brand-pink"></span>
                        <h2 className="text-sm font-bold tracking-[0.2em] text-brand-pink uppercase">
                            Acerca de Nosotros
                        </h2>
                    </div>

                    <h3 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                        Pasión por la enseñanza,<br />
                        <span className="text-gray-500">Comunidad y Arte.</span>
                    </h3>

                    <p className="text-gray-300 mb-6 leading-relaxed text-lg font-light">
                        <strong className="text-white">Pink Energy</strong> llega para traer una nueva vibra a la ciudad. Somos un proyecto joven nacido de la pasión por el movimiento, creado para inspirar y potenciar el talento de cada alumno desde cero.
                    </p>
                    <p className="text-gray-400 mb-8 leading-relaxed font-light">
                        Aquí comenzamos juntos una nueva historia. Buscamos construir una comunidad unida donde la disciplina técnica se combina con la diversión y la energía positiva en cada clase.
                    </p>

                    <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                        <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/5">
                            <h4 className="text-brand-pink font-black text-xl md:text-2xl mb-2">Atención Total</h4>
                            <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Grupos Reducidos</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/5">
                            <h4 className="text-brand-pink font-black text-xl md:text-2xl mb-2">100% Pasión</h4>
                            <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Energía Pura</p>
                        </div>
                    </div>
                </motion.div>

            </div>

            {/* Team Carousel (Below Grid) */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full max-w-4xl mx-auto mt-12 md:mt-20"
            >
                <TeamCarousel />
            </motion.div>
        </section>
    );
};

export default About;
