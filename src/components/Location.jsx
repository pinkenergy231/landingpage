import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

const Location = () => {
    return (
        <section className="py-24 bg-black relative px-6 md:px-12 overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Text Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-6"
                >
                    <div className="flex items-center gap-4 mb-2">
                        <span className="w-12 h-[2px] bg-brand-pink"></span>
                        <h2 className="text-sm font-bold tracking-[0.2em] text-brand-pink uppercase">
                            Nuestra Ubicación
                        </h2>
                    </div>

                    <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
                        ¿Dónde <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-brand-pink to-purple-500">
                            Encontrarnos?
                        </span>
                    </h3>

                    <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group">
                        <div className="p-3 bg-brand-pink/20 rounded-lg text-brand-pink group-hover:scale-110 transition-transform">
                            <FaMapMarkerAlt size={24} />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg mb-2">Pink Energy Dance Studio</h4>
                            <p className="text-gray-400 leading-relaxed">
                                Calle Gral. L. Valle Nte.,<br />
                                3 Aldama y Mina, Zona Centro,<br />
                                87000 Cdad. Victoria, Tamps.
                            </p>
                            <a
                                href="https://maps.app.goo.gl/RDHSpp76YeBwvrBJ8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-brand-pink text-sm font-bold mt-4 hover:underline"
                            >
                                Ver en Google Maps <FaExternalLinkAlt size={12} />
                            </a>
                        </div>
                    </div>

                    <p className="text-gray-500 text-sm italic">
                        "Estamos ubicados en el corazón de la ciudad, un espacio accesible diseñado para inspirarte."
                    </p>
                </motion.div>

                {/* Map Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative"
                >
                    <div className="absolute inset-0 bg-brand-pink/5 animate-pulse z-0 pointer-events-none"></div>
                    <iframe
                        title="Pink Energy Location"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.245708371679!2d-99.13897209999999!3d23.7386159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8679530057539de3%3A0x614b9bdc5c66c7ed!2sPink%20Energy%20Dance%20Company!5e0!3m2!1ses-419!2smx!4v1767840148689!5m2!1ses-419!2smx"
                        className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700 relative z-10"
                    >
                    </iframe>
                </motion.div>

            </div>
        </section>
    );
};

export default Location;
