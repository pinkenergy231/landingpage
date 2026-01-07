import React from 'react';
import { motion } from 'framer-motion';
import balletImg from '../assets/ballet_class.png';
import jazzImg from '../assets/jazz_class.png';
import hiphopImg from '../assets/hiphop_class.png';

const ClassCard = ({ title, image, description, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2, duration: 0.6 }}
        className="group relative overflow-hidden rounded-3xl bg-brand-surface border border-white/5 hover:border-brand-pink/30 transition-all duration-500"
    >
        {/* Image Container */}
        <div className="aspect-[4/5] w-full overflow-hidden relative">
            <img
                src={image}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-90"></div>

            {/* Content Layout */}
            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-300 text-sm mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {description}
                </p>

                <div className="flex items-center gap-2 text-brand-neon font-bold uppercase tracking-wider text-xs cursor-pointer group-hover:gap-4 transition-all">
                    <span>Ver Detalles</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
            </div>
        </div>
    </motion.div>
);

const Classes = () => {
    const classes = [
        { title: 'Ballet Clásico', image: balletImg, description: 'La base de toda danza. Perfecciona tu técnica, postura y elegancia con nuestros maestros.' },
        { title: 'Jazz Contemporáneo', image: jazzImg, description: 'Fusión de estilos. Energía, expresión y libertad de movimiento en cada coreografía.' },
        { title: 'Hip-Hop Urbano', image: hiphopImg, description: 'Ritmo puro. Aprende los estilos más actuales y desarrolla tu propio flow en la pista.' }
    ];

    return (
        <section id="clases" className="py-32 bg-brand-dark relative px-6 md:px-12 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-pink/5 rounded-full blur-[100px]"></div>

            <div className="w-full relative z-10 px-6 lg:px-12">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-white mb-6"
                    >
                        Nuestras <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-brand-pink to-purple-500 filter drop-shadow-neon">Clases</span>
                    </motion.h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Explora nuestra variedad de estilos diseñados para potenciar tu talento, desde la elegancia del ballet hasta la fuerza del urbano.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {classes.map((cls, index) => (
                        <ClassCard key={index} index={index} {...cls} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Classes;
