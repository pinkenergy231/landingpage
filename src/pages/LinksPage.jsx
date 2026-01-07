
import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaGlobe, FaTiktok } from 'react-icons/fa';

const logo = "/logo2.png";

const LinksPage = () => {
    const links = [
        { name: 'WhatsApp', url: 'https://wa.me/521234567890', icon: <FaWhatsapp />, color: 'border-green-500', textColor: 'text-green-500' },
        { name: 'Instagram', url: 'https://instagram.com/pinkenergy', icon: <FaInstagram />, color: 'border-pink-500', textColor: 'text-pink-500' },
        { name: 'TikTok', url: 'https://tiktok.com/@pinkenergy', icon: <FaTiktok />, color: 'border-cyan-500', textColor: 'text-cyan-400' },
        { name: 'Ubicación', url: 'https://maps.google.com', icon: <FaMapMarkerAlt />, color: 'border-blue-500', textColor: 'text-blue-500' },
        { name: 'Sitio Web Principal', url: '/', icon: <FaGlobe />, color: 'border-purple-500', textColor: 'text-purple-500' },
    ];

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative overflow-hidden">

            {/* Background Effects (Subtler now) */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-pink/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/5 rounded-full blur-[120px] pointer-events-none"></div>

            {/* Main Card Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md bg-[#0a0a0a] rounded-3xl overflow-hidden shadow-2xl border border-white/5 relative z-10"
            >
                {/* Banner Image */}
                <div className="h-32 w-full relative">
                    <img
                        src="/hero_sparkle.png"
                        alt="Banner"
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
                </div>

                {/* Overlapping Logo */}
                <div className="absolute top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-32 h-32 rounded-full p-2 bg-[#0a0a0a] ring-1 ring-white/10 shadow-[0_0_40px_rgba(255,0,127,0.3)] flex items-center justify-center">
                        <div className="w-full h-full rounded-full bg-black/50 overflow-hidden flex items-center justify-center border border-white/5">
                            <img src={logo} alt="Pink Energy Logo" className="w-full h-full object-contain p-1" />
                        </div>
                    </div>
                </div>

                {/* Content Body */}
                <div className="pt-20 pb-8 px-6 flex flex-col items-center relative">

                    {/* Header Text */}
                    <div className="flex flex-col items-center gap-2 mb-8 text-center">
                        <h1 className="text-3xl font-bold text-white tracking-wide">Pink Energy</h1>
                        <p className="text-gray-400 text-sm font-medium">Transformando energía en movimiento.</p>

                        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-3"></div>

                        <div className="text-gray-300 text-sm space-y-1.5 leading-relaxed">
                            <p>💃 Pasión, técnica y actitud en cada movimiento.</p>
                            <p>💗 Academia de baile con energía, estilo y mucho ritmo.</p>
                            <p className="font-semibold text-brand-pink pt-1">✨ Coming Soon — Ciudad Victoria, Tamaulipas.</p>
                            <p>📩 Preinscripciones y contacto aquí.</p>
                        </div>
                    </div>

                    {/* Links List */}
                    <div className="w-full flex flex-col gap-3">
                        {links.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.url}
                                target={link.name === 'Sitio Web Principal' ? '_self' : '_blank'}
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + (index * 0.1), duration: 0.4 }}
                                className={`w-full py-4 px-5 rounded-xl border border-white/5 bg-zinc-900/50 hover:bg-zinc-800/80 transition-all duration-300 flex items-center justify-between group hover:border-${link.color.split('-')[1]}-500/50 relative overflow-hidden`}
                            >
                                <div className="flex items-center gap-4 z-10">
                                    <span className={`text-2xl ${link.textColor || link.color.split(' ')[1]}`}>{link.icon}</span>
                                    <span className="text-white font-bold text-base tracking-wide">{link.name}</span>
                                </div>

                                <span className="text-white/20 group-hover:text-white transition-colors z-10 text-xl">→</span>

                                {/* Hover Glow */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${link.textColor ? link.textColor.replace('text-', 'from-') : 'from-brand-pink'}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Footer simple */}
                    <footer className="mt-10 text-gray-600 text-xs">
                        © 2026 Pink Energy Dance Company
                    </footer>

                </div>
            </motion.div>
        </div>
    );
};

export default LinksPage;

