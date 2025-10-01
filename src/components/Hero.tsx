import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-space-cadet via-space-cadet to-cool-gray flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-pantone rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-fire-engine-red rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-red-pantone rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-8 w-8 text-red-pantone mr-3" />
            <span className="text-cool-gray font-medium text-lg">AI Consulting Excellence and AI Business Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-anti-flash-white mb-6 leading-tight">
            Transform Your Business with
            <span className="text-red-pantone block mt-2">Artificial Intelligence</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-cool-gray mb-8 max-w-3xl mx-auto leading-relaxed">
            We help organizations leverage the power of AI to drive innovation, optimize operations, and unlock growth opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('services')}
              className="group bg-red-pantone hover:bg-fire-engine-red text-anti-flash-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center"
            >
              Explore Our AI Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-anti-flash-white text-anti-flash-white hover:bg-anti-flash-white hover:text-space-cadet px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-anti-flash-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-anti-flash-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;