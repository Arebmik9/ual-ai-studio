
import React from 'react';
import { STABILITY_PROGRAMS } from '../constants';

export const StabilityProgramsView: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {STABILITY_PROGRAMS.map((program) => {
        const Icon = program.icon;
        return (
          <div key={program.title} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-amber-500 hover:bg-gray-800 transition-all transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-amber-500/20 text-amber-400 mr-4">
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">{program.title}</h3>
            </div>
            <p className="text-gray-300">{program.description}</p>
          </div>
        );
      })}
    </div>
  );
};
