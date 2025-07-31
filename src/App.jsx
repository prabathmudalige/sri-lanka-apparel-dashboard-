// The main component that holds the application state and renders the dashboard.
import React, { useState } from 'react';
import { Switch } from './components/ui/Switch';
import { Label } from './components/ui/Label';
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
    { name: 'Groundwater', value: 30, color: '#2563eb' },
    { name: 'Recycled', value: 10, color: '#1d4ed8' },
  ],
  waterTrend: [
    { name: '2022', 'Withdrawal': 12000, 'Discharge': 9500 },
    { name: '2023', 'Withdrawal': 11500, 'Discharge': 9100 },
    { name: '2024', 'Withdrawal': 10800, 'Discharge': 8700 },
  ],
  wasteData: [
    { name: 'Textile Waste', value: 65, color: '#4b5563' },
    { name: 'Packaging', value: 20, color: '#6b7280' },
    { name: 'Other', value: 15, color: '#9ca3af' },
  ],
  wasteTrend: [
    { name: '2022', 'Recycled': 780, 'Landfill': 280, 'Total': 1060 },
    { name: '2023', 'Recycled': 850, 'Landfill': 250, 'Total': 1100 },
    { name: '2024', 'Recycled': 900, 'Landfill': 200, 'Total': 1100 },
  ],
  physicalRisks: [
    { name: 'Monsoon Flooding', impact: 'Supply chain disruption, factory closures, transport halts', mitigation: 'Improved drainage, elevation of critical equipment, disaster preparedness' },
    { name: 'Water Scarcity & Drought', impact: 'Increased operating costs, production halts (especially in dyeing)', mitigation: 'Water recycling, rainwater harvesting, efficient dyeing technologies' },
    { name: 'Extreme Weather Events', impact: 'Damage to facilities, power outages, worker safety', mitigation: 'Reinforced infrastructure, emergency response plans' },
  ],
  transitionRisks: [
    { name: 'EU GSP+ Changes', impact: 'Loss of preferential market access, increased tariffs', mitigation: 'Proactive engagement with EU bodies, diversification of export markets' },
    { name: 'Fossil Fuel Price Volatility', impact: 'Increased energy costs for factories and logistics', mitigation: 'Investment in solar power, energy efficiency audits, use of biomass boilers' },
    { name: 'Evolving International Labor Standards', impact: 'Reputational damage, market access restrictions', mitigation: 'Transparent reporting, worker empowerment programs, strong union relations' },
  ],
  climateOpportunities: [
    { name: 'Sustainable Product Innovation', description: 'Developing new product lines using recycled, organic, or waste materials.', benefit: 'Increased brand reputation, access to new markets, premium pricing' },
    { name: 'Renewable Energy Adoption', description: 'Installing solar panels on factory roofs and shifting to a cleaner energy mix.', benefit: 'Reduced operating costs, energy independence, enhanced brand image' },
    { name: 'Circular Economy Initiatives', description: 'Partnering with local startups to turn textile waste into new products or inputs.', benefit: 'Waste reduction, new revenue streams, strengthening local supply chains' },
  ]
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
