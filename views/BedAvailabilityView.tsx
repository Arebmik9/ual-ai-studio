
import React from 'react';
import { BEDS_DATA } from '../constants';

// Icons for the rules section
const HandshakeIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm-9 5a2 2 0 114 0 2 2 0 01-4 0z" />
    </svg>
);
const SparklesIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 01-1.414 1.414L12 6.414l-2.293 2.293a1 1 0 01-1.414-1.414L10 4.707M12 21l2.293-2.293a1 1 0 01-1.414-1.414L12 17.586l-2.293-2.293a1 1 0 01-1.414 1.414L10 19.293M21 12l-2.293-2.293a1 1 0 00-1.414 1.414L17.586 12l-2.293 2.293a1 1 0 001.414 1.414L19.293 14M4.707 12l2.293 2.293a1 1 0 001.414-1.414L7.586 12l2.293-2.293a1 1 0 00-1.414-1.414L4.707 10" />
    </svg>
);
const MoonIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);
const BanIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
    </svg>
);
const CalendarIcon: React.FC<{className?: string}> = ({ className }) => (
     <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const HOUSE_RULES = [
    { title: 'Mutual Respect', description: 'Treat all residents and staff with courtesy and respect. We are a community, and a positive environment is everyone\'s responsibility.', icon: HandshakeIcon },
    { title: 'Cleanliness', description: 'Maintain cleanliness in all common areas (kitchen, bathrooms, living room) and your personal space. Tidy up after yourself immediately.', icon: SparklesIcon },
    { title: 'Quiet Hours', description: 'Quiet hours are observed from 10:00 PM to 8:00 AM. Please be mindful of noise levels to allow others to rest.', icon: MoonIcon },
    { title: 'Substance-Free Home', description: 'The use or possession of illegal drugs or alcohol on the premises is strictly prohibited and will result in immediate dismissal.', icon: BanIcon },
    { title: 'Guest Policy', description: 'Overnight guests are not permitted. All daytime guests must be approved by staff in advance and must sign in upon arrival.', icon: HandshakeIcon },
    { title: 'Program Participation', description: 'Active participation in house meetings, assigned chores, and personal development programs is mandatory for all residents.', icon: CalendarIcon },
];

export const BedAvailabilityView: React.FC = () => {
  const availableBeds = BEDS_DATA.filter(b => b.status === 'Available').length;
  const totalBeds = BEDS_DATA.length;

  return (
    <div className="w-full">
        <div className="text-center mb-6 bg-gray-900/50 p-4 rounded-lg border border-gray-700">
            <p className="text-xl md:text-2xl font-bold">
                <span className="text-amber-400">{availableBeds}</span> / {totalBeds} Beds Currently Available
            </p>
        </div>
      <div className="overflow-x-auto rounded-lg border border-gray-700">
        <table className="min-w-full divide-y divide-gray-700 bg-gray-900/50">
          <thead className="bg-gray-800/70">
            <tr>
              <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold text-gray-200">Room</th>
              <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold text-gray-200">Bed Type</th>
              <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold text-gray-200">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {BEDS_DATA.map((bed) => (
              <tr key={bed.id} className="hover:bg-gray-800/60 transition-colors">
                <td className="whitespace-nowrap py-4 px-4 text-sm font-medium text-gray-200">{bed.room}</td>
                <td className="whitespace-nowrap py-4 px-4 text-sm text-gray-300">{bed.type}</td>
                <td className="whitespace-nowrap py-4 px-4 text-sm">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    bed.status === 'Available'
                      ? 'bg-green-200 text-green-800'
                      : 'bg-red-200 text-red-800'
                  }`}>
                    {bed.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

       <div className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">Community Guidelines & House Rules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOUSE_RULES.map((rule) => {
            const Icon = rule.icon;
            return (
              <div key={rule.title} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-amber-500/20 text-amber-400 mr-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{rule.title}</h3>
                </div>
                <p className="text-gray-300">{rule.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
