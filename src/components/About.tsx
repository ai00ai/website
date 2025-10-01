import React from 'react';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, value: '88+', label: 'Projects Delivered' },
    { icon: Award, value: '90%', label: 'Success Rate' },
    { icon: TrendingUp, value: '30-40%', label: 'Average ROI' },
    { icon: Target, value: '20+', label: 'Industries' },
  ];

  return (
    <section id="about" className="py-20 bg-anti-flash-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-space-cadet mb-6">
            About AI 00
          </h2>
          <p className="text-xl text-cool-gray max-w-3xl mx-auto leading-relaxed">
            We are an experienced team of engineers, developers, and business consultants with deep expertise in developing leading-edge AI & ML solutions for business applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold text-space-cadet mb-6">Our Mission: To deliver business value with AI solutions</h3>
            <p className="text-lg text-cool-gray mb-6 leading-relaxed">
              At AI 00, we believe that AI should be practical, and transformative for businesses of all sizes. Our mission is to bridge the gap between cutting-edge AI technology and real-world business applications.
            </p>
            <p className="text-lg text-cool-gray leading-relaxed">
              We work closely with our clients to understand their unique business challenges, and develop custom AI solutions that drive business value, enhance efficiency, and create competitive advantages.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all duration-300">
                <stat.icon className="h-8 w-8 text-red-pantone mx-auto mb-3" />
                <div className="text-3xl font-bold text-space-cadet mb-2">{stat.value}</div>
                <div className="text-cool-gray font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-space-cadet rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-anti-flash-white mb-6">Why Choose AI 00 ?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-pantone rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-anti-flash-white mb-3">Deep AI Expertise</h4>
              <p className="text-cool-gray">Deep technical AI expertise and experience in the latest AI & ML models, technologies, and tools.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-pantone rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-anti-flash-white mb-3">Real-World AI </h4>
              <p className="text-cool-gray">Extensive experience in more than 20+ industries across multiple business areas and processes.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-pantone rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-anti-flash-white mb-3">AI Business Value</h4>
              <p className="text-cool-gray">Proven track record of delivering measurable business value through AI solutions implementation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;