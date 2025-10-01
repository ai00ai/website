import React, { useState } from 'react';
import { Building2, ShoppingCart, Heart, Briefcase, Factory, GraduationCap, TrendingUp, Users, DollarSign, ChevronDown, ChevronUp, Truck, Car, Wheat, Scale } from 'lucide-react';

const AIUsecases: React.FC = () => {
  const [expandedIndustry, setExpandedIndustry] = useState<number | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const industries = [
    {
      icon: Briefcase,
      name: 'Banking & Financial Services',
      description: 'AI solutions for fraud detection, credit risk assessment, and personalized investment advisory',
      useCases: [
        {
          title: 'Fraud Detection and Prevention',
          company: 'Large European multinational bank with 45 million customers across 40 countries',
          challenge: 'The bank was experiencing €50M+ annual losses due to fraudulent transactions, with traditional rule-based systems generating excessive false positives (95% of alerts) and missing sophisticated fraud patterns. Manual review processes were taking 48+ hours, causing customer friction and regulatory compliance issues.',
          solution: 'Deployed a multi-layered fraud detection architecture utilizing GPT-4 Turbo for transaction narrative analysis and behavioral pattern recognition. The system integrates Retrieval-Augmented Generation (RAG) with vector embeddings from OpenAI\'s text-embedding-3-large model to contextualize historical fraud patterns against real-time transactions. A fine-tuned Llama 3.1 70B model processes unstructured transaction metadata, while Anthropic Claude 3.5 Sonnet provides explainable fraud reasoning for regulatory compliance.',
          benefits: [
            '78% reduction in fraud losses (€39M saved annually)',
            '85% decrease in false positives, improving customer experience',
            'Real-time transaction scoring reduced review time from 48 hours to 2 minutes',
            '99.9% transaction processing uptime with regulatory compliance maintained'
          ]
        },
        {
          title: 'Credit Risk Assessment and Underwriting',
          company: 'Leading Nordic bank serving 11 million retail and corporate customers',
          challenge: 'Traditional credit scoring models were excluding 30% of potentially creditworthy applicants while maintaining a 12% default rate. Manual underwriting processes took 5-14 days, creating competitive disadvantage and customer churn. The bank needed to expand lending while reducing risk exposure.',
          solution: 'Architected a comprehensive underwriting platform leveraging Google Gemini Ultra for multi-modal document analysis, processing financial statements, tax returns, and identity documents through advanced OCR and document understanding pipelines. The system employs a fine-tuned Llama 3.1 405B model for alternative credit scoring, ingesting social graph data, utility payment histories, and mobile usage patterns via secure APIs.',
          benefits: [
            '15% increase in loan approval rates while reducing default rates by 25%',
            'Processing time reduced from 5-14 days to 30 minutes for standard applications',
            '€2.1B additional lending volume generated annually',
            '40% reduction in underwriting operational costs'
          ]
        },
        {
          title: 'Personalized Investment Advisory',
          company: 'Swiss private bank managing €180B in assets for high-net-worth clients',
          challenge: 'Providing consistent, personalized investment advice at scale while maintaining human advisor quality. Client portfolios were underperforming benchmarks by 2.3% annually, and manual advisory processes limited advisor capacity to 50 clients each, creating scalability constraints.',
          solution: 'Developed a sophisticated robo-advisory ecosystem utilizing GPT-4 for natural language client interaction and financial goal interpretation. The platform employs Retrieval-Augmented Generation with ChromaDB vector store containing market research, regulatory filings, and economic indicators, enabling contextual investment recommendations.',
          benefits: [
            'Portfolio performance improved by 4.1% annually above benchmark',
            'Advisor productivity increased 300% (from 50 to 200 clients per advisor)',
            'Client satisfaction scores increased by 28%',
            '€45B in new assets under management acquired within 18 months'
          ]
        }
      ]
    },
    {
      icon: Truck,
      name: 'Logistics & Supply Chain',
      description: 'AI-powered demand forecasting, route optimization, and warehouse automation',
      useCases: [
        {
          title: 'Demand Forecasting and Inventory Optimization',
          company: 'Global logistics operator managing 2,500 distribution centers across 60 countries',
          challenge: 'Inventory carrying costs of €1.2B annually with 23% stockout rates during peak seasons. Traditional forecasting methods were 35% inaccurate, leading to excess inventory in some locations and shortages in others. The complexity of managing seasonal variations, promotional impacts, and regional differences was overwhelming existing systems.',
          solution: 'Implemented a next-generation demand forecasting system utilizing Google Gemini Pro for multi-modal data fusion, processing satellite imagery, weather data, economic indicators, and social media sentiment through unified transformer architectures. The core forecasting engine employs fine-tuned Llama 3.1 70B models with temporal attention mechanisms.',
          benefits: [
            '42% improvement in forecast accuracy, reducing stockouts by 67%',
            '€340M reduction in inventory carrying costs',
            '28% improvement in order fulfillment rates',
            '15% reduction in transportation costs through optimized stock positioning'
          ]
        },
        {
          title: 'Route Optimization and Fleet Management',
          company: 'European express delivery company operating 180,000 vehicles across 220 countries',
          challenge: 'Rising fuel costs (€2.8B annually) and increasing delivery volumes with customer expectations for same-day delivery. Traditional route planning was generating suboptimal routes, resulting in 18% empty miles and average delivery delays of 2.3 hours during peak periods.',
          solution: 'Deployed an advanced route optimization platform leveraging GPT-4 Turbo for dynamic constraint handling and multi-objective optimization problem formulation. The system integrates Retrieval-Augmented Generation with real-time traffic APIs, weather services, and customer preference data stored in Weaviate vector database.',
          benefits: [
            '24% reduction in fuel consumption (€672M annual savings)',
            '31% improvement in on-time delivery performance',
            '400,000 tons CO2 emissions reduction annually',
            '19% increase in daily delivery capacity without additional vehicles'
          ]
        },
        {
          title: 'Warehouse Automation and Picking Optimization',
          company: 'Leading UK e-commerce fulfillment provider operating 85 automated warehouses',
          challenge: 'Labor costs representing 65% of warehouse operations (£450M annually) with 12% error rates in order picking. Peak season demand spikes required 40% temporary workforce increases, creating training and quality control challenges. Customer expectations for 2-hour delivery windows demanded operational excellence.',
          solution: 'Architected an intelligent warehouse automation system utilizing Google Gemini Ultra for multi-modal robotic guidance, combining computer vision with natural language task instructions. The platform employs RAG-enhanced planning agents that access warehouse layout optimization knowledge through Pinecone vector embeddings.',
          benefits: [
            '56% reduction in picking errors and 38% faster order processing',
            '£171M annual labor cost savings through automation',
            '99.2% order accuracy achieved consistently',
            '45% improvement in warehouse space utilization'
          ]
        }
      ]
    },
    {
      icon: ShoppingCart,
      name: 'Retail & E-commerce',
      description: 'Personalized customer experiences, dynamic pricing, and supply chain visibility',
      useCases: [
        {
          title: 'Personalized Customer Experience and Recommendation Engines',
          company: 'Pan-European fashion retailer with 4,800 stores and 85M online customers',
          challenge: 'Declining conversion rates (2.1%) and average order values due to generic customer experiences. Product returns were costing €890M annually, while customer lifetime value was decreasing by 15% year-over-year. The company needed to compete with digital-native brands offering superior personalization.',
          solution: 'Developed a comprehensive personalization engine utilizing OpenAI GPT-4 Turbo for customer intent understanding and product description generation. The recommendation system employs hybrid deep learning architectures combining collaborative filtering with content-based approaches, enhanced by fine-tuned Llama 3.1 70B models for fashion compatibility analysis.',
          benefits: [
            '127% increase in conversion rates (from 2.1% to 4.8%)',
            '43% increase in average order value through personalized recommendations',
            '€267M reduction in returns through better size and style matching',
            '31% improvement in customer lifetime value'
          ]
        },
        {
          title: 'Dynamic Pricing and Revenue Optimization',
          company: 'Major European grocery chain with 11,000 stores across 29 countries',
          challenge: 'Competitive pricing pressure reducing margins by 1.2% annually while managing 150,000+ SKUs across different markets. Manual pricing decisions were taking 72 hours to implement, missing market opportunities and causing price wars with competitors. Food waste due to pricing inefficiencies was costing €340M annually.',
          solution: 'Implemented a sophisticated dynamic pricing platform leveraging Google Gemini Pro for competitive intelligence analysis and market sentiment interpretation. The core pricing engine utilizes fine-tuned Llama 3.1 405B models for demand elasticity modeling, processing point-of-sale data, customer behavior patterns, and external market signals.',
          benefits: [
            '2.8% increase in gross margins through optimized pricing strategies',
            '€127M reduction in food waste through intelligent markdown timing',
            '67% faster price adjustment implementation (from 72 hours to 24 hours)',
            '18% improvement in inventory turnover rates'
          ]
        },
        {
          title: 'Supply Chain Visibility and Vendor Management',
          company: 'Global luxury goods conglomerate with 75 brands and 4,500 suppliers worldwide',
          challenge: 'Limited visibility into multi-tier supply chain creating 45-day average lead times and 23% supplier delivery delays. Counterfeit products were causing €180M annual revenue loss and brand damage. Supplier risk assessment was manual and reactive, leading to supply disruptions.',
          solution: 'Architected a comprehensive supply chain visibility platform utilizing GPT-4 Turbo for multi-tier supplier relationship analysis and contract intelligence extraction. The system employs Retrieval-Augmented Generation with Neo4j graph database to map complex supplier networks and identify risk propagation pathways.',
          benefits: [
            '34% reduction in lead times through improved supplier coordination',
            '€156M reduction in counterfeit-related losses through authentication systems',
            '91% improvement in supplier risk prediction accuracy',
            '28% cost reduction in supplier management operations'
          ]
        }
      ]
    },
    {
      icon: Factory,
      name: 'Oil & Gas',
      description: 'Predictive maintenance, seismic analysis, and energy trading optimization',
      useCases: [
        {
          title: 'Predictive Maintenance for Offshore Platforms',
          company: 'Leading UK oil & gas enterprise operating 45 offshore platforms in the North Sea',
          challenge: 'Unplanned equipment failures were causing $120M annual losses through production downtime, with average repair costs of $2.1M per incident. Traditional maintenance schedules were either too conservative (causing unnecessary downtime) or reactive (leading to catastrophic failures). Safety incidents were averaging 12 per year across the platform network.',
          solution: 'Deployed an advanced predictive maintenance ecosystem leveraging Google Gemini Ultra for multi-modal sensor data interpretation and maintenance procedure generation. The platform integrates fine-tuned Llama 3.1 70B models for equipment failure pattern recognition, processing vibration, temperature, pressure, and acoustic sensor streams through transformer-based time series analysis.',
          benefits: [
            '73% reduction in unplanned downtime, saving $87.6M annually',
            '45% reduction in maintenance costs through optimized scheduling',
            'Zero safety incidents related to equipment failure in 18 months',
            '12% increase in overall platform productivity'
          ]
        },
        {
          title: 'Seismic Data Analysis and Exploration Optimization',
          company: 'International oil exploration company with operations across 35 countries',
          challenge: 'Seismic data analysis was taking 6-18 months per survey, with only 15% accuracy in identifying commercially viable reserves. The company was spending $450M annually on exploration with 65% of wells being dry holes. Traditional geological analysis required 50+ specialized geophysicists per major project.',
          solution: 'Implemented a revolutionary seismic interpretation platform utilizing OpenAI GPT-4 Turbo for geological narrative generation and exploration strategy formulation. The core analysis engine employs fine-tuned Vision Transformers and Generative Adversarial Networks (StyleGAN3) for automated seismic facies classification and subsurface structure identification.',
          benefits: [
            '89% reduction in seismic analysis time (from 6-18 months to 3-6 weeks)',
            '67% improvement in reserve identification accuracy',
            '$203M reduction in exploration costs through targeted drilling',
            '78% reduction in dry hole percentage'
          ]
        },
        {
          title: 'Energy Trading and Price Optimization',
          company: 'European integrated energy company trading 850 TWh annually across global markets',
          challenge: 'Energy price volatility was causing $340M annual trading losses due to suboptimal buying and selling decisions. Manual trading processes couldn\'t respond quickly enough to market changes, with average reaction time of 45 minutes to market events. Risk management was reactive rather than predictive.',
          solution: 'Architected a sophisticated algorithmic trading platform leveraging Google Gemini Pro for multi-market analysis and trading strategy synthesis. The system employs fine-tuned Llama 3.1 405B models for price prediction and market regime identification, utilizing transformer architectures with temporal attention mechanisms for high-frequency data processing.',
          benefits: [
            '$278M improvement in trading performance through AI-optimized strategies',
            '94% reduction in reaction time to market events (from 45 minutes to 3 minutes)',
            '42% improvement in risk-adjusted returns',
            '156% increase in trading volume capacity without additional staff'
          ]
        }
      ]
    },
    {
      icon: ShoppingCart,
      name: 'Fast-Moving Consumer Goods',
      description: 'Consumer behavior analytics, demand planning, and marketing optimization',
      useCases: [
        {
          title: 'Consumer Behavior Analytics and Product Innovation',
          company: 'Tier-1 FMCG conglomerate with 400+ brands across 190 countries',
          challenge: 'Product launch failure rate of 75% was costing $890M annually in wasted R&D investment. Traditional market research was taking 6-12 months and missing emerging consumer trends. The company needed to accelerate innovation cycles while improving success rates in an increasingly competitive market.',
          solution: 'Developed a comprehensive consumer insights platform utilizing OpenAI GPT-4 Turbo for social media sentiment analysis and trend pattern recognition across 15+ languages. The system integrates fine-tuned Llama 3.1 70B models for consumer behavior prediction, processing purchase history, demographic data, and lifestyle preferences through advanced embedding techniques.',
          benefits: [
            '58% improvement in product launch success rates',
            '$412M reduction in failed product development costs',
            '67% faster time-to-market for new products (from 18 to 6 months)',
            '34% increase in revenue from new products launched in the past 2 years'
          ]
        },
        {
          title: 'Demand Planning and Production Optimization',
          company: 'Global beverage manufacturer producing 500+ SKUs across 200 production facilities',
          challenge: 'Demand volatility was causing $560M in excess inventory and stockouts annually. Production planning inefficiencies resulted in 23% capacity underutilization during off-peak periods and 15% overtime costs during peak demand. Seasonal and promotional demand spikes were poorly predicted.',
          solution: 'Implemented an advanced demand sensing platform leveraging Google Gemini Ultra for multi-modal data fusion, processing point-of-sale data, weather patterns, economic indicators, and social media trends through unified transformer architectures. The core forecasting engine employs fine-tuned Llama 3.1 405B models with hierarchical attention mechanisms.',
          benefits: [
            '47% improvement in demand forecast accuracy',
            '$264M reduction in inventory costs and stockouts',
            '31% improvement in production efficiency through optimized scheduling',
            '28% reduction in manufacturing costs per unit'
          ]
        },
        {
          title: 'Marketing Mix Optimization and Campaign Performance',
          company: 'European personal care multinational with €24B annual revenue',
          challenge: 'Marketing spend of €2.4B annually was generating declining ROI (3.2:1 compared to industry average of 4.8:1). Attribution modeling across 15+ marketing channels was inaccurate, leading to budget misallocation. Campaign optimization was taking 6-8 weeks, missing time-sensitive opportunities.',
          solution: 'Architected a sophisticated marketing mix optimization platform utilizing OpenAI GPT-4 Turbo for campaign creative generation and multi-channel attribution analysis. The system employs fine-tuned Llama 3.1 70B models for customer lifetime value prediction and behavioral segmentation, processing transaction history, engagement data, and demographic attributes.',
          benefits: [
            '78% improvement in marketing ROI (from 3.2:1 to 5.7:1)',
            '€647M additional revenue attributed to optimized marketing spend',
            '85% reduction in campaign optimization time (from 6-8 weeks to 1 week)',
            '43% improvement in customer acquisition cost efficiency'
          ]
        }
      ]
    },
    {
      icon: Heart,
      name: 'Insurance',
      description: 'Claims processing automation, risk assessment, and customer optimization',
      useCases: [
        {
          title: 'Claims Processing Automation and Fraud Detection',
          company: 'Leading European insurance group covering 95 million customers across 25 countries',
          challenge: 'Claims processing was taking average 21 days with 67% requiring manual review, creating customer dissatisfaction and operational costs of €450M annually. Insurance fraud was costing €280M per year, with traditional detection methods catching only 12% of fraudulent claims. Regulatory compliance required extensive documentation and audit trails.',
          solution: 'Deployed a comprehensive claims automation platform leveraging Google Gemini Ultra for multi-modal damage assessment, processing photographs, videos, and textual descriptions through unified vision-language models. The system integrates fine-tuned Llama 3.1 70B models for fraud detection pattern recognition, analyzing claim narratives, supporting documentation, and historical fraud indicators.',
          benefits: [
            '73% reduction in claims processing time (from 21 to 6 days average)',
            '€189M reduction in operational costs through automation',
            '847% improvement in fraud detection rates (from 12% to 89%)',
            '94% customer satisfaction improvement in claims experience'
          ]
        },
        {
          title: 'Risk Assessment and Underwriting Automation',
          company: 'Global reinsurance company managing €180B in premiums across commercial and specialty lines',
          challenge: 'Underwriting decisions were taking 45-90 days for complex commercial risks, with manual assessment processes limiting growth capacity. Risk pricing accuracy was 68%, leading to €340M in underpricing losses annually. The company needed to expand into new markets while maintaining risk discipline.',
          solution: 'Implemented an advanced underwriting automation platform utilizing OpenAI GPT-4 Turbo for complex risk narrative analysis and underwriting guideline interpretation. The system employs fine-tuned Vision Transformers for satellite imagery analysis, processing property conditions, environmental risks, and geographical hazards through multi-scale feature extraction.',
          benefits: [
            '78% reduction in underwriting time for standard policies (from 45 days to 10 days)',
            '156% improvement in risk pricing accuracy',
            '€267M reduction in underpricing losses through better risk assessment',
            '340% increase in underwriting capacity without proportional staff increases'
          ]
        },
        {
          title: 'Customer Lifetime Value Optimization and Retention',
          company: 'Digital-first insurance startup serving 12 million customers across Europe',
          challenge: 'Customer acquisition costs were 67% higher than industry average while customer lifetime value was 23% below target. Churn rate of 18% annually was costing €89M in lost revenue. Traditional retention programs had only 12% effectiveness in preventing customer defection.',
          solution: 'Architected a comprehensive customer analytics platform leveraging Google Gemini Pro for behavioral pattern recognition and personalized retention strategy generation. The system employs fine-tuned Llama 3.1 405B models for customer lifetime value prediction, processing interaction history, policy changes, and engagement patterns through graph neural networks.',
          benefits: [
            '45% reduction in customer acquisition costs through improved targeting',
            '67% improvement in customer lifetime value through personalized products',
            '78% reduction in churn rate (from 18% to 4% annually)',
            '€156M increase in annual recurring revenue from retention improvements'
          ]
        }
      ]
    },
    {
      icon: GraduationCap,
      name: 'Media & Entertainment',
      description: 'Content recommendation, automated creation, and audience analytics',
      useCases: [
        {
          title: 'Content Recommendation and Personalization',
          company: 'European streaming platform with 45 million subscribers across 28 countries',
          challenge: 'Customer churn rate of 23% annually was costing €340M in lost revenue, with average session time declining 15% year-over-year. Content discovery was poor, with 67% of content catalog receiving less than 1% viewership. Acquisition costs were rising while engagement metrics were declining.',
          solution: 'Deployed an advanced content personalization engine utilizing OpenAI GPT-4 Turbo for content understanding and user preference modeling through natural language analysis of viewing behavior and feedback. The recommendation system employs fine-tuned Llama 3.1 70B models for sequential recommendation with temporal dynamics.',
          benefits: [
            '156% improvement in content discovery and engagement',
            '67% reduction in customer churn rate (from 23% to 8% annually)',
            '89% increase in average session time and content consumption',
            '€278M additional revenue from improved retention and engagement'
          ]
        },
        {
          title: 'Automated Content Creation and Production Optimization',
          company: 'Global news media conglomerate publishing across 15 languages and 40 countries',
          challenge: 'Content production costs of €450M annually with journalist productivity declining due to routine reporting tasks. Breaking news response time averaged 45 minutes, missing viral content opportunities. Translation costs for multilingual content were €67M annually with 72-hour turnaround times.',
          solution: 'Implemented a comprehensive automated content production platform leveraging Google Gemini Ultra for multi-modal content generation, processing text, images, and video through unified transformer architectures. The system employs fine-tuned Llama 3.1 405B models for automated journalism, generating sports reports, financial summaries, and breaking news updates.',
          benefits: [
            '67% reduction in routine content production costs',
            '89% improvement in breaking news response time (from 45 minutes to 5 minutes)',
            '€45M savings in translation costs with real-time multilingual publishing',
            '234% increase in content output without proportional staff increases'
          ]
        },
        {
          title: 'Audience Analytics and Advertising Optimization',
          company: 'Digital advertising network serving 2.8 billion monthly impressions across premium publishers',
          challenge: 'Ad targeting accuracy was 34%, leading to €180M in wasted advertising spend and poor campaign performance. Viewability rates were 67% below industry standards, causing advertiser dissatisfaction. Real-time bidding decisions were suboptimal, resulting in 23% revenue loss compared to theoretical maximum.',
          solution: 'Architected a sophisticated programmatic advertising platform utilizing OpenAI GPT-4 Turbo for audience insight generation and creative optimization through natural language understanding of user intent and contextual relevance. The system employs fine-tuned Llama 3.1 70B models for real-time bidding optimization.',
          benefits: [
            '189% improvement in ad targeting accuracy and campaign performance',
            '€134M recovery in previously wasted advertising spend',
            '78% improvement in viewability rates and advertiser satisfaction',
            '45% increase in programmatic advertising revenue through optimized bidding'
          ]
        }
      ]
    },
    {
      icon: Building2,
      name: 'Hospitality & Tourism',
      description: 'Dynamic pricing, customer experience personalization, and demand forecasting',
      useCases: [
        {
          title: 'Dynamic Pricing and Revenue Management',
          company: 'Multinational hospitality chain operating 7,200 hotels across 134 countries',
          challenge: 'Revenue per available room (RevPAR) was 12% below industry benchmarks due to suboptimal pricing strategies. Manual pricing decisions were taking 48 hours to implement, missing market opportunities. Overbooking and cancellation management was resulting in €89M annual losses from unsold inventory and customer compensation.',
          solution: 'Deployed a comprehensive revenue optimization platform leveraging Google Gemini Pro for multi-market competitive analysis and demand pattern recognition through natural language processing of market intelligence and booking trend analysis. The system employs fine-tuned Llama 3.1 405B models for dynamic pricing with hierarchical demand forecasting.',
          benefits: [
            '23% improvement in RevPAR through optimized pricing strategies',
            '€156M additional revenue from improved inventory management',
            '67% reduction in pricing decision implementation time',
            '45% improvement in occupancy rates during off-peak periods'
          ]
        },
        {
          title: 'Customer Experience Personalization and Service Optimization',
          company: 'Luxury resort chain with 180 properties serving high-net-worth clientele',
          challenge: 'Customer satisfaction scores were declining (7.2/10) due to inconsistent service delivery. Guest complaints were averaging 3.4 per stay, with 23% of issues going unresolved. Repeat customer rate was 34% below target, impacting premium pricing strategy and brand reputation.',
          solution: 'Implemented an intelligent guest experience platform utilizing OpenAI GPT-4 Turbo for personalized service orchestration and guest preference understanding through natural language analysis of feedback and interaction history. The system integrates fine-tuned Llama 3.1 70B models for predictive service delivery.',
          benefits: [
            '89% improvement in customer satisfaction scores (from 7.2 to 9.1/10)',
            '78% reduction in guest complaints through proactive service delivery',
            '67% increase in repeat customer rate and referral business',
            '€45M additional revenue from improved customer loyalty and premium pricing'
          ]
        },
        {
          title: 'Demand Forecasting and Staffing Optimization',
          company: 'European vacation rental platform managing 180,000 properties across 190 countries',
          challenge: 'Seasonal demand volatility was causing 34% staffing inefficiencies, with €67M annual costs from overstaffing during low seasons and service quality issues during peak demand. Property performance was inconsistent, with 45% of listings underperforming market benchmarks.',
          solution: 'Architected a comprehensive demand and workforce optimization platform leveraging Google Gemini Ultra for multi-modal trend analysis, processing booking patterns, local events, weather forecasts, and social media sentiment through unified transformer architectures.',
          benefits: [
            '56% improvement in demand forecast accuracy',
            '€34M reduction in staffing costs through optimized workforce planning',
            '78% improvement in property performance consistency',
            '89% increase in host satisfaction and platform retention'
          ]
        }
      ]
    },
    {
      icon: Car,
      name: 'Transportation & Automotive',
      description: 'Predictive maintenance, autonomous systems, and traffic management',
      useCases: [
        {
          title: 'Predictive Maintenance and Fleet Optimization',
          company: 'Multinational train operator managing 12,000 rail cars across European high-speed network',
          challenge: 'Unplanned maintenance was causing 340 service delays monthly, with €89M annual costs from emergency repairs and passenger compensation. Train utilization was 67% due to conservative maintenance schedules. Safety incidents were averaging 8 per month across the network.',
          solution: 'Implemented IoT sensors across train fleet combined with machine learning for predictive maintenance scheduling. Deployed computer vision for track inspection, vibration analysis for wheel and bearing monitoring, and AI-powered optimization for train scheduling and route planning.',
          benefits: [
            '78% reduction in unplanned maintenance events and service delays',
            '€67M annual savings from optimized maintenance scheduling',
            '34% improvement in fleet utilization through data-driven scheduling',
            'Zero safety incidents related to predictive maintenance in 24 months'
          ]
        },
        {
          title: 'Autonomous Vehicle Development and Safety Systems',
          company: 'German automotive manufacturer developing Level 4 autonomous vehicles',
          challenge: 'Autonomous vehicle testing required 11 billion miles of real-world driving to validate safety, taking 400+ years with current testing capacity. Traditional simulation methods were 34% inaccurate compared to real-world scenarios. Regulatory approval processes demanded comprehensive safety validation.',
          solution: 'Developed advanced simulation environments using generative AI for scenario creation, reinforcement learning for decision-making algorithms, and computer vision for object detection and classification. Implemented digital twin technology for virtual testing and validation.',
          benefits: [
            '10,000x acceleration in testing capacity through simulation',
            '91% improvement in simulation accuracy compared to real-world performance',
            '€1.2B reduction in physical testing costs',
            '67% faster regulatory approval timeline through comprehensive digital validation'
          ]
        },
        {
          title: 'Traffic Management and Smart City Integration',
          company: 'Metropolitan transportation authority managing urban mobility for 8.9 million residents',
          challenge: 'Traffic congestion was costing €450M annually in lost productivity, with average commute times increasing 23% over five years. Public transportation ridership was declining 12% annually. Carbon emissions from transportation were 34% above reduction targets.',
          solution: 'Implemented AI-powered traffic signal optimization, real-time public transportation scheduling, and integrated mobility-as-a-service platform. Combined with predictive analytics for demand forecasting and machine learning for route optimization across multiple transportation modes.',
          benefits: [
            '34% reduction in average commute times through optimized traffic flow',
            '€178M annual productivity gains from reduced congestion',
            '45% increase in public transportation ridership',
            '28% reduction in transportation-related carbon emissions'
          ]
        }
      ]
    },
    {
      icon: Wheat,
      name: 'Agriculture & Food Production',
      description: 'Precision agriculture, livestock management, and supply chain traceability',
      useCases: [
        {
          title: 'Precision Agriculture and Crop Yield Optimization',
          company: 'Agricultural holding group managing 2.3 million hectares across Eastern Europe',
          challenge: 'Crop yields were 23% below theoretical maximum due to suboptimal resource allocation. Fertilizer and pesticide costs of €234M annually were 34% higher than industry benchmarks. Weather-related crop losses were averaging €89M per year across the farming operations.',
          solution: 'Deployed satellite imagery analysis, IoT soil sensors, and machine learning for precision agriculture recommendations. Implemented computer vision for crop health monitoring, predictive analytics for weather risk management, and automated irrigation and fertilization systems.',
          benefits: [
            '31% improvement in crop yields through precision agriculture techniques',
            '€89M reduction in fertilizer and pesticide costs through optimized application',
            '67% reduction in weather-related crop losses through predictive management',
            '45% improvement in water usage efficiency'
          ]
        },
        {
          title: 'Livestock Management and Animal Health Monitoring',
          company: 'Integrated livestock operation managing 450,000 cattle across multiple facilities',
          challenge: 'Animal health monitoring was reactive, with disease outbreaks causing €45M annual losses. Feed conversion efficiency was 18% below optimal, increasing production costs. Manual monitoring of 450,000 animals was labor-intensive and error-prone, missing early health indicators.',
          solution: 'Implemented computer vision for automated animal behavior monitoring, IoT wearables for health tracking, and machine learning for disease prediction and early intervention. Combined with automated feed optimization and breeding program enhancement using genetic algorithms.',
          benefits: [
            '78% reduction in disease-related losses through early detection',
            '€23M improvement in feed conversion efficiency',
            '89% improvement in animal health monitoring accuracy',
            '45% reduction in labor costs for livestock management'
          ]
        },
        {
          title: 'Supply Chain Traceability and Food Safety',
          company: 'Global food processing conglomerate with 340 facilities across 67 countries',
          challenge: 'Food safety incidents were causing €67M annual losses from recalls and brand damage. Supply chain traceability took 3-7 days to track contamination sources, exceeding regulatory requirements. Quality control was catching only 89% of defective products before distribution.',
          solution: 'Implemented blockchain-based traceability system enhanced with AI, computer vision for automated quality inspection, and machine learning for contamination risk prediction. Combined with IoT sensors for real-time monitoring of storage and transportation conditions.',
          benefits: [
            '94% reduction in food safety incidents and recall costs',
            'Real-time traceability capability (from 3-7 days to instant tracking)',
            '99.7% accuracy in automated quality control detection',
            '€34M annual savings from reduced waste and improved quality assurance'
          ]
        }
      ]
    },
    {
      icon: Scale,
      name: 'Legal',
      description: 'Contract review automation, case management, and regulatory compliance monitoring',
      useCases: [
        {
          title: 'Contract Review Automation',
          company: 'Large international law firm with 5,000+ attorneys across 40+ offices globally',
          challenge: 'The firm was spending 60-70% of junior associate time on contract review and due diligence processes, with attorneys manually reviewing thousands of documents for each M&A transaction. This created bottlenecks, high labor costs ($300-500/hour for routine work), inconsistent review quality, and client dissatisfaction with slow turnaround times. Partners estimated losing $2M+ annually in potential deals due to review delays.',
          solution: 'Implemented a comprehensive AI-powered contract intelligence platform combining multiple LLM technologies to automate and enhance the contract review process. The solution leveraged Large Language Models (LLMs) with fine-tuned GPT-4 and Claude models trained on legal contract language to understand complex legal terminology and relationships. A RAG (Retrieval-Augmented Generation) system was built using a knowledge base of 50,000+ precedent contracts and legal clauses to provide contextual recommendations during review.',
          benefits: [
            '75% reduction in contract review time (from 40 hours to 10 hours per contract set)',
            '85% improvement in accuracy for identifying key terms and risks',
            '$15M annual cost savings through improved efficiency',
            '40% increase in deal closure rate due to faster turnaround',
            'Junior associates redeployed to higher-value strategic work'
          ]
        },
        {
          title: 'Case Management & Research',
          company: 'Regional personal injury law firm with 45 attorneys across 3 offices, handling 2,000+ active cases',
          challenge: 'Attorneys were overwhelmed with case research, spending 15-20 hours per week manually searching through legal databases, court records, and case precedents. The firm struggled with inconsistent case strategy development, missed filing deadlines, and difficulty identifying the strongest precedents for settlement negotiations. Client communication was also fragmented, leading to dissatisfaction and potential malpractice exposure.',
          solution: 'Deployed an integrated AI case management system that automates legal research, case analysis, and client communication workflows. The system utilized Legal Research AI Agents that autonomously monitor case law databases, court filings, and regulatory changes relevant to active cases. A RAG-Powered Case Analysis system was built with a vector database containing 100,000+ personal injury cases, expert testimonies, and medical literature for instant precedent matching.',
          benefits: [
            '60% reduction in legal research time per case',
            '90% improvement in deadline tracking and compliance',
            '35% increase in average settlement amounts through better precedent identification',
            '50% improvement in client satisfaction scores',
            '95% reduction in missed filing deadlines'
          ]
        },
        {
          title: 'Regulatory Compliance Monitoring',
          company: 'Fortune 500 financial services company with 200-person in-house legal team managing compliance across 15 countries',
          challenge: 'The legal team was struggling to monitor constantly evolving regulatory requirements across multiple jurisdictions, leading to compliance gaps and reactive responses to regulatory changes. Manual monitoring of regulatory updates was consuming 30% of senior counsel time, while the company faced $50M+ in regulatory fines over three years due to delayed compliance responses and missed regulatory filing requirements.',
          solution: 'Implemented an AI-powered regulatory intelligence and compliance automation platform that proactively monitors, analyzes, and responds to regulatory changes. The platform featured a Multi-Source RAG System with continuous ingestion and analysis of regulatory documents from 50+ global regulatory bodies, enabling semantic search across regulatory texts. Regulatory Change Detection Agents monitored regulatory websites, legal databases, and government publications for updates relevant to the company\'s business lines.',
          benefits: [
            '80% reduction in time spent on regulatory monitoring',
            '95% improvement in early detection of relevant regulatory changes',
            '$25M reduction in annual compliance costs',
            'Zero regulatory fines in the 18 months post-implementation',
            '70% faster response time to new regulatory requirements'
          ]
        }
      ]
    }
  ];

  const stats = [
    { icon: TrendingUp, value: '88+', label: 'AI Projects Delivered' },
    { icon: Users, value: '11+', label: 'Industries Served' },
    { icon: DollarSign, value: '30-40%', label: 'Average ROI Increase' }
  ];

  const toggleIndustry = (index: number) => {
    setExpandedIndustry(expandedIndustry === index ? null : index);
  };

  return (
    <section id="ai-cases" className="py-20 bg-anti-flash-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-space-cadet mb-6">
            AI Success Business Cases
          </h2>
          <p className="text-xl text-cool-gray max-w-3xl mx-auto leading-relaxed">
            Real-world AI implementations across 11+ industries, delivering measurable business value and competitive advantages through cutting-edge AI technologies.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all duration-300">
              <stat.icon className="h-12 w-12 text-red-pantone mx-auto mb-4" />
              <div className="text-4xl font-bold text-space-cadet mb-2">{stat.value}</div>
              <div className="text-cool-gray font-medium text-lg">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Industries Section */}
        <div className="space-y-6">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div 
                className="p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleIndustry(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-red-pantone rounded-lg flex items-center justify-center mr-4">
                      <industry.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-space-cadet">{industry.name}</h3>
                      <p className="text-cool-gray">{industry.description}</p>
                    </div>
                  </div>
                  {expandedIndustry === index ? (
                    <ChevronUp className="h-6 w-6 text-cool-gray" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-cool-gray" />
                  )}
                </div>
              </div>

              {expandedIndustry === index && (
                <div className="px-6 pb-6">
                  <div className="grid gap-6">
                    {industry.useCases.map((useCase, useCaseIndex) => (
                      <div key={useCaseIndex} className="bg-gray-50 rounded-lg p-6">
                        <h4 className="text-xl font-bold text-space-cadet mb-3">{useCase.title}</h4>
                        <p className="text-red-pantone font-medium mb-3">{useCase.company}</p>
                        
                        <div className="mb-4">
                          <h5 className="font-semibold text-space-cadet mb-2">Business Challenge:</h5>
                          <p className="text-cool-gray leading-relaxed">{useCase.challenge}</p>
                        </div>

                        <div className="mb-4">
                          <h5 className="font-semibold text-space-cadet mb-2">AI Solution:</h5>
                          <p className="text-cool-gray leading-relaxed">{useCase.solution}</p>
                        </div>

                        <div>
                          <h5 className="font-semibold text-space-cadet mb-2">Key Results:</h5>
                          <ul className="grid md:grid-cols-2 gap-2">
                            {useCase.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-start text-space-cadet">
                                <div className="w-2 h-2 bg-red-pantone rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                <span className="leading-relaxed">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-space-cadet to-cool-gray rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-anti-flash-white mb-6">
              Ready to Create Your AI Success Story?
            </h3>
            <p className="text-xl text-cool-gray mb-8 max-w-2xl mx-auto">
              Join the growing number of businesses leveraging cutting-edge AI technologies to drive innovation and growth. Let's discuss how we can help you achieve similar transformational results.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-red-pantone hover:bg-fire-engine-red text-anti-flash-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Start Your AI Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIUsecases;