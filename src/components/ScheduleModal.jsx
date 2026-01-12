
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaSun, FaMoon, FaCalendarDay } from 'react-icons/fa';

const ScheduleModal = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState('matutino');

    // Data Structure based on the provided image
    const schedules = {
        matutino: [
            { time: '8:00 AM', classes: [{ name: 'Acondicionamiento Físico', days: 'Lunes a Viernes' }] },
            { time: '9:00 AM', classes: [{ name: 'Zumba', days: 'Lunes a Viernes' }] },
            { time: '10:00 AM', classes: [{ name: 'Jazz Matutino', days: 'Lunes, Miércoles y Viernes' }] },
        ],
        vespertino: [
            {
                time: '4:00 PM',
                classes: [
                    { name: 'Juniors', days: 'Lun / Mié / Vie', color: 'text-brand-pink' },
                    { name: 'Boys', days: 'Mar / Jue', color: 'text-purple-400' }
                ]
            },
            {
                time: '5:00 PM',
                classes: [
                    { name: 'Babys', days: 'Lun / Mié / Vie', color: 'text-brand-pink' },
                    { name: 'Kids', days: 'Mar / Jue', color: 'text-purple-400' }
                ]
            },
            {
                time: '6:00 PM',
                classes: [
                    { name: 'Moms (Zumba)', days: 'Lun / Mié / Vie', color: 'text-brand-pink' },
                    { name: 'Teens', days: 'Mar / Jue', color: 'text-purple-400' }
                ]
            },
            {
                time: '7:00 PM',
                classes: [
                    { name: 'Gimnasia', days: 'Lun / Mié / Vie', color: 'text-brand-pink' },
                    { name: 'Elite Junior', days: 'Mar / Jue', color: 'text-purple-400' }
                ]
            },
            {
                time: '8:00 PM',
                classes: [
                    { name: 'Elite', days: 'Lun / Mié / Vie', color: 'text-brand-pink' },
                    { name: 'Seniors', days: 'Mar / Jue', color: 'text-purple-400' }
                ]
            },
        ],
        sabado: [
            { time: '9:00 AM', classes: [{ name: 'Elite Junior', days: 'Sábados' }] },
            { time: '10:00 AM', classes: [{ name: 'Boys', days: 'Sábados' }] },
            { time: '11:00 AM', classes: [{ name: 'Kids', days: 'Sábados' }] },
            { time: '12:00 PM', classes: [{ name: 'Teens', days: 'Sábados' }] },
            { time: '1:00 PM', classes: [{ name: 'Seniors', days: 'Sábados' }] },
        ]
    };

    const tabs = [
        { id: 'matutino', label: 'Mañana', icon: <FaSun /> },
        { id: 'vespertino', label: 'Tarde', icon: <FaMoon /> },
        { id: 'sabado', label: 'Sábados', icon: <FaCalendarDay /> },
    ];

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
                    />

                    {/* Modal Card */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(255,0,127,0.15)] overflow-hidden max-h-[90vh] flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink/20 rounded-full blur-[50px] pointer-events-none"></div>
                            <h2 className="text-2xl font-black text-white z-10">
                                Horarios de <span className="text-brand-pink">Clase</span>
                            </h2>
                            <button
                                onClick={onClose}
                                className="relative z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-brand-pink transition-colors"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        {/* Tabs */}
                        <div className="flex p-2 bg-black/20 gap-2 overflow-x-auto no-scrollbar">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${activeTab === tab.id
                                            ? 'bg-brand-pink text-white shadow-lg shadow-brand-pink/20'
                                            : 'bg-transparent text-gray-400 hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    {tab.icon}
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                            <div className="space-y-4">
                                {schedules[activeTab].map((slot, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="flex gap-4 group"
                                    >
                                        {/* Time Column */}
                                        <div className="w-24 flex-shrink-0 flex flex-col items-center pt-2">
                                            <span className="text-white font-bold text-sm bg-white/10 px-3 py-1 rounded-full whitespace-nowrap">
                                                {slot.time}
                                            </span>
                                            <div className="w-0.5 h-full bg-white/5 mt-2 group-last:hidden"></div>
                                        </div>

                                        {/* Activity Column */}
                                        <div className="flex-1 pb-6 space-y-2">
                                            {slot.classes.map((cls, idx) => (
                                                <div
                                                    key={idx}
                                                    className="bg-brand-surface border border-white/5 p-4 rounded-2xl hover:border-brand-pink/30 hover:bg-white/5 transition-all"
                                                >
                                                    <h3 className={`text-lg font-bold mb-1 ${cls.color || 'text-white'}`}>
                                                        {cls.name}
                                                    </h3>
                                                    <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                                                        {cls.days}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Footer / CTA */}
                        <div className="p-4 border-t border-white/5 bg-black/40 text-center">
                            <p className="text-xs text-gray-500">
                                * Horarios sujetos a cambios. Consulta disponibilidad.
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ScheduleModal;
