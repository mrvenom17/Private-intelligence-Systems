import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="border-b border-gray-800 bg-gray-900/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-gray-100 hover:text-blue-400 transition-colors">
            <Brain className="w-6 h-6" />
            <span className="text-lg font-semibold">AI Intelligence</span>
          </Link>
          
          {location.pathname !== '/demo-request' && (
            <Link
              to="/demo-request"
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Request Demo
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;