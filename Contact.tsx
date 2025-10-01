import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'services@ai00.ai',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+44 7444 *** ***',
      description: 'Mon-Fri from 9am-6pm'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'London SE1 7AB, UK',
      description: 'Come to our office, say Hi'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-space-cadet to-cool-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-anti-flash-white mb-6">
            Contact Us to Discuss Your AI Project
          </h2>
          <p className="text-xl text-cool-gray max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with AI? Let's discuss how we can help you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-anti-flash-white mb-8">Book a FREE AI Discovery Session</h3>
            <p className="text-cool-gray mb-8 text-lg leading-relaxed">
              Whether you're looking to implement your first AI solution or scale existing capabilities, 
              our team is here to guide you through every step of your AI journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-pantone rounded-lg flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-anti-flash-white font-semibold text-2xl mb-2">{info.title}</h4>
                <p className="text-red-pantone font-medium text-xl mb-2">{info.details}</p>
                <p className="text-cool-gray text-lg">{info.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 rounded-xl backdrop-blur-sm p-8 text-center">
            <h4 className="text-red-pantone font-semibold text-3xl mb-6">Why Work With Us?</h4>
            <div className="max-w-4xl mx-auto">
              <ul className="space-y-3 text-anti-flash-white text-left">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-pantone rounded-full mr-3"></div>
                  Free initial AI discovery workshop
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-pantone rounded-full mr-3"></div>
                  Custom AI solutions tailored to your business
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-pantone rounded-full mr-3"></div>
                  Deep expertise in the latest AI models, technologies & tools
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-pantone rounded-full mr-3"></div>
                  +20 years of a proven track record and success across industries
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;