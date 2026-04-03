import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function WhatsAppButton() {
    return (
        <a 
            href="https://wa.me/923134382949" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="whatsapp-float"
            aria-label="Contact us on WhatsApp"
        >
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                alt="WhatsApp" 
            />
        </a>
    );
}

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
