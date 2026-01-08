import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import angelicaImg from '../assets/Angelica_Gónzalez-Coach.jpg';
import yarelyImg from '../assets/Yarely_Sánchez-Coach.jpg';
import jesusImg from '../assets/Jesus_Palomares-Nutriologo.jpg';
import claudiaImg from '../assets/Claudia_Hernandez-Enfermera.jpg';
import blancaImg from '../assets/Blanca_Hernandez-Recepción.jpg';

const teamMembers = [
    {
        id: 1,
        name: "Angelica Gónzalez",
        role: "Coach",
        image: angelicaImg,
        description: "Experta en técnica y expresión, guiando cada paso de tu desarrollo artístico con pasión y dedicación."
    },
    {
        id: 2,
        name: "Yarely Sánchez",
        role: "Coach",
        image: yarelyImg,
        description: "Impulsando tu energía y ritmo en cada clase para que alcances tu máximo potencial en la pista."
    },
    {
        id: 3,
        name: "Jesus Palomares",
        role: "Nutriologo",
        image: jesusImg,
        description: "Cuidando tu salud y rendimiento físico a través de la nutrición para que bailes sin límites."
    },
    {
        id: 4,
        name: "Claudia Hernandez",
        role: "Enfermera",
        image: claudiaImg,
        description: "Velando siempre por el bienestar, la salud y la seguridad de toda nuestra comunidad de bailarines."
    },
    {
        id: 5,
        name: "Blanca Hernandez",
        role: "Recepción",
        image: blancaImg,
        description: "Tu primer contacto con la familia Pink Energy, siempre lista para recibirte con una gran sonrisa."
    }
];

const TeamCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
    };

    return (
        <div className="w-full mt-8 relative bg-white/5 rounded-2xl p-6 border border-white/5 backdrop-blur-sm">
            <h4 className="text-brand-pink font-bold text-sm tracking-wider uppercase mb-4 text-center">Nuestro Talento</h4>

            {/* Height adjusted for mobile text wrapping */}
            <div className="relative h-[350px] md:h-[250px] overflow-hidden">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-6 px-8 md:px-16"
                    >
                        {/* Photo Side */}
                        <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 relative">
                            <div className="absolute inset-0 bg-brand-pink/20 rounded-full blur-xl animate-pulse"></div>
                            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-brand-pink/50 shadow-[0_0_20px_rgba(255,0,127,0.4)]">
                                <img
                                    src={teamMembers[currentIndex].image}
                                    alt={teamMembers[currentIndex].name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Text Side */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg">
                            <h5 className="text-white font-bold text-2xl md:text-3xl mb-1">{teamMembers[currentIndex].name}</h5>
                            <p className="text-brand-pink text-base font-semibold uppercase tracking-widest mb-4">{teamMembers[currentIndex].role}</p>

                            <div className="relative">
                                <span className="absolute -top-4 -left-2 text-4xl text-white/10 font-serif">"</span>
                                <p className="text-gray-300 text-sm md:text-base leading-relaxed italic">
                                    {teamMembers[currentIndex].description}
                                </p>
                                <span className="absolute -bottom-4 -right-2 text-4xl text-white/10 font-serif">"</span>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Controls */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 -translate-y-1/2 p-2 text-white/30 hover:text-brand-pink transition-colors z-10"
            >
                <FaChevronLeft size={20} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 -translate-y-1/2 p-2 text-white/30 hover:text-brand-pink transition-colors z-10"
            >
                <FaChevronRight size={20} />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-2">
                {teamMembers.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-brand-pink w-6' : 'bg-white/20'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default TeamCarousel;
