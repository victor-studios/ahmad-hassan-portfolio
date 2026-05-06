import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import '../floating.css';

function ContactFloating() {
    const [isOpen, setIsOpen] = useState(false);
    const [showQR, setShowQR] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const openWhatsApp = () => {
        window.open("https://wa.me/923134382949", "_blank");
        setIsOpen(false);
    };

    const openWeChat = () => {
        setShowQR(true);
        setIsOpen(false);
    };

    const closeQR = () => {
        setShowQR(false);
    };

    return (
        <>
            {/* Floating Button and Menu */}
            <div className="contact-floating-container">
                {isOpen && (
                    <div className="contact-menu">
                        <button onClick={openWeChat} className="contact-menu-item wechat-btn">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/WeChat_logo.svg" alt="WeChat" className="contact-icon-small" />
                            <span>WeChat</span>
                        </button>
                        <button onClick={openWhatsApp} className="contact-menu-item whatsapp-btn">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="contact-icon-small" />
                            <span>WhatsApp</span>
                        </button>
                    </div>
                )}
                
                <button 
                    onClick={toggleMenu}
                    className={`contact-float-btn ${isOpen ? 'active' : ''}`}
                    aria-label="Contact Options"
                >
                    {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
                </button>
            </div>

            {/* WeChat QR Modal */}
            {showQR && (
                <div className="modal-overlay" onClick={closeQR}>
                    <div className="modal-content qr-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeQR}>
                            <X size={20} />
                        </button>
                        <div className="text-center">
                            <h3 style={{ paddingRight: 0 }}>Add me on WeChat</h3>
                            <div className="qr-image-container" style={{ margin: '2rem auto', maxWidth: '350px' }}>
                                {/* Placeholder for user's uploaded image */}
                                <img src="/wechat-qr.png" alt="WeChat QR Code" style={{ width: '100%', borderRadius: '12px' }} />
                            </div>
                            <p className="text-muted">Please save your provided QR code image as "wechat-qr.png" in the public folder to display it here.</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ContactFloating;
