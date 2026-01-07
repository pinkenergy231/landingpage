import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Classes from '../components/Classes';
import About from '../components/About';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="bg-brand-dark min-h-screen text-white font-sans selection:bg-brand-pink selection:text-white">
            <Navbar />
            <Hero />
            <Classes />
            <About />
            <Footer />
        </div>
    );
};

export default Home;
