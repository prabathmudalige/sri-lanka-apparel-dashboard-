// This component renders the main dashboard layout and passes data to sub-components.
import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from './ui/Card';
import { Activity, Droplets, Recycle, Leaf, Cloud, Scale } from 'lucide-react';
import Metrics from './Metrics';
import RisksAndOpportunities from './RisksAndOpportunities';

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
              +1.9% from last year
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-gray-800 shadow-md rounded-xl">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">Water Usage</CardTitle>
            <Droplets className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10,800 <span className="text-sm font-normal text-gray-500 dark:text-gray-400">m³</span></div>
            <p className="text-xs text-green-500 dark:text-green-400 mt-1">
              -6.1% from last year
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
              Target: 65% by 2026
            </p>
          </CardContent>
        </Card>
      </div>

      <Metrics data={data} isDarkMode={isDarkMode} />
      <RisksAndOpportunities data={data} isDarkMode={isDarkMode} />
    </>
  );
};

export default Dashboard;
