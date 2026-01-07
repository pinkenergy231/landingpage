import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "relative overflow-hidden px-8 py-3 rounded-full font-bold tracking-wide transition-all duration-300";

    const variants = {
        primary: "bg-brand-pink text-white shadow-neon hover:shadow-neon-strong border border-brand-pink",
        secondary: "bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-brand-pink/50",
        outline: "border-2 border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            <span className="relative z-10">{children}</span>
            {variant === 'primary' && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:animate-[shimmer_1.5s_infinite]" />
            )}
        </motion.button>
    );
};

export default Button;
