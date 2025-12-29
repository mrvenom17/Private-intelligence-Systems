import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';

const DemoRequest: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    problem: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Demo request submitted:', formData);
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-6">
          Request a 5-minute demo
        </h1>
        <p className="text-xl text-gray-400">
          See exactly how a private AI system can remove your specific bottlenecks.
        </p>
      </div>

      <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-2">
              Role
            </label>
            <input
              type="text"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="CEO, Founder, COO, etc."
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Company name"
            />
          </div>

          <div>
            <label htmlFor="problem" className="block text-sm font-medium text-gray-300 mb-2">
              Problem you want solved
            </label>
            <textarea
              id="problem"
              name="problem"
              value={formData.problem}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
              placeholder="Describe the specific decision bottleneck or operational challenge you're facing..."
            />
          </div>

          <Button variant="primary" className="w-full text-lg py-4">
            Request private demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            I'll review your request and follow up within 24 hours with a calendly link for a private demo tailored to your specific needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DemoRequest;