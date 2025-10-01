import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import AIUsecases from './components/AIUsecases';
import AIFBblog from './components/AIFBblog';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-roboto">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <AIUsecases />
      <AIFBblog />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;