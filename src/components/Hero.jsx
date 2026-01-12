import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import heroBg from '../assets/hero_bg_hd.png';
import ScheduleModal from './ScheduleModal';

const Hero = () => {
    const [isScheduleOpen, setIsScheduleOpen] = useState(false);

    return (
        <section id="inicio" className="relative w-full min-h-screen flex items-center overflow-hidden bg-black">

            {/* Background Image - Full Cover */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero_sparkle.png"
                    alt="Pink Energy Studio"
                    className="w-full h-full object-cover object-center"
                />
                {/* Darker overlay to ensure text readability over the sparkling background */}
                <div className="absolute inset-0 bg-black/60 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
            </div>

            {/* Content Container - Removed Grid, allowing content to breathe */}
            <div className="relative z-10 w-full px-6 lg:px-12 flex flex-col justify-center h-full pt-40 md:pt-48 pb-32">

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-3xl" // Restricted width for text but allowing right side to show image
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center gap-4 mb-4"
                    >
                        <div className="h-[2px] w-16 bg-brand-pink shadow-[0_0_10px_#FF007F]"></div>
                        <span className="text-white tracking-[0.3em] text-sm font-bold uppercase drop-shadow-md">Nueva Academia en Cd. Victoria</span>
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.95] mb-8 drop-shadow-2xl">
                        Desata <br />
                        tu Pasión <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-brand-pink to-purple-500 filter drop-shadow-neon">
                            por el Baile
                        </span>
                    </h1>

                    <p className="text-gray-200 text-xl md:text-2xl max-w-xl leading-relaxed mb-10 font-light drop-shadow-lg">
                        Sé parte del inicio de algo extraordinario. <span className="text-brand-pink font-semibold">Únete a la nueva comunidad</span> de danza y siente la energía desde el primer paso.
                    </p>

                    <div className="flex flex-wrap gap-6">
                        <Button variant="primary" className="text-lg px-12 py-4 shadow-[0_0_20px_rgba(255,0,127,0.6)] hover:shadow-[0_0_30px_rgba(255,0,127,0.8)] hover:scale-105 transition-transform">
                            Agenda tu Clase
                        </Button>
                        <Button
                            variant="secondary"
                            className="text-lg px-12 py-4 backdrop-blur-sm hover:bg-white/10"
                            onClick={() => setIsScheduleOpen(true)}
                        >
                            Ver Horarios
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Schedule Modal */}
            <ScheduleModal isOpen={isScheduleOpen} onClose={() => setIsScheduleOpen(false)} />
        </section>
    );
};

export default Hero;
