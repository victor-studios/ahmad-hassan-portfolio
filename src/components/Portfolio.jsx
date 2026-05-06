import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Portfolio() {
    const { t } = useLanguage();
    const sliderRef = useRef(null);

    const items = [
        {
            key: '1',
            img: "/portfolio-changan.png"
        },
        {
            key: '2',
            img: "/portfolio-dayi.png"
        },
        {
            key: '3',
            img: "/portfolio-nalibat.png"
        },
        {
            key: '4',
            img: "/portfolio-china-booster.png"
        },
        {
            key: '5',
            img: "/portfolio-petrolor.png"
        }
    ];

    // Auto-scroll logic
    useEffect(() => {
        const interval = setInterval(() => {
            if (sliderRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
                // Add a small buffer of 10px to account for rounding errors
                if (scrollLeft + clientWidth >= scrollWidth - 10) {
                    sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    // This generally triggers a snap to the next element
                    sliderRef.current.scrollBy({ left: 450, behavior: 'smooth' });
                }
            }
        }, 4000); // 4 seconds

        return () => clearInterval(interval);
    }, []);

    const slide = (dir) => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: dir === 'left' ? -450 : 450, behavior: 'smooth' });
        }
    };

    return (
        <section className="section-padding" id="portfolio">
            <div className="container" style={{ position: 'relative' }}>
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

                {/* Slider Controls */}
                <button 
                    onClick={() => slide('left')} 
                    style={{ 
                        position: 'absolute', left: '-10px', top: '55%', transform: 'translateY(-50%)', 
                        zIndex: 10, background: 'rgba(5,6,8,0.9)', border: '1px solid var(--accent-gold)', 
                        color: 'var(--accent-gold)', borderRadius: '50%', width: '55px', height: '55px', 
                        display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.5)', transition: '0.3s all'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-gold)'; e.currentTarget.style.color = 'var(--bg-dark)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(5,6,8,0.9)'; e.currentTarget.style.color = 'var(--accent-gold)'; }}
                >
                    <ChevronLeft size={30} />
                </button>

                <button 
                    onClick={() => slide('right')} 
                    style={{ 
                        position: 'absolute', right: '-10px', top: '55%', transform: 'translateY(-50%)', 
                        zIndex: 10, background: 'rgba(5,6,8,0.9)', border: '1px solid var(--accent-gold)', 
                        color: 'var(--accent-gold)', borderRadius: '50%', width: '55px', height: '55px', 
                        display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.5)', transition: '0.3s all'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-gold)'; e.currentTarget.style.color = 'var(--bg-dark)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(5,6,8,0.9)'; e.currentTarget.style.color = 'var(--accent-gold)'; }}
                >
                    <ChevronRight size={30} />
                </button>

                <div className="portfolio-grid" ref={sliderRef}>
                    {items.map((item, idx) => (
                        <motion.div 
                            key={idx} 
                            className="glass-card portfolio-card"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0 }}
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
