// This component renders the various charts and metric breakdowns.
import React from 'react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Sector, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/Card';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
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
              Breakdown of greenhouse gas emissions (tCO2e) over the last three years.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full h-80">
              <ResponsiveContainer>
                <BarChart data={data.ghgEmissions}>
                  <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#4b5563' : '#e5e7eb'} />
                  <XAxis dataKey="name" stroke={isDarkMode ? '#a1a1aa' : '#71717a'} />
                  <YAxis stroke={isDarkMode ? '#a1a1aa' : '#71717a'} />
                  <Tooltip
                    contentStyle={{ backgroundColor: isDarkMode ? '#1f2937' : '#fff', border: '1px solid #4b5563', borderRadius: '8px' }}
                    labelStyle={{ color: isDarkMode ? '#e5e7eb' : '#1f2937' }}
                  />
                  <Legend />
                  <Bar dataKey="Scope 1" stackId="a" fill="#ef4444" />
                  <Bar dataKey="Scope 2" stackId="a" fill="#f97316" />
                  <Bar dataKey="Scope 3" stackId="a" fill="#22c55e" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-gray-800 shadow-md rounded-xl">
          <CardHeader>
            <CardTitle>Scope 3 Emissions Breakdown</CardTitle>
            <CardDescription>
              Focus on the largest sources of emissions from the value chain.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full h-80 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data.scope3Breakdown}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={100}
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
            <CardTitle>Water Withdrawal & Discharge (GRI 303)</CardTitle>
            <CardDescription>
              Trend of water consumption and discharge over time.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full h-80">
              <ResponsiveContainer>
                <LineChart data={data.waterTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#4b5563' : '#e5e7eb'} />
                  <XAxis dataKey="name" stroke={isDarkMode ? '#a1a1aa' : '#71717a'} />
                  <YAxis stroke={isDarkMode ? '#a1a1aa' : '#71717a'} />
                  <Tooltip
                    contentStyle={{ backgroundColor: isDarkMode ? '#1f2937' : '#fff', border: '1px solid #4b5563', borderRadius: '8px' }}
                    labelStyle={{ color: isDarkMode ? '#e5e7eb' : '#1f2937' }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="Withdrawal" stroke="#3b82f6" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="Discharge" stroke="#1d4ed8" />
                </LineChart>
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
                  <Bar dataKey="Landfill" stackId="a" fill="#ef4444" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Metrics;
