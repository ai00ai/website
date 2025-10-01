import React, { useEffect } from 'react';
import { ArrowLeft, Clock, User, Calendar, Scale } from 'lucide-react';

interface LegalBlogPostProps {
  onBack: () => void;
}

const LegalBlogPost: React.FC<LegalBlogPostProps> = ({ onBack }) => {
  useEffect(() => {
    // Scroll to the top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleScheduleConsultation = () => {
    // First go back to the main page
    onBack();
    // Then scroll to contact section after a brief delay to ensure the page has loaded
    setTimeout(() => {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-anti-flash-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-space-cadet to-cool-gray py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center text-anti-flash-white hover:text-red-pantone transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to AI Blog
          </button>
          
          <div className="flex items-center space-x-4 mb-4">
            <span className="bg-red-pantone text-white px-3 py-1 rounded-full text-sm font-medium">
              Legal AI
            </span>
            <div className="flex items-center text-cool-gray">
              <Calendar className="h-4 w-4 mr-1" />
              <span className="text-sm">Mid-2025</span>
            </div>
            <div className="flex items-center text-cool-gray">
              <Clock className="h-4 w-4 mr-1" />
              <span className="text-sm">11 min read</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-anti-flash-white mb-4 leading-tight">
            Advanced Prompting Techniques for Legal Services in Mid-2025
          </h1>
          
          <div className="flex items-center text-cool-gray">
            <User className="h-4 w-4 mr-2" />
            <span>AI 00 Research Team</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-cool-gray leading-relaxed mb-8">
              In 2025, the legal industry has entered a new phase of intelligent automation, powered by Large Language Models (LLMs) such as GPT-4o, Claude 3, and Gemini 1.5. These models are no longer just tools for basic legal summarization or document drafting. Instead, they are deeply integrated into workflows across litigation, compliance, contract review, eDiscovery, intellectual property, and legal research. At the heart of this integration lies advanced prompt engineering: the strategic design of prompts that extract precise, contextually relevant, and legally sound outputs.
            </p>

            <p className="text-lg text-cool-gray leading-relaxed mb-8">
              This post presents ten advanced prompting techniques transforming legal services in mid-2025. Each includes technical implementation, real-world examples, and the key advantages for legal professionals.
            </p>

            <h2 className="text-3xl font-bold text-space-cadet mb-6 mt-12">
              1. Chain-of-Thought Prompting for Legal Reasoning
            </h2>

            <p className="text-lg text-cool-gray leading-relaxed mb-6">
              <strong>Technique:</strong> Encourage LLMs to walk through complex legal arguments step-by-step to increase interpretability and logical accuracy.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-lg text-space-cadet font-semibold mb-4">Example:</p>
              <pre className="text-sm text-space-cadet whitespace-pre-wrap font-mono">
{`Case Summary:
- Defendant accused of breach of contract
- Contract Clause: "Delivery must occur within 30 days"
- Delivery occurred on day 34

Prompt:
"Evaluate whether this constitutes a material breach. Explain your reasoning in steps."`}
              </pre>
            </div>

            <div className="bg-red-pantone/10 border-l-4 border-red-pantone p-6 mb-8">
              <p className="text-lg text-space-cadet font-semibold mb-2">Benefits:</p>
              <ul className="list-disc pl-6 space-y-1 text-lg text-cool-gray">
                <li>Enhances transparency in argumentation</li>
                <li>Useful for legal research memos and case assessments</li>
                <li>Reduces reliance on opaque model outputs</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-space-cadet mb-6 mt-12">
              2. RAG-Enhanced Case Law Search
            </h2>

            <p className="text-lg text-cool-gray leading-relaxed mb-6">
              <strong>Technique:</strong> Combine Retrieval-Augmented Generation (RAG) with prompt tuning to provide contextual legal precedent discovery.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-lg text-space-cadet font-semibold mb-4">Example:</p>
              <pre className="text-sm text-space-cadet whitespace-pre-wrap font-mono">
{`query = "Is a delivery delay of four days a material breach under New York contract law?"
docs = vector_store.similarity_search(query)
prompt = f"Using these cases:\\n{docs}\\n\\nSummarize how courts have ruled on similar delivery delays."`}
              </pre>
            </div>

            <div className="bg-red-pantone/10 border-l-4 border-red-pantone p-6 mb-8">
              <p className="text-lg text-space-cadet font-semibold mb-2">Benefits:</p>
              <ul className="list-disc pl-6 space-y-1 text-lg text-cool-gray">
                <li>Improves legal accuracy</li>
                <li>Supports research with real citations</li>
                <li>Reduces hallucination risk</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-space-cadet mb-6 mt-12">
              3. Few-Shot Legal Document Classification
            </h2>

            <p className="text-lg text-cool-gray leading-relaxed mb-6">
              <strong>Technique:</strong> Use exemplars to guide the LLM in classifying legal documents such as NDAs, MSAs, pleadings, or discovery materials.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-lg text-space-cadet font-semibold mb-4">Example:</p>
              <pre className="text-sm text-space-cadet whitespace-pre-wrap font-mono">
{`Examples:
1. "This agreement prohibits the disclosure of confidential information" -> NDA
2. "This is a motion to dismiss under Rule 12(b)(6)" -> Pleading
3. "This document outlines terms of software licensing" -> MSA

Prompt:
"Classify this document: 'The undersigned party agrees to limit the use of proprietary data to internal analysis only.'"`}
              </pre>
            </div>

            <div className="bg-red-pantone/10 border-l-4 border-red-pantone p-6 mb-8">
              <p className="text-lg text-space-cadet font-semibold mb-2">Benefits:</p>
              <ul className="list-disc pl-6 space-y-1 text-lg text-cool-gray">
                <li>Accelerates document triage</li>
                <li>Reduces human review for routine classifications</li>
                <li>Enables automated tagging in DMS platforms</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-space-cadet mb-6 mt-12">
              4. Multimodal Prompting for Evidence Review
            </h2>

            <p className="text-lg text-cool-gray leading-relaxed mb-6">
              <strong>Technique:</strong> Combine image, video, or audio inputs with legal prompts for eDiscovery or trial preparation.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-lg text-space-cadet font-semibold mb-4">Example:</p>
              <pre className="text-sm text-space-cadet whitespace-pre-wrap font-mono">
{`Prompt:
"Review this CCTV image. Does it corroborate the witness testimony stating the suspect entered the premises at 9:43 PM?"
![cctv_image.jpg]`}
              </pre>
            </div>

            <div className="bg-red-pantone/10 border-l-4 border-red-pantone p-6 mb-8">
              <p className="text-lg text-space-cadet font-semibold mb-2">Benefits:</p>
              <ul className="list-disc pl-6 space-y-1 text-lg text-cool-gray">
                <li>Enables AI-assisted visual deposition reviews</li>
                <li>Speeds up eDiscovery workflows</li>
                <li>Supports case-building with multimedia evidence</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-space-cadet mb-6 mt-12">
              5. Prompt Chaining for Contract Lifecycle Automation
            </h2>

            <p className="text-lg text-cool-gray leading-relaxed mb-6">
              <strong>Technique:</strong> Chain prompts to review, revise, and summarize contracts in multiple stages.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-lg text-space-cadet font-semibold mb-4">Example:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-lg text-cool-gray">
                <li>Step 1: Identify indemnification clauses</li>
                <li>Step 2: Evaluate if language favors client</li>
                <li>Step 3: Suggest redlines for negotiation</li>
              </ul>
            </div>

            <div className="bg-red-pantone/10 border-l-4 border-red-pantone p-6 mb-8">
              <p className="text-lg text-space-cadet font-semibold mb-2">Benefits:</p>
              <ul className="list-disc pl-6 space-y-1 text-lg text-cool-gray">
                <li>Automates redlining workflows</li>
                <li>Reduces bottlenecks in contract negotiations</li>
                <li>Supports CLM (Contract Lifecycle Management) platforms</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-space-cadet mb-6 mt-12">
              6. Persona-Driven Legal Chat Agents
            </h2>

            <p className="text-lg text-cool-gray leading-relaxed mb-6">
              <strong>Technique:</strong> Use role-specific system prompts to align tone, formality, and depth with intended use.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-lg text-space-cadet font-semibold mb-4">Example:</p>
              <pre className="text-sm text-space-cadet whitespace-pre-wrap font-mono">
{`<!-- SYSTEM: You are a junior legal associate tasked with drafting internal memos for senior counsel. Be concise and cite statutes. -->

Prompt:
"Summarize how recent FTC guidelines impact SaaS data privacy disclosures."`}
              </pre>
            </div>

            <div className="bg-red-pantone/10 border-l-4 border-red-pantone p-6 mb-8">
              <p className="text-lg text-space-cadet font-semibold mb-2">Benefits:</p>
              <ul className="list-disc pl-6 space-y-1 text-lg text-cool-gray">
                <li>Maintains firm-wide stylistic consistency</li>
                <li>Speeds up junior-level support tasks</li>
                <li>Enables legal helpdesk bots for internal counsel</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-space-cadet mb-6 mt-12">
              7. Prompt DSLs for Regulatory Compliance Mapping
            </h2>

            <p className="text-lg text-cool-gray leading-relaxed mb-6">
              <strong>Technique:</strong> Define a domain-specific language (DSL) to generate compliance matrices from regulatory texts.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-lg text-space-cadet font-semibold mb-4">Example DSL:</p>
              <pre className="text-sm text-space-cadet whitespace-pre-wrap font-mono">
{`@map regulation("GDPR Article 5")
"""
Identify obligations related to data minimization.
Generate checklist with: obligation, legal basis, responsible party.
"""`}
              </pre>
            </div>

            <div className="bg-red-pantone/10 border-l-4 border-red-pantone p-6 mb-8">
              <p className="text-lg text-space-cadet font-semibold mb-2">Benefits:</p>
              <ul className="list-disc pl-6 space-y-1 text-lg text-cool-gray">
                <li>Converts statutes into structured compliance plans</li>
                <li>Accelerates audit prep</li>
                <li>Bridges legal interpretation and operational controls</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-space-cadet mb-6 mt-12">
              8. Prompt Testing for Statutory Interpretation Bias
            </h2>

            <p className="text-lg text-cool-gray leading-relaxed mb-6">
              <strong>Technique:</strong> Use prompt variation testing to uncover inconsistencies in how models interpret ambiguous statutes.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-lg text-space-cadet font-semibold mb-4">Example:</p>
              <pre className="text-sm text-space-cadet whitespace-pre-wrap font-mono">
{`- prompt: "Interpret 'reasonable effort' under California labor law."
  variation: "Interpret 'reasonable attempt' under same law."
- compare: output similarity, tone, legal conclusion`}
              </pre>
            </div>

            <div className="bg-red-pantone/10 border-l-4 border-red-pantone p-6 mb-8">
              <p className="text-lg text-space-cadet font-semibold mb-2">Benefits:</p>
              <ul className="list-disc pl-6 space-y-1 text-lg text-cool-gray">
                <li>Detects prompt sensitivity</li>
                <li>Supports legal QA and review</li>
                <li>Aids in regulatory language harmonization</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-space-cadet mb-6 mt-12">
              9. Scenario Prompting for Litigation Strategy Simulation
            </h2>

            <p className="text-lg text-cool-gray leading-relaxed mb-6">
              <strong>Technique:</strong> Use prompt-driven agent simulations to model opposing counsel strategies.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-lg text-space-cadet font-semibold mb-4">Example:</p>
              <pre className="text-sm text-space-cadet whitespace-pre-wrap font-mono">
{`{
  "scenario": "Patent infringement suit in Delaware Chancery Court",
  "agents": [
    {"role": "PlaintiffAttorney", "task": "Argue willful infringement"},
    {"role": "DefenseAttorney", "task": "Deny and raise prior art defenses"}
  ]
}`}
              </pre>
            </div>

            <div className="bg-red-pantone/10 border-l-4 border-red-pantone p-6 mb-8">
              <p className="text-lg text-space-cadet font-semibold mb-2">Benefits:</p>
              <ul className="list-disc pl-6 space-y-1 text-lg text-cool-gray">
                <li>Helps firms rehearse litigation strategies</li>
                <li>Identifies weak arguments</li>
                <li>Supports litigation readiness</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-space-cadet mb-6 mt-12">
              10. PromptOps for Legal Workflow Automation
            </h2>

            <p className="text-lg text-cool-gray leading-relaxed mb-6">
              <strong>Technique:</strong> Treat prompts as programmable assets in legal DevOps pipelines.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-lg text-space-cadet font-semibold mb-4">Example:</p>
              <pre className="text-sm text-space-cadet whitespace-pre-wrap font-mono">
{`jobs:
  - run: validate_confidentiality_prompt.yaml
    min_accuracy: 90%
  - run: test_contract_summary_consistency.yaml
    expected_variance: < 5%
  - run: redline_prompt_validation.yaml`}
              </pre>
            </div>

            <div className="bg-red-pantone/10 border-l-4 border-red-pantone p-6 mb-8">
              <p className="text-lg text-space-cadet font-semibold mb-2">Benefits:</p>
              <ul className="list-disc pl-6 space-y-1 text-lg text-cool-gray">
                <li>Ensures prompt reproducibility</li>
                <li>Supports version control and rollback</li>
                <li>Integrates with CI/CD for legal automation tools</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-space-cadet mb-6 mt-12">
              Final Thoughts
            </h2>

            <p className="text-lg text-cool-gray leading-relaxed mb-6">
              By mid-2025, advanced prompt engineering has become an indispensable tool for legal practitioners and technologists alike. Firms that operationalize prompts as first-class assets are gaining massive efficiency gains while enhancing compliance, accuracy, and client satisfaction.
            </p>

            <p className="text-lg text-cool-gray leading-relaxed mb-6">
              The next wave of legal innovation will not come from more data or faster processors, but from better prompting strategies: ones that align deeply with legal reasoning, workflows, and ethics.
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-gradient-to-r from-space-cadet to-cool-gray rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-anti-flash-white mb-4">
                Ready to Transform Your Legal Practice with AI?
              </h3>
              <p className="text-cool-gray mb-6">
                Get expert guidance on implementing advanced AI prompting techniques in your legal organization.
              </p>
              <button
                onClick={handleScheduleConsultation}
                className="bg-red-pantone hover:bg-fire-engine-red text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalBlogPost;