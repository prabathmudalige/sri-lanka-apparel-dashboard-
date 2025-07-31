import React, { useState } from 'react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Sector, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { Activity, Droplets, Recycle, Leaf, Cloud, Scale } from 'lucide-react';

// Mock components to replicate shadcn/ui
const Card = ({ className, children, ...props }) => {
  return (
    <div className={`rounded-xl border bg-card text-card-foreground shadow ${className}`} {...props}>
      {children}
    </div>
  );
};

const CardHeader = ({ className, children, ...props }) => {
  return (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
      {children}
    </div>
  );
};

const CardTitle = ({ className, children, ...props }) => {
  return (
    <h3 className={`font-semibold leading-none tracking-tight ${className}`} {...props}>
      {children}
    </h3>
  );
};

const CardDescription = ({ className, children, ...props }) => {
  return (
    <p className={`text-sm text-muted-foreground ${className}`} {...props}>
      {children}
    </p>
  );
};

const CardContent = ({ className, children, ...props }) => {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  );
};

const Switch = ({ id, checked, onCheckedChange }) => {
  return (
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={e => onCheckedChange(e.target.checked)}
      className="h-5 w-9 rounded-full bg-gray-300 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 checked:bg-blue-600"
    />
  );
};

const Label = ({ htmlFor, children, ...props }) => {
  return (
    <label htmlFor={htmlFor} {...props}>
      {children}
    </label>
  );
};


// The Metrics component with all the charts
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Metrics = ({ data, isDarkMode }) => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card className="bg-white dark:bg-gray-800 shadow-md rounded-xl">
          <CardHeader>
            <CardTitle>GHG Emissions by Scope (GRI 305)</CardTitle>
            <CardDescription>
              Total tonnes of CO2 equivalent by reporting year, with a focus on Scope 3 emissions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full h-80">
              <ResponsiveContainer>
                <LineChart data={data.ghgEmissions} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#4b5563' : '#e5e7eb'} />
                  <XAxis dataKey="name" stroke={isDarkMode ? '#a1a1aa' : '#71717a'} />
                  <YAxis stroke={isDarkMode ? '#a1a1aa' : '#71717a'} />
                  <Tooltip
                    contentStyle={{ backgroundColor: isDarkMode ? '#1f2937' : '#fff', border: '1px solid #4b5563', borderRadius: '8px' }}
                    labelStyle={{ color: isDarkMode ? '#e5e7eb' : '#1f2937' }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="Scope 1" stroke="#34d399" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="Scope 2" stroke="#8b5cf6" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="Scope 3" stroke="#ef4444" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 shadow-md rounded-xl">
          <CardHeader>
            <CardTitle>Scope 3 Emissions Breakdown</CardTitle>
            <CardDescription>
              Key categories contributing to the majority of the supply chain emissions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full h-80 flex justify-center items-center">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={data.scope3Breakdown}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {data.scope3Breakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: isDarkMode ? '#1f2937' : '#fff', border: '1px solid #4b5563', borderRadius: '8px' }}
                    labelStyle={{ color: isDarkMode ? '#e5e7eb' : '#1f2937' }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card className="bg-white dark:bg-gray-800 shadow-md rounded-xl">
          <CardHeader>
            <CardTitle>Water Usage by Source (GRI 303)</CardTitle>
            <CardDescription>
              Annual water withdrawal from different sources in cubic meters (m³).
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full h-80">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={data.waterUsage}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {data.waterUsage.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: isDarkMode ? '#1f2937' : '#fff', border: '1px solid #4b5563', borderRadius: '8px' }}
                    labelStyle={{ color: isDarkMode ? '#e5e7eb' : '#1f2937' }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 shadow-md rounded-xl">
          <CardHeader>
            <CardTitle>Waste Generation (GRI 306)</CardTitle>
            <CardDescription>
              Total waste generated (in tonnes) and its composition.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full h-80">
              <ResponsiveContainer>
                <BarChart data={data.wasteTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#4b5563' : '#e5e7eb'} />
                  <XAxis dataKey="name" stroke={isDarkMode ? '#a1a1aa' : '#71717a'} />
                  <YAxis stroke={isDarkMode ? '#a1a1aa' : '#71717a'} />
                  <Tooltip
                    contentStyle={{ backgroundColor: isDarkMode ? '#1f2937' : '#fff', border: '1px solid #4b5563', borderRadius: '8px' }}
                    labelStyle={{ color: isDarkMode ? '#e5e7eb' : '#1f2937' }}
                  />
                  <Legend />
                  <Bar dataKey="Recycled" stackId="a" fill="#10b981" />
                  <Bar dataKey="Landfilled" stackId="a" fill="#ef4444" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

// The RisksAndOpportunities component
const RisksAndOpportunities = ({ data }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
      <Card className="bg-white dark:bg-gray-800 shadow-md rounded-xl">
        <CardHeader>
          <CardTitle>Physical Climate Risks</CardTitle>
          <CardDescription>
            Potential impacts on operations and the supply chain from physical climate hazards.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4">
            {data.physicalRisks.map((risk, index) => (
              <div key={index} className="p-4 rounded-lg border dark:border-gray-700 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Cloud className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <h5 className="font-semibold text-base">{risk.name}</h5>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Impact:</span> {risk.impact}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Strategy:</span> {risk.strategy}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card className="bg-white dark:bg-gray-800 shadow-md rounded-xl">
        <CardHeader>
          <CardTitle>Transition Climate Risks</CardTitle>
          <CardDescription>
            Risks associated with the transition to a low-carbon economy.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4">
            {data.transitionRisks.map((risk, index) => (
              <div key={index} className="p-4 rounded-lg border dark:border-gray-700 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Scale className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <h5 className="font-semibold text-base">{risk.name}</h5>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Impact:</span> {risk.impact}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Strategy:</span> {risk.strategy}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-white dark:bg-gray-800 shadow-md rounded-xl">
        <CardHeader>
          <CardTitle>Climate-Related Opportunities</CardTitle>
          <CardDescription>
            Potential financial benefits and value creation from climate-related actions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4">
            {data.climateOpportunities.map((opportunity, index) => (
              <div key={index} className="p-4 rounded-lg border dark:border-gray-700 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Leaf className="h-4 w-4 text-green-500 dark:text-green-400" />
                  <h5 className="font-semibold text-base">{opportunity.name}</h5>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Description:</span> {opportunity.description}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Benefit:</span> {opportunity.benefit}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// The Dashboard component
const Dashboard = ({ data, isDarkMode }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="bg-white dark:bg-gray-800 shadow-md rounded-xl">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">Total GHG Emissions</CardTitle>
            <Activity className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,435 <span className="text-sm font-normal text-gray-500 dark:text-gray-400">tCO2e</span></div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              +1.5% from last year
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-gray-800 shadow-md rounded-xl">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">Water Consumption</CardTitle>
            <Droplets className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">120,500 <span className="text-sm font-normal text-gray-500 dark:text-gray-400">m³</span></div>
            <p className="text-xs text-green-500 dark:text-green-400 mt-1">
              -5% from last year
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-gray-800 shadow-md rounded-xl">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">Waste Recycled</CardTitle>
            <Recycle className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">82%</div>
            <p className="text-xs text-green-500 dark:text-green-400 mt-1">
              +4% from last year
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-gray-800 shadow-md rounded-xl">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">Sustainable Sourcing</CardTitle>
            <Leaf className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">50%</div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Target: 70% by 2025
            </p>
          </CardContent>
        </Card>
      </div>

      <Metrics data={data} isDarkMode={isDarkMode} />
      <RisksAndOpportunities data={data} />
    </>
  );
};


// The main component that holds the application state and renders the dashboard.
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
    { name: 'Municipal Supply', value: 10, color: '#93c5fd' },
  ],
  wasteTrend: [
    { name: '2022', Recycled: 25, Landfilled: 5 },
    { name: '2023', Recycled: 30, Landfilled: 4 },
    { name: '2024', Recycled: 35, Landfilled: 3 },
  ],
  physicalRisks: [
    { name: 'Increased Flooding', impact: 'Disruption to factory operations and supply chain logistics.', strategy: 'Investment in flood defenses and business continuity planning.' },
    { name: 'Water Scarcity', impact: 'Competition for water resources, potential production stoppages.', strategy: 'Implementing water recycling systems and exploring alternative water sources.' },
  ],
  transitionRisks: [
    { name: 'Carbon Pricing Policy', impact: 'Increased operating costs due to new taxes or regulations.', strategy: 'Transitioning to renewable energy to reduce carbon footprint and costs.' },
    { name: 'Reputation Risk', impact: 'Negative brand perception from a failure to meet climate targets.', strategy: 'Enhancing transparency, reporting, and investment in sustainable practices.' },
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
