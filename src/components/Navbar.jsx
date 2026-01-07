import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from './Button';
const logo = "/logo2.png";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Inicio', href: '#inicio' },
        { name: 'Clases', href: '#clases' },
        { name: 'Nosotros', href: '#nosotros' },
        { name: 'Contacto', href: '#contacto' },
        { name: 'Info', href: '/links', isPage: true }
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-brand-dark/80 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'
                }`}
        >
            <div className="w-full px-6 lg:px-12 flex justify-between items-center">

                <div className="flex items-center gap-2">
                    <div className="bg-black rounded-full p-3 shadow-[0_0_15px_rgba(255,0,127,0.6)] border border-white/10">
                        <img src={logo} alt="Pink Energy Logo" className="h-16 md:h-24 w-auto object-contain" />
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-10 text-white font-medium">
                    {navItems.map((item) => (
                        item.isPage ? (
                            <Link
                                key={item.name}
                                to={item.href}
                                className="hover:text-brand-pink transition-colors relative group drop-shadow-md"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-pink transition-all group-hover:w-full duration-300"></span>
                            </Link>
                        ) : (
                            <a
                                key={item.name}
                                href={item.href}
                                className="hover:text-brand-pink transition-colors relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-pink transition-all group-hover:w-full duration-300"></span>
                            </a>
                        )
                    ))}
                    <Button variant="primary" className="text-sm px-6 py-2">Agenda tu Clase</Button>
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-white text-2xl focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile Overlay Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-0 top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden z-[60] border-l-2 border-brand-pink/20 shadow-[0_0_50px_rgba(255,0,127,0.15)]"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/10 rounded-full blur-[100px] pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>
                        <button
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-10"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <span className="text-4xl leading-none">&times;</span>
                        </button>
                        {navItems.map((item) => (
                            item.isPage ? (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className="text-3xl font-bold text-white hover:text-brand-pink transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ) : (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-3xl font-bold text-white hover:text-brand-pink transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            )
                        ))}
                        <Button variant="primary" onClick={() => setIsMobileMenuOpen(false)}>Agenda tu Clase</Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
