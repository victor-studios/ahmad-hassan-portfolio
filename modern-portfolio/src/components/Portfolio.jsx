import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../hooks/LanguageContext';

export default function Portfolio() {
    const { t } = useLanguage();

    const items = [
        {
            key: '1',
            img: "https://images.unsplash.com/photo-1503376760367-11ea8eb22247?q=80&w=800&auto=format&fit=crop"
        },
        {
            key: '2',
            img: "https://images.unsplash.com/photo-1621217319985-2c8c4a00bcbb?q=80&w=800&auto=format&fit=crop"
        },
        {
            key: '3',
            img: "https://images.unsplash.com/photo-1593941707882-a5bba14938cb?q=80&w=800&auto=format&fit=crop"
        },
        {
            key: '4',
            img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop"
        }
    ];

    return (
        <section className="section-padding" id="portfolio">
            <div className="container">
                <motion.div 
                    className="text-center mb-5"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">{t('port-title')}</h2>
                    <p className="section-subtitle">{t('port-subtitle')}</p>
                </motion.div>

                <div className="portfolio-grid">
                    {items.map((item, idx) => (
                        <motion.div 
                            key={idx} 
                            className="glass-card portfolio-card"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                        >
                            <div className="portfolio-image">
                                <img src={item.img} alt={t(`port-${item.key}-title`)} />
                                <div className="portfolio-overlay">
                                    <span className="portfolio-category">{t(`port-${item.key}-cat`)}</span>
                                </div>
                            </div>
                            <div className="portfolio-content">
                                <h3>{t(`port-${item.key}-title`)}</h3>
                                <p>{t(`port-${item.key}-desc`)}</p>
                                <div className="portfolio-details">
                                    <p><strong>{t(`port-${item.key}-val`)}:</strong> {t(`port-${item.key}-val-num`)}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
