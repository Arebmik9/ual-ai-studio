
import React from 'react';

const TESTIMONIALS = [
    {
        id: 1,
        content: "The support I received here changed my life. I went from feeling hopeless to having a steady job and my own savings within three months.",
        author: "Michael R.",
        role: "Former Resident"
    },
    {
        id: 2,
        content: "It’s not just a bed; it’s a family. The staff genuinely cares about your future. They helped me reconnect with my children.",
        author: "Sarah L.",
        role: "Alumni"
    },
    {
        id: 3,
        content: "The employment program is real. They didn't just tell me to apply; they sat down, fixed my resume, and practiced interviews with me until I got the job.",
        author: "David K.",
        role: "Current Resident"
    }
];

const SPONSORS = [
    { 
        name: "A+ Federal Credit Union", 
        logoUrl: "https://logo.clearbit.com/aplusfcu.org",
        website: "https://www.aplusfcu.org"
    },
    { 
        name: "Walmart", 
        logoUrl: "https://logo.clearbit.com/walmart.com",
        website: "https://www.walmart.com"
    }
];

export const AboutUsView: React.FC = () => {
  return (
    <div className="space-y-16 text-gray-300 text-base md:text-lg leading-relaxed max-w-4xl mx-auto pb-8">
      
      {/* Hero Section */}
      <div className="text-center px-4">
          <p className="text-lg md:text-xl text-white">
              Are you ready to take the next step toward independence and stability? Our Transitional Housing Program is{' '}
              <strong className="text-amber-400">more than just a place to stay — it's a launchpad for your future.</strong>
          </p>
          <p className="mt-4 max-w-3xl mx-auto">
              At <strong className="text-white">Urban Affordable Living</strong>, we are dedicated to empowering individuals to rebuild their lives with dignity and purpose. We believe that safe, stable housing is the cornerstone of personal and professional growth. Our mission is to provide a supportive and structured environment where residents can find not only shelter but also the resources and encouragement needed to achieve long-term independence.
          </p>
      </div>
      
      {/* Core Services Section */}
      <div className="pt-10 border-t border-gray-700/50">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Our Approach</h3>
        <p className="text-center mb-8 max-w-2xl mx-auto">
            Our services are built on three core pillars of support:
        </p>
        <div className="max-w-3xl mx-auto text-left">
            <ul className="space-y-4 text-gray-200">
                <li className="p-4 bg-gray-800/40 rounded-lg border border-gray-700">
                  <strong>Safe & Stable Housing:</strong> We provide a clean, secure, and comfortable home so you can focus on your goals.
                </li>
                <li className="p-4 bg-gray-800/40 rounded-lg border border-gray-700">
                  <strong>Opportunity & Growth:</strong> Our programs in money management and employment support equip you with the tools for success.
                </li>
                <li className="p-4 bg-gray-800/40 rounded-lg border border-gray-700">
                  <strong>A Supportive Community:</strong> We foster a respectful and compassionate environment where you can connect, share, and grow with others.
                </li>
            </ul>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="pt-10 border-t border-gray-700/50">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t) => (
                  <div key={t.id} className="bg-gray-800/30 p-6 rounded-lg border border-gray-700 relative hover:bg-gray-800/50 transition-colors">
                      {/* Quote Icon */}
                      <div className="text-amber-500/20 mb-4">
                          <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                          </svg>
                      </div>
                      <p className="text-sm md:text-base text-gray-300 mb-6 italic">"{t.content}"</p>
                      <div className="mt-auto">
                          <p className="font-bold text-white text-sm">{t.author}</p>
                          <p className="text-xs text-amber-400 uppercase tracking-wide">{t.role}</p>
                      </div>
                  </div>
              ))}
          </div>
      </div>

      {/* Sponsors Section */}
      <div className="pt-10 border-t border-gray-700/50">
           <h3 className="text-xl md:text-2xl font-bold text-gray-400 mb-8 text-center uppercase tracking-widest">Our Partners & Sponsors</h3>
           <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                {SPONSORS.map((sponsor, index) => (
                    <a 
                        key={index} 
                        href={sponsor.website} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="group flex flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-1"
                    >
                        {/* Logo Container */}
                        <div className="w-52 h-28 bg-white rounded-xl shadow-lg flex items-center justify-center p-6 overflow-hidden border-2 border-transparent group-hover:border-amber-400/50 transition-colors">
                            <img 
                                src={sponsor.logoUrl} 
                                alt={`${sponsor.name} Logo`} 
                                className="max-w-full max-h-full object-contain filter hover:brightness-110 transition-all"
                            />
                        </div>
                        <span className="text-sm font-semibold text-gray-500 group-hover:text-amber-400 transition-colors duration-300">{sponsor.name}</span>
                    </a>
                ))}
           </div>
           <p className="text-center text-sm text-gray-500 mt-10 max-w-lg mx-auto">
               We are grateful to our partners for their commitment to building a stronger, more inclusive community.
           </p>
      </div>

      {/* Closing Statement */}
      <p className="font-semibold text-center text-white pt-10 border-t border-gray-700/50">
        Whether you're getting back on your feet or starting a new chapter, we're here to walk beside you every step of the way.
      </p>
    </div>
  );
};
