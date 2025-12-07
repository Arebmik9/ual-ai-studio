
import React from 'react';

export const DonationsView: React.FC = () => {
  return (
    <div className="space-y-12 pb-8">
      
      {/* Featured Event Section */}
      <div className="relative overflow-hidden rounded-2xl border-2 border-amber-500/50 bg-gradient-to-br from-gray-900 to-gray-800 p-8 shadow-2xl">
        {/* Decorative background element */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-green-600 to-red-600 opacity-50"></div>

        <div className="relative z-10 text-center md:text-left md:flex md:items-center md:justify-between gap-8">
            <div className="flex-1">
                <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-red-200 uppercase bg-red-900/50 rounded-full border border-red-700/50">
                    Upcoming Event
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Christmas Toy Giveaway</h2>
                <p className="text-xl text-gray-300 mb-6">Spreading joy to children in our community this holiday season.</p>
                
                <div className="space-y-3 text-gray-200">
                    <div className="flex items-center gap-3">
                        <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        <span className="font-semibold">December 20th</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span className="font-semibold">5:00 PM – 8:00 PM</span>
                    </div>
                    <div className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        <span>
                            <strong>Millennium Youth Entertainment Complex</strong><br/>
                            <span className="text-gray-400 text-sm">1156 Hargrave St, Austin, TX 78702</span>
                        </span>
                    </div>
                </div>
            </div>
            
            <div className="mt-8 md:mt-0 flex-shrink-0 flex justify-center">
                <div className="w-48 h-48 bg-gray-800 rounded-full flex items-center justify-center border-4 border-gray-700 shadow-xl relative group">
                    <div className="absolute inset-0 rounded-full border border-dashed border-gray-500 opacity-50 animate-spin-slow"></div>
                     <svg className="w-24 h-24 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path></svg>
                </div>
            </div>
        </div>
      </div>

      {/* Donation Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
             <h3 className="text-2xl font-bold text-white mb-4">Why We Need Your Support</h3>
             <p className="text-gray-300 leading-relaxed mb-6">
                Your donations directly empower individuals to transition from instability to independence. Every contribution helps us provide:
             </p>
             <ul className="space-y-3 text-gray-300">
                 <li className="flex items-center gap-2">
                     <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                     Safe, subsidized housing
                 </li>
                 <li className="flex items-center gap-2">
                     <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                     Job training and certification programs
                 </li>
                 <li className="flex items-center gap-2">
                     <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                     Essential life skills workshops
                 </li>
                 <li className="flex items-center gap-2">
                     <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                     Community outreach events
                 </li>
             </ul>
        </div>

        <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 flex flex-col justify-center text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Ways to Give</h3>
            <p className="text-gray-400 mb-8">
                We appreciate contributions of any size. Together, we can build a stronger community.
            </p>
            
            <div className="space-y-4">
                <button className="w-full py-4 px-6 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-lg transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    Make an Online Donation
                </button>
                
                <p className="text-sm text-gray-500 mt-4">
                    For equipment, furniture, or large contributions, please <br/>
                    <span className="text-amber-400 font-semibold cursor-pointer hover:underline">contact us directly</span>.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};
