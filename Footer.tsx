import React from 'react';
import { Brain, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'AI Blog', id: 'ai-blog' },
    { label: 'Newsletter', id: 'newsletter' },
    { label: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/alg0agent?lang=en-GB', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="bg-space-cadet text-anti-flash-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Brain className="h-8 w-8 text-red-pantone" />
              <span className="text-2xl font-bold">AI 00</span>
            </div>
            <p className="text-cool-gray mb-6 leading-relaxed max-w-md">
              Transforming businesses through innovative AI solutions. We help organizations harness the power of AI to drive growth and innovation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-cool-gray/20 rounded-lg flex items-center justify-center hover:bg-red-pantone transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-cool-gray hover:text-red-pantone transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-red-pantone mr-3" />
                <span className="text-cool-gray">services@ai00.ai</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-red-pantone mr-3" />
                <span className="text-cool-gray">+44 7444 ******</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-red-pantone mr-3" />
                <span className="text-cool-gray">London, UK</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cool-gray/20 mt-12 pt-8 text-center">
          <p className="text-cool-gray">
            © 2025 AI 00. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;