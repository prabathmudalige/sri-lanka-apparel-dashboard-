// The main component that holds the application state and renders the dashboard.
import React, { useState } from 'react';
// Corrected import path to match the local folder name "Ui" with a capital 'U'
import { Switch } from './components/Ui/Switch';
import { Label } from './components/Ui/Label';
import Dashboard from './components/Dashboard';

// Mock data for the detailed dashboard with Sri Lankan context
const mockData = {
  ghgEmissions: [
    { name: '2022', 'Scope 1': 220, 'Scope 2': 150, 'Scope 3': 2800 },
    { name: '2023', 'Scope 1': 210, 'Scope 2': 145, 'Scope 3': 2950 },
    { name: '2024', 'Scope 1': 205, 'Scope 2': 130, 'Scope 3': 3100 },
  ],
  scope3Breakdown: [
    { name: 'Purchased Goods & Services', value: 1800, color: '#34d399' },
    { name: 'Upstream Transport', value: 700, color: '#10b981' },
    { name: 'Employee Commuting', value: 600, color: '#059669' },
  ],
  waterUsage: [
    { name: 'River Water', value: 60, color: '#3b82f6' },
    { name: 'Groundwater', value: 30, color: '#60a5fa' },
    { name: 'Municipal Water', value: 10, color: '#93c5fd' },
  ],
  waterTrend: [
    { name: '2022', 'Withdrawal': 100, 'Discharge': 95 },
    { name: '2023', 'Withdrawal': 95, 'Discharge': 90 },
    { name: '2024', 'Withdrawal': 92, 'Discharge': 88 },
  ],
  wasteTrend: [
    { name: '2022', 'Recycled': 75, 'Landfilled': 25 },
    { name: '2023', 'Recycled': 80, 'Landfilled': 20 },
    { name: '2024', 'Recycled': 82, 'Landfilled': 18 },
  ],
  physicalRisks: [
    { name: 'Increased Flooding', impact: 'Disruption of supply chains, damage to factory infrastructure.', mitigation: 'Relocate critical equipment, implement flood defenses.' },
    { name: 'Water Scarcity', impact: 'Operational downtime, increased water costs.', mitigation: 'Invest in water-efficient machinery, implement rainwater harvesting.' },
  ],
  transitionRisks: [
    { name: 'Carbon Tax', impact: 'Increased operating costs, reduced profit margins.', mitigation: 'Shift to renewable energy, improve energy efficiency.' },
    { name: 'Shifting Consumer Preferences', impact: 'Loss of market share.', mitigation: 'Invest in sustainable materials, obtain eco-certifications.' },
  ],
  climateOpportunities: [
    { name: 'Renewable Energy Adoption', description: 'Installing solar panels on factory roofs and shifting to a cleaner energy mix.', benefit: 'Reduced operating costs, energy independence, enhanced brand image' },
    { name: 'Circular Economy Initiatives', description: 'Partnering with local startups to turn textile waste into new products or inputs.', benefit: 'Waste reduction, new revenue streams, strengthening local supply chains' },
  ],
};

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`p-4 md:p-8 rounded-lg min-h-screen font-sans ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Apparel Climate Risk & Opportunities Dashboard - Sri Lanka Context</h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">
            Monitoring climate-related risks and opportunities aligned with GRI standards.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Label htmlFor="dark-mode" className="text-sm">Dark Mode</Label>
          <Switch id="dark-mode" checked={isDarkMode} onCheckedChange={setIsDarkMode} />
        </div>
      </header>

      <Dashboard data={mockData} isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
