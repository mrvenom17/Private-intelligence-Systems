import React from 'react';
import { ArrowRight, Target, TrendingUp, Users } from 'lucide-react';
import Button from '../components/Button';

const DemoSalesIntelligence: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-6">
          Sales Intelligence Demo
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          See how AI-powered lead enrichment and scoring eliminates manual sales research and qualification.
        </p>
      </div>

      {/* Problem Statement */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
          <Users className="mr-3 w-6 h-6 text-red-400" />
          The Sales Efficiency Problem
        </h2>
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
          <p className="text-gray-300 leading-relaxed mb-4">
            Sales teams spend 60% of their time on research and qualification instead of selling. 
            Manual lead scoring is inconsistent, and critical prospect intelligence gets missed.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Reps waste time on unqualified leads while high-value prospects slip through the cracks 
            because the right information wasn't available at the right time.
          </p>
        </div>
      </section>

      {/* What the System Does */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
          <Target className="mr-3 w-6 h-6 text-blue-400" />
          What Sales Intelligence Does
        </h2>
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Automatic Enrichment</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Company size and growth metrics</li>
                <li>• Technology stack identification</li>
                <li>• Recent funding and news events</li>
                <li>• Decision maker identification</li>
                <li>• Competitive landscape analysis</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Smart Prioritization</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• AI-powered lead scoring</li>
                <li>• Buying signal detection</li>
                <li>• Optimal timing recommendations</li>
                <li>• Personalized outreach angles</li>
                <li>• Pipeline probability forecasting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Outcome */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
          <TrendingUp className="mr-3 w-6 h-6 text-green-400" />
          Business Outcome
        </h2>
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">40% increase</div>
              <div className="text-gray-300">Qualified lead conversion</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">2-3 hours</div>
              <div className="text-gray-300">Daily research time saved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">25% shorter</div>
              <div className="text-gray-300">Sales cycle duration</div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Placeholder */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
          <Target className="mr-3 w-6 h-6 text-purple-400" />
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
              Watch how raw leads automatically transform into rich prospect profiles 
              with AI-powered scoring and prioritization.
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

export default DemoSalesIntelligence;