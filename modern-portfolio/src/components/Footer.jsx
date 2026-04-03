import React from 'react';
import { useLanguage } from '../hooks/LanguageContext';
import { Globe, Mail, Phone } from 'lucide-react';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="glass-card footer-cta">
                    <h2>{t('footer-title')}</h2>
                    <a href="mailto:ahmad@example.com" className="btn btn-primary">
                        {t('footer-btn')}
                    </a>
                </div>
                
                <div className="footer-bottom">
                    <div className="logo">AHMAD <span>HASSAN</span> Adv.</div>
                    <div className="social-links">
                        <a href="#" className="social-icon"><Globe size={20} /></a>
                        <a href="#" className="social-icon"><Mail size={20} /></a>
                        <a href="#" className="social-icon"><Phone size={20} /></a>
                    </div>
                </div>
                
                <div className="copyright text-center">
                    {t('footer-copy')}
                </div>
            </div>
        </footer>
    );
}
