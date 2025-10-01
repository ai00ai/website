import React, { useEffect } from 'react';
import { ArrowLeft, Clock, User, Calendar, Truck } from 'lucide-react';

interface LogisticsBlogPostProps {
  onBack: () => void;
}

const LogisticsBlogPost: React.FC<LogisticsBlogPostProps> = ({ onBack }) => {
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
              Logistics AI
            </span>
            <div className="flex items-center text-cool-gray">
              <Calendar className="h-4 w-4 mr-1" />
              <span className="text-sm">Mid-2025</span>
            </div>
            <div className="flex items-center text-cool-gray">
              <Clock className="h-4 w-4 mr-1" />
              <span className="text-sm">12 min read</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-anti-flash-white mb-4 leading-tight">
            Advanced Prompting Techniques for Logistics & Supply Chain in Mid-2025
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
              As of mid-2025, logistics providers—from freight forwarders to last-mile delivery services—are experiencing a transformative shift driven by generative AI. Advanced prompting techniques, when embedded in supply chain platforms, control towers, and TMS/ERP systems, are enabling new levels of efficiency, adaptability, and resilience. Large Language Models (LLMs) like GPT-4o, Claude 3.5, and Gemini 1.5 are no longer peripheral tools—they are becoming embedded co-pilots for operations, planning, customer service, and procurement.
            </p>

            <p className="text-lg text-cool-gray leading-relaxed mb-8">
              In this expert guide, we explore ten advanced prompting strategies that are redefining logistics operations. Each technique includes real-world examples and demonstrates how prompt engineering is turning generative AI into mission-critical infrastructure.
            </p>

            <h2 className="text-3xl font-bold text-space-cadet mb-6 mt-12">
              1. Few-Shot Prompts for Exception Handling in Supply Chains
            </h2>

            <p className="text-lg text-cool-gray leading-relaxed mb-6">
              <strong>Technique:</strong> Train the model with a few labeled examples of delay causes and appropriate response actions.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-lg text-space-cadet font-semibold mb-4">Example:</p>
              <pre className="text-sm text-space-cadet whitespace-pre-wrap font-mono">
{`Examples:
1. "Container stuck in Rotterdam port due to customs inspection." → Notify consignee, escalate to brokerage team.
2. "Truck rerouted due to flood in Czech Republic." → Update ETA, reroute via Austria, notify scheduler.

Input:
"Rail delay reported between Lyon and Turin due to technical failure."

Output:
Notify customer of delay, assess alternative routes via Switzerland, update ETA in TMS.`}
              </pre>
            </div>

            <div className="bg-red-pantone/10 border-l-4 border-red-pantone p-6 mb-8">
              <p className="text-lg text-space-cadet font-semibold mb-2">Benefits:</p>
              <ul className="list-disc pl-6 space-y-1 text-lg text-cool-gray">
                <li>Reduces manual triage time</li>
                <li>Standardizes exception workflows</li>
                <li>Improves SLA adherence</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-space-cadet mb-6 mt-12">
              2. RAG for Real-Time ETA Reasoning
            </h2>

            <p className="text-lg text-cool-gray leading-relaxed mb-6">
              <strong>Technique:</strong> Use Retrieval-Augmented Generation to reason over IoT signals (location, temperature, door status), weather, and infrastructure alerts.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-lg text-space-cadet font-semibold mb-4">Example:</p>
              <pre className="text-sm text-space-cadet whitespace-pre-wrap font-mono">
{`query = "ETA for container BTG4672 to Antwerp"
docs = iot_signals_vector_db.similarity_search(query)

prompt = f"""
Use the following inputs:
{docs}

Infer adjusted ETA considering current position, driver rest hours, and port congestion.
"""`}
              </pre>
            </div>

            <div className="bg-red-pantone/10 border-l-4 border-red-pantone p-6 mb-8">
              <p className="text-lg text-space-cadet font-semibold mb-2">Benefits:</p>
              <ul className="list-disc pl-6 space-y-1 text-lg text-cool-gray">
                <li>Provides reliable ETA estimates</li>
                <li>Integrates live sensor data</li>
                <li>Enhances control tower visibility</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-space-cadet mb-6 mt-12">
              3. Multi-Hop Reasoning for Routing Optimization
            </h2>

            <p className="text-lg text-cool-gray leading-relaxed mb-6">
              <strong>Technique:</strong> Chain prompts to consider multiple constraints across hubs, time windows, fleet mix, and carbon footprint.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-lg text-space-cadet font-semibold mb-4">Example:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-lg text-cool-gray">
                <li>Step 1: List available transport modes from Gdansk to Milan.</li>
                <li>Step 2: Apply delivery window constraint (48 hours).</li>
                <li>Step 3: Minimize emissions while preserving time guarantee.</li>
              </ul>
            </div>

            <div className="bg-red-pantone/10 border-l-4 border-red-pantone p-6 mb-8">
              <p className="text-lg text-space-cadet font-semibold mb-2">Benefits:</p>
              <ul className="list-disc pl-6 space-y-1 text-lg text-cool-gray">
                <li>Balances speed, cost, and ESG goals</li>
                <li>Supports dynamic route planning</li>
                <li>Enables greener logistics decisions</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-space-cadet mb-6 mt-12">
              4. Multimodal Prompts for Damage Assessment and Claims
            </h2>

            <p className="text-lg text-cool-gray leading-relaxed mb-6">
              <strong>Technique:</strong> Use vision-capable LLMs (like GPT-4o or Gemini Vision) to process photos of damaged containers or cargo.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-lg text-space-cadet font-semibold mb-4">Example:</p>
              <pre className="text-sm text-space-cadet whitespace-pre-wrap font-mono">
{`Prompt:
Review the image of container BTG5674. Classify damage severity and suggest next action.
![container_damage.jpg]

Output:
Moderate dent to right panel, no structural breach. Recommend surveyor inspection, proceed with partial offload.`}
              </pre>
            </div>

            <div className="bg-red-pantone/10 border-l-4 border-red-pantone p-6 mb-8">
              <p className="text-lg text-space-cadet font-semibold mb-2">Benefits:</p>
              <ul className="list-disc pl-6 space-y-1 text-lg text-cool-gray">
                <li>Speeds up claims triage</li>
                <li>Reduces false escalation</li>
                <li>Integrates into warehouse/depot workflows</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-space-cadet mb-6 mt-12">
              5. Agent Copilots for Carrier Coordination
            </h2>

            <p className="text-lg text-cool-gray leading-relaxed mb-6">
              <strong>Technique:</strong> Use persona-based system prompts to match communication tone and region-specific norms.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-lg text-space-cadet font-semibold mb-4">Example:</p>
              <pre className="text-sm text-space-cadet whitespace-pre-wrap font-mono">
{`<!-- SYSTEM: You are a freight scheduler speaking with a Polish regional carrier. Use direct tone and confirm capacity clearly. -->

User: Request 3 tautliners from Warsaw to Berlin, pickup Friday.

Output:
Hello. Please confirm availability of 3 tautliners ex-Warsaw for Friday morning delivery to Berlin. Standard 13.6m trailers.`}
              </pre>
            </div>

            <div className="bg-red-pantone/10 border-l-4 border-red-pantone p-6 mb-8">
              <p className="text-lg text-space-cadet font-semibold mb-2">Benefits:</p>
              <ul className="list-disc pl-6 space-y-1 text-lg text-cool-gray">
                <li>Increases carrier response rate</li>
                <li>Reduces ambiguity in requests</li>
                <li>Enhances multilingual communications</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-space-cadet mb-6 mt-12">
              6. Prompt DSLs for Rate Quoting & Spot Bidding
            </h2>

            <p className="text-lg text-cool-gray leading-relaxed mb-6">
              <strong>Technique:</strong> Design a prompt-based domain-specific language (DSL) for standardizing rate quote requests and spot tenders.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-lg text-space-cadet font-semibold mb-4">Example DSL:</p>
              <pre className="text-sm text-space-cadet whitespace-pre-wrap font-mono">
{`@rate_request("Shanghai to Hamburg")
"""
Mode: Ocean FCL
Cargo: 24 pallets electronics
Ready Date: July 2
Incoterm: FOB Shanghai
"""

Output:
Spot quotes requested from 4 pre-qualified carriers. ETA response: <6 hrs.`}
              </pre>
            </div>

            <div className="bg-red-pantone/10 border-l-4 border-red-pantone p-6 mb-8">
              <p className="text-lg text-space-cadet font-semibold mb-2">Benefits:</p>
              <ul className="list-disc pl-6 space-y-1 text-lg text-cool-gray">
                <li>Accelerates procurement</li>
                <li>Reduces manual entry in TMS</li>
                <li>Improves quote traceability</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-space-cadet mb-6 mt-12">
              7. Scenario Prompting for Disruption Simulation
            </h2>

            <p className="text-lg text-cool-gray leading-relaxed mb-6">
              <strong>Technique:</strong> Use embedded agent prompts to simulate geopolitical, environmental, or labor disruptions.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-lg text-space-cadet font-semibold mb-4">Example:</p>
              <pre className="text-sm text-space-cadet whitespace-pre-wrap font-mono">
{`{
  "scenario": "Panama Canal drought worsens, max draft reduced by 20%",
  "agents": [
    {"name": "RoutingAgent", "task": "Evaluate alternative Suez routes"},
    {"name": "CostAgent", "task": "Model increased fuel costs"},
    {"name": "CustomerAgent", "task": "Prepare revised lead times for clients"}
  ]
}`}
              </pre>
            </div>

            <div className="bg-red-pantone/10 border-l-4 border-red-pantone p-6 mb-8">
              <p className="text-lg text-space-cadet font-semibold mb-2">Benefits:</p>
              <ul className="list-disc pl-6 space-y-1 text-lg text-cool-gray">
                <li>Improves business continuity planning</li>
                <li>Aids strategic sourcing decisions</li>
                <li>Tests control tower agility</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-space-cadet mb-6 mt-12">
              8. PromptOps for Logistics Automation Pipelines
            </h2>

            <p className="text-lg text-cool-gray leading-relaxed mb-6">
              <strong>Technique:</strong> Integrate prompt validation into CI/CD for logistics bots, notifications, and scheduling agents.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-lg text-space-cadet font-semibold mb-4">Example:</p>
              <pre className="text-sm text-space-cadet whitespace-pre-wrap font-mono">
{`jobs:
  - run: test_eta_prompt_accuracy.yaml
    expected_accuracy: "> 95%"
  - run: carrier_tone_test.yaml
    locale: "Poland"
    expected_style: "direct"
  - run: multimodal_damage_check.yaml`}
              </pre>
            </div>

            <div className="bg-red-pantone/10 border-l-4 border-red-pantone p-6 mb-8">
              <p className="text-lg text-space-cadet font-semibold mb-2">Benefits:</p>
              <ul className="list-disc pl-6 space-y-1 text-lg text-cool-gray">
                <li>Ensures consistent AI agent behavior</li>
                <li>Version-controls operational prompts</li>
                <li>Enables prompt rollback on errors</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-space-cadet mb-6 mt-12">
              9. Zero-Shot Audits for SLA Compliance
            </h2>

            <p className="text-lg text-cool-gray leading-relaxed mb-6">
              <strong>Technique:</strong> Use zero-shot prompting to evaluate email trails, PODs, and logs for service-level breaches.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-lg text-space-cadet font-semibold mb-4">Example:</p>
              <pre className="text-sm text-space-cadet whitespace-pre-wrap font-mono">
{`Instruction: Was the 48-hour delivery commitment breached for shipment 88231?

Context:
- Pickup: June 1, 10:00 AM
- POD: June 3, 3:45 PM
- SLA: 48 hours

Output:
Yes, exceeded by 5 hours and 45 minutes.`}
              </pre>
            </div>

            <div className="bg-red-pantone/10 border-l-4 border-red-pantone p-6 mb-8">
              <p className="text-lg text-space-cadet font-semibold mb-2">Benefits:</p>
              <ul className="list-disc pl-6 space-y-1 text-lg text-cool-gray">
                <li>Enables proactive penalty tracking</li>
                <li>Supports customer service disputes</li>
                <li>Reduces manual SLA audits</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-space-cadet mb-6 mt-12">
              10. RAG-Powered Safety Monitoring Prompts
            </h2>

            <p className="text-lg text-cool-gray leading-relaxed mb-6">
              <strong>Technique:</strong> Combine vector search over safety reports and incident logs with LLM summarization.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-lg text-space-cadet font-semibold mb-4">Example:</p>
              <pre className="text-sm text-space-cadet whitespace-pre-wrap font-mono">
{`query = "Driver fatigue-related incidents in Q2 across Central Europe"
docs = safety_log_vector_db.similarity_search(query)

prompt = f"""
From the following reports:
{docs}

Summarize patterns of driver fatigue, root causes, and recommend mitigations.
"""`}
              </pre>
            </div>

            <div className="bg-red-pantone/10 border-l-4 border-red-pantone p-6 mb-8">
              <p className="text-lg text-space-cadet font-semibold mb-2">Benefits:</p>
              <ul className="list-disc pl-6 space-y-1 text-lg text-cool-gray">
                <li>Detects systemic risk issues</li>
                <li>Informs fleet training programs</li>
                <li>Helps meet regulatory compliance</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-space-cadet mb-6 mt-12">
              Final Thoughts
            </h2>

            <p className="text-lg text-cool-gray leading-relaxed mb-6">
              By mid-2025, logistics is no longer just about moving goods—it's about orchestrating resilient, data-aware, and AI-augmented operations at global scale. Prompt engineering empowers logistics professionals to control and trust their AI systems without becoming data scientists.
            </p>

            <p className="text-lg text-cool-gray leading-relaxed mb-6">
              From predictive routing to exception resolution, prompting is now a core capability. As generative AI matures, mastering advanced prompting techniques will be key to achieving faster decisions, greener transport, and stronger service levels.
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-gradient-to-r from-space-cadet to-cool-gray rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-anti-flash-white mb-4">
                Ready to Transform Your Logistics Operations with AI?
              </h3>
              <p className="text-cool-gray mb-6">
                Get expert guidance on implementing advanced AI prompting techniques in your logistics organization.
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

export default LogisticsBlogPost;