import React from 'react';
import { Brain, Database, BarChart3, Cog, Lightbulb, Shield } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Strategy & Consulting',
      description: 'Develop comprehensive AI strategies aligned with your business objectives',
      features: ['Business AI Vision','AI Readiness Assessment', 'AI Strategic Roadmap', 'AI Value Assesment', 'AI Models & Tech Selection', 'AI Team Roles Selection']
    },
    {
      icon: BarChart3,
      title: 'AI Solutions',
      description: 'Custom AI models designed to solve your specific business challenges.',
      features: ['AI Chatbots & Assistants', 'AI Doc Understanding & Summarization', 'AI Agents & Business Automation', 'AI Recommender Systems', 'AI Voice to/from Text', 'AI Natural Language Real-time Analytics' ]
    },
    {
      icon: Database,
      title: 'AI Models & Technology',
      description: 'We are experts in the latest AI models, technologies, tools, and applications ',
      features: ['GPT, Claude, Gemini & LLama Models', 'Prompt Engineering & Metaprompting', 'Model Finetuning, RLHF and RLAIF', 'Huggingface, LM Studio, LangChain', 'AI Workflows: MCP, n8n, ComfyUI' , 'Apple MLX, AWS, Google, Azure AI Stacks']
    },
    {
      icon: Cog,
      title: 'AI Implementation',
      description: 'End-to-end implementation of AI solutions with seamless system integration.',
      features: ['AI Systems Integration', 'LLMOps & MLOps', 'Local/ Cloud AI Model Deployment', 'AI Model Human in The Loop Testing', 'AI Data Labeling & Training Pipelines']
    },
    {
      icon: Lightbulb,
      title: 'AI Innovation',
      description: 'Interactive sessions to identify AI opportunities and foster innovation.',
      features: [ 'AI Event Storming', 'AI Ideation Workshops', 'AI Proof of Concepts', 'AI Training', 'AI Best Practices']
    },
    {
      icon: Shield,
      title: 'AI GRC',
      description: 'Ensure governance, risk & compliance in your AI deployments.',
      features: ['Safe AI', 'AI Bias Detection', 'AI Governance Framework', 'AI Risk & CyberSec', 'AI Compliance Audits']
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-space-cadet to-cool-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-anti-flash-white mb-6">
            Our AI Services
          </h2>
          <p className="text-xl text-cool-gray max-w-3xl mx-auto leading-relaxed">
            End2End AI consulting services designed to accelerate your AI adoption journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-red-pantone rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-space-cadet mb-4">{service.title}</h3>
              <p className="text-cool-gray mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-space-cadet">
                    <div className="w-2 h-2 bg-red-pantone rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-red-pantone hover:bg-fire-engine-red text-anti-flash-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Discuss Your AI Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;