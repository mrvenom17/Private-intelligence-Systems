import React from 'react';
import { ArrowRight, MessageCircle, Search, Brain } from 'lucide-react';
import Button from '../components/Button';

const DemoIntelligenceCopilot: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-6">
          Intelligence Copilot Demo
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          See how an internal AI copilot transforms company knowledge into instant decision support.
        </p>
      </div>

      {/* Problem Statement */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
          <Search className="mr-3 w-6 h-6 text-red-400" />
          The Decision Bottleneck Problem
        </h2>
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
          <p className="text-gray-300 leading-relaxed mb-4">
            Founders waste hours daily searching for information that already exists somewhere in their company. 
            Critical decisions get delayed because the right context is buried in Slack threads, Google Docs, or someone's head.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Every question becomes a game of digital archaeology, pulling team members away from their work 
            just to provide context that should be instantly accessible.
          </p>
        </div>
      </section>

      {/* What the System Does */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
          <Brain className="mr-3 w-6 h-6 text-blue-400" />
          What the Intelligence Copilot Does
        </h2>
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Data Ingestion</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Company documents and SOPs</li>
                <li>• Slack conversations and decisions</li>
                <li>• Meeting notes and recordings</li>
                <li>• Email threads and context</li>
                <li>• Project management data</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Instant Intelligence</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Strategic decision context</li>
                <li>• Historical precedent lookup</li>
                <li>• Team expertise location</li>
                <li>• Policy and procedure guidance</li>
                <li>• Competitive intelligence synthesis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Outcome */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
          <ArrowRight className="mr-3 w-6 h-6 text-green-400" />
          Business Outcome
        </h2>
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">3-5 hours</div>
              <div className="text-gray-300">Daily time saved per founder</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">60% faster</div>
              <div className="text-gray-300">Strategic decision making</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">Zero</div>
              <div className="text-gray-300">Information bottlenecks</div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Placeholder */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
          <MessageCircle className="mr-3 w-6 h-6 text-purple-400" />
          See It In Action
        </h2>
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-16 text-center">
          <div className="bg-gray-900 rounded-lg p-12 border-2 border-dashed border-gray-600">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Demo Video</h3>
            <p className="text-gray-400">
              Watch how founders ask complex operational questions and get instant, 
              context-rich answers from their company's knowledge base.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <Button to="/demo-request" variant="primary" className="text-lg px-8 py-4">
          Request private deployment
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </section>
    </div>
  );
};

export default DemoIntelligenceCopilot;