import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import ContactFloating from './components/ContactFloating';

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Footer />
      <ContactFloating />
    </>
  );
}

export default App;
