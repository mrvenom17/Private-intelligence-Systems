import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import DemoIntelligenceCopilot from './pages/DemoIntelligenceCopilot';
import DemoSalesIntelligence from './pages/DemoSalesIntelligence';
import DemoRequest from './pages/DemoRequest';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/demo-intelligence-copilot" element={<DemoIntelligenceCopilot />} />
          <Route path="/demo-sales-intelligence" element={<DemoSalesIntelligence />} />
          <Route path="/demo-request" element={<DemoRequest />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;