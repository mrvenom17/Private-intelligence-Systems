import React from 'react';
import { ArrowRight, Database, Zap, Shield } from 'lucide-react';
import Button from '../components/Button';

const HomePage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Private AI systems that remove decision bottlenecks for founders.
        </h1>
        
        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          I design and deploy internal AI agents that replace searching, reduce chaos, and accelerate execution.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button to="/demo-request" variant="primary" className="text-lg px-8 py-4">
            Request a 5-minute demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <Button href="#demo-systems" variant="secondary" className="text-lg px-8 py-4">
            View system demos
          </Button>
        </div>
      </section>

      {/* Value Points */}
      <section className="py-16 border-t border-gray-800">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center group">
            <div className="bg-gray-800 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-700 transition-colors">
              <Database className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Consolidates internal knowledge into one decision brain
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Stop searching through Slack, docs, and emails. Get instant answers from your company's collective intelligence.
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-gray-800 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-700 transition-colors">
              <Zap className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Reduces operational drag and headcount dependency
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Eliminate bottlenecks from context switching and waiting on others. Make decisions faster with complete information.
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-gray-800 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-700 transition-colors">
              <Shield className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Custom-built, private, and deployed in days
            </h3>
            <p className="text-gray-400 leading-relaxed">
              No generic tools. Built specifically for your operations, secured within your infrastructure, ready fast.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Systems */}
      <section id="demo-systems" className="py-16 border-t border-gray-800">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          See the systems in action
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-gray-600 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-4">
              Intelligence Copilot
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Internal AI copilot that ingests company docs, SOPs, and conversations to answer strategic and operational questions instantly.
            </p>
            <Button to="/demo-intelligence-copilot" variant="secondary" className="w-full">
              View Demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-gray-600 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-4">
              Sales Intelligence
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              AI system that enriches, scores, and prioritizes leads for sales teams, eliminating manual research and qualification.
            </p>
            <Button to="/demo-sales-intelligence" variant="secondary" className="w-full">
              View Demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 text-center border-t border-gray-800">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to remove your decision bottlenecks?
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          See how a private AI system can accelerate your operations in a 5-minute demo.
        </p>
        <Button to="/demo-request" variant="primary" className="text-lg px-8 py-4">
          Request private demo
        </Button>
      </section>
    </div>
  );
};

export default HomePage;