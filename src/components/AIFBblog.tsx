import React, { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp, DollarSign, Shield, Target, Scale, Truck } from 'lucide-react';
import SalesBlogPost from './SalesBlogPost';
import FinanceBlogPost from './FinanceBlogPost';
import InsuranceBlogPost from './InsuranceBlogPost';
import MarketingBlogPost from './MarketingBlogPost';
import LegalBlogPost from './LegalBlogPost';
import LogisticsBlogPost from './LogisticsBlogPost';

const AIFBblog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Add a global event listener for AI blog navigation
  useEffect(() => {
    const handleAIBlogNavigation = (event: CustomEvent) => {
      if (event.detail === 'ai-blog') {
        setSelectedPost(null);
        // Scroll to the AI blog section
        setTimeout(() => {
          const element = document.getElementById('ai-blog');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    };

    window.addEventListener('navigate-to-ai-blog', handleAIBlogNavigation as EventListener);

    return () => {
      window.removeEventListener('navigate-to-ai-blog', handleAIBlogNavigation as EventListener);
    };
  }, []);

  const blogPosts = [
    {
      id: 1,
      icon: TrendingUp,
      title: 'Advanced Prompting Techniques for Sales in Mid-2025',
      summary: 'Discover cutting-edge AI prompting strategies that are revolutionizing sales processes. Learn how to leverage GPT-4, Claude, and Gemini models to automate lead qualification, personalize outreach at scale, and boost conversion rates by up to 40% through intelligent conversation design.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '8 min read',
      category: 'Sales AI'
    },
    {
      id: 2,
      icon: DollarSign,
      title: 'Advanced Prompting Techniques for Finance in Mid-2025',
      summary: 'Master sophisticated AI prompting methods for financial analysis and decision-making. Explore how modern LLMs can transform risk assessment, automate financial reporting, and provide real-time market insights through carefully crafted prompt engineering and retrieval-augmented generation.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '10 min read',
      category: 'Finance AI'
    },
    {
      id: 3,
      icon: Shield,
      title: 'Advanced Prompting Techniques for Insurance in Mid-2025',
      summary: 'Unlock the power of AI prompting for insurance operations and customer service. Learn advanced techniques for claims processing automation, risk assessment optimization, and personalized policy recommendations using state-of-the-art language models and prompt optimization strategies.',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '9 min read',
      category: 'Insurance AI'
    },
    {
      id: 4,
      icon: Target,
      title: 'Advanced Prompting Techniques for Marketing in Mid-2025',
      summary: 'Transform your marketing campaigns with next-generation AI prompting strategies. Discover how to create compelling content at scale, optimize customer segmentation, and drive engagement through intelligent prompt design using the latest multimodal AI capabilities and behavioral analysis.',
      image: 'https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '7 min read',
      category: 'Marketing AI'
    },
    {
      id: 5,
      icon: Scale,
      title: 'Advanced Prompting Techniques for Legal in Mid-2025',
      summary: 'Revolutionize legal practice with sophisticated AI prompting methodologies. Explore advanced techniques for contract analysis, legal research automation, and compliance monitoring using fine-tuned language models, specialized legal prompts, and intelligent document processing workflows.',
      image: 'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '11 min read',
      category: 'Legal AI'
    },
    {
      id: 6,
      icon: Truck,
      title: 'Advanced Prompting Techniques for Logistics in Mid-2025',
      summary: 'Transform logistics and supply chain operations with cutting-edge AI prompting techniques. Learn how to optimize routing, automate exception handling, enhance carrier coordination, and improve supply chain visibility using advanced LLM capabilities and intelligent automation.',
      image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '12 min read',
      category: 'Logistics AI'
    }
  ];

  const handleReadMore = (postId: number) => {
    setSelectedPost(postId);
  };

  const handleBackToBlog = () => {
    setSelectedPost(null);
    // Ensure we navigate back to the blog section
    setTimeout(() => {
      const element = document.getElementById('ai-blog');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // If a post is selected, show the full blog post
  if (selectedPost === 1) {
    return <SalesBlogPost onBack={handleBackToBlog} />;
  }
  
  if (selectedPost === 2) {
    return <FinanceBlogPost onBack={handleBackToBlog} />;
  }

  if (selectedPost === 3) {
    return <InsuranceBlogPost onBack={handleBackToBlog} />;
  }

  if (selectedPost === 4) {
    return <MarketingBlogPost onBack={handleBackToBlog} />;
  }

  if (selectedPost === 5) {
    return <LegalBlogPost onBack={handleBackToBlog} />;
  }

  if (selectedPost === 6) {
    return <LogisticsBlogPost onBack={handleBackToBlog} />;
  }

  return (
    <section id="ai-blog" className="py-20 bg-gradient-to-br from-anti-flash-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-space-cadet mb-6">
            AI for Business Blog
          </h2>
          <p className="text-xl text-cool-gray max-w-3xl mx-auto leading-relaxed">
            Insights, strategies, and advanced techniques for implementing AI solutions across different industries, business areas and processes. Stay ahead with the latest AI methods and techniques in real-world applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-pantone text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-white/90 rounded-lg flex items-center justify-center">
                    <post.icon className="h-5 w-5 text-red-pantone" />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-cool-gray text-sm font-medium">{post.readTime}</span>
                  <span className="text-cool-gray text-sm">Mid-2025</span>
                </div>

                <h3 className="text-xl font-bold text-space-cadet mb-4 leading-tight group-hover:text-red-pantone transition-colors duration-200">
                  {post.title}
                </h3>

                <p className="text-cool-gray mb-6 leading-relaxed line-clamp-4">
                  {post.summary}
                </p>

                <button
                  onClick={() => handleReadMore(post.id)}
                  className="group/btn w-full bg-space-cadet hover:bg-red-pantone text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-space-cadet to-cool-gray rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-anti-flash-white mb-6">
              Want More AI Business Insights?
            </h3>
            <p className="text-xl text-cool-gray mb-8 max-w-2xl mx-auto">
              Subscribe to our Data Machina AI Newsletter for weekly updates on the latest AI techniques, tools, and business applications.
            </p>
            <button
              onClick={() => scrollToSection('newsletter')}
              className="bg-red-pantone hover:bg-fire-engine-red text-anti-flash-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFBblog;