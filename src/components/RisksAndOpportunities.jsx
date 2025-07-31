// This component displays the physical risks, transition risks, and opportunities.
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/Card';
import { Cloud, Scale, Leaf } from 'lucide-react';

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
                  <span className="font-medium text-gray-700 dark:text-gray-300">Mitigation:</span> {risk.mitigation}
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
            Risks related to policy, legal, technological, and market shifts.
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
                  <span className="font-medium text-gray-700 dark:text-gray-300">Mitigation:</span> {risk.mitigation}
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

export default RisksAndOpportunities;
