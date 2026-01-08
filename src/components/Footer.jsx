import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTiktok } from 'react-icons/fa';
const logo = "/logo2.png";

const Footer = () => {
    return (
        <footer id="contacto" className="bg-[#020202] border-t border-white/5 pt-20 pb-10 px-6 md:px-12 relative overflow-hidden">

            <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 relative z-10 px-6 lg:px-12">

                {/* Brand */}
                <div className="col-span-1 md:col-span-2">
                    <img src={logo} alt="Pink Energy" className="h-16 w-auto mb-6 object-contain" />
                    <p className="text-gray-400 text-sm max-w-sm leading-relaxed mb-6">
                        Transformando energía en movimiento desde 2010. Únete a la comunidad de danza más vibrante de la ciudad.
                    </p>
                    <div className="flex gap-4">
                        {/* Social Icons */}
                        <a href="https://www.instagram.com/_pink.energy?igsh=eHE0NGRpZ3B0YXVz&utm_source=qr" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-pink hover:scale-110 transition-all cursor-pointer">
                            <FaInstagram size={20} />
                        </a>
                        <a href="https://www.tiktok.com/@_pink.energy?_r=1&_t=ZS-92sx4nSWWUm" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-pink hover:scale-110 transition-all cursor-pointer">
                            <FaTiktok size={18} />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-pink hover:scale-110 transition-all cursor-pointer">
                            <FaFacebookF size={18} />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-pink hover:scale-110 transition-all cursor-pointer">
                            <FaYoutube size={20} />
                        </a>
                    </div>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-6">
                    <h4 className="text-white font-bold text-lg">Explora</h4>
                    <div className="flex flex-col gap-3">
                        <a href="#inicio" className="text-gray-500 hover:text-white hover:translate-x-2 transition-all block">Inicio</a>
                        <a href="#clases" className="text-gray-500 hover:text-white hover:translate-x-2 transition-all block">Clases</a>
                        <a href="#nosotros" className="text-gray-500 hover:text-white hover:translate-x-2 transition-all block">Nosotros</a>
                        <a href="#blog" className="text-gray-500 hover:text-white hover:translate-x-2 transition-all block">Blog</a>
                    </div>
                </div>

                {/* Contact */}
                <div className="flex flex-col gap-6">
                    <h4 className="text-white font-bold text-lg">Contacto</h4>
                    <div className="flex flex-col gap-3">
                        <a href="tel:+528342660194" className="text-gray-400 hover:text-brand-pink transition-colors font-medium flex items-center gap-2">
                            <span className="text-brand-pink"><FaPhoneAlt /></span> +52 834 266 0194
                        </a>
                        <a href="mailto:pinkenergydancecompany@gmail.com" className="text-gray-400 hover:text-brand-pink transition-colors font-medium flex items-center gap-2">
                            <span className="text-brand-pink"><FaEnvelope /></span> pinkenergydancecompany@gmail.com
                        </a>
                        <p className="text-gray-500 text-sm mt-2 flex items-start gap-2">
                            <span className="text-brand-pink mt-1"><FaMapMarkerAlt /></span> Av. Siempre Viva 123,<br />Col. Centro, CDMX
                        </p>
                    </div>
                </div>

            </div>

            <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 relative z-10">
                <p>© 2026 Pink Energy Dance Company. Todos los derechos reservados.</p>
            </div>

            {/* Decor text */}
            <div className="absolute -bottom-20 -right-20 text-[200px] font-black text-white/5 select-none pointer-events-none">
                DANCE
            </div>

            {/* WhatsApp Floating Button */}
            <motion.a
                href="https://wa.me/528342660194"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] z-50 hover:shadow-[0_0_30px_rgba(37,211,102,0.8)] transition-shadow flex items-center justify-center"
                aria-label="Contactar por WhatsApp"
            >
                <FaWhatsapp size={28} />
            </motion.a>
        </footer>
    );
};

export default Footer;
