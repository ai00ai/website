import React from 'react';
import { Mail, TrendingUp, Lightbulb, Zap, Globe } from 'lucide-react';

const Newsletter: React.FC = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'AI Insights',
      description: 'Latest trends in AI models, technology, and tools'
    },
    {
      icon: Lightbulb,
      title: 'AI Development & AI Engineering ',
      description: 'A review of AI projects, repos and coding'
    },
    {
      icon: Zap,
      title: 'AI Papers',
      description: 'A review of the most trending AI research papers'
    },
    {
      icon: Globe,
      title: 'AI in The Real World',
      description: 'Real-world success stories and implementation examples'
    }
  ];

  return (
    <section id="newsletter" className="py-20 bg-anti-flash-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-space-cadet to-cool-gray rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Mail className="h-8 w-8 text-red-pantone mr-3" />
                <span className="text-cool-gray font-medium text-lg">Stay informed about the latest in AI</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-anti-flash-white mb-6">
                Data Machina AI Newsletter
              </h2>
              
              <p className="text-xl text-cool-gray mb-8 leading-relaxed">
                Join +20,500 professionals who subscribe to our weekly newsletter packed with AI insights, and the latest on AI technologies, tools and research.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <benefit.icon className="h-6 w-6 text-red-pantone mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-anti-flash-white font-semibold mb-1">{benefit.title}</h4>
                      <p className="text-cool-gray">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg flex items-center justify-center">
              <iframe 
                src="https://datamachina.substack.com/embed" 
                width="480" 
                height="320" 
                style={{border: '1px solid #EEE', background: 'white'}} 
                frameBorder="0" 
                scrolling="no"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;