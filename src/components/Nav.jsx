import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../hooks/LanguageContext';
import { Menu, X } from 'lucide-react';

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { lang, toggleLang, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav 
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="container nav-container">
                <div className="logo">AHMAD <span>HASSAN</span></div>
                
                <div className="nav-links">
                    <a href="#about">{t('nav-about')}</a>
                    <a href="#services">{t('nav-services')}</a>
                    <a href="#portfolio">{t('nav-portfolio')}</a>
                    <button className="lang-switch" onClick={toggleLang} aria-label="Toggle language">
                        <span className={lang === 'en' ? 'active' : ''}>ENG</span>
                        <span className={lang === 'zh' ? 'active' : ''}>中文</span>
                    </button>
                    <a href="#contact" className="btn btn-primary">{t('nav-contact')}</a>
                </div>

                <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
                
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div 
                            className="mobile-menu active"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <button className="lang-switch" style={{ marginBottom: '2rem', transform: 'scale(1.2)' }} onClick={toggleLang}>
                                <span className={lang === 'en' ? 'active' : ''}>ENG</span>
                                <span className={lang === 'zh' ? 'active' : ''}>中文</span>
                            </button>
                            <a href="#about" className="mobile-link" onClick={() => setMenuOpen(false)}>{t('nav-about')}</a>
                            <a href="#services" className="mobile-link" onClick={() => setMenuOpen(false)}>{t('nav-services')}</a>
                            <a href="#portfolio" className="mobile-link" onClick={() => setMenuOpen(false)}>{t('nav-portfolio')}</a>
                            <a href="#contact" className="btn btn-primary mt-4" onClick={() => setMenuOpen(false)}>{t('nav-contact')}</a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}
