import React from 'react';
import { EMPLOYMENT_PROGRAMS } from '../constants';

const JourneyStep: React.FC<{ number: string; title: string; description: string }> = ({ number, title, description }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 flex flex-col items-center justify-center h-16 w-16 rounded-full bg-amber-500/10 border-2 border-amber-500/30 text-amber-400">
            <span className="text-2xl font-bold">{number}</span>
        </div>
        <div>
            <h4 className="text-lg font-bold text-white">{title}</h4>
            <p className="text-gray-400">{description}</p>
        </div>
    </div>
);

export const EmploymentProgramsView: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Introduction */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-lg text-gray-300">
          Securing meaningful employment is a critical step toward independence. Our Employment Support program is designed not just to help you find a job, but to build a career. We provide personalized coaching, practical tools, and direct connections to employers to help you achieve your professional goals.
        </p>
      </div>

      {/* Core Services */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">Our Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EMPLOYMENT_PROGRAMS.map((program) => {
            const Icon = program.icon;
            return (
              <div key={program.title} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-amber-500 hover:bg-gray-800 transition-all transform hover:-translate-y-1 h-full">
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
      </div>
      
      {/* The Journey Section */}
      <div>
        <div className="flex justify-center mb-8">
            <img 
                src="https://dl.dropboxusercontent.com/scl/fi/8x8fluhfmgunstag3gell/website-picture.png?rlkey=9vvmw9sj2omxe465q800va7ss"
                alt="A group of people collaborating"
                className="rounded-lg shadow-xl max-w-[12rem] w-full aspect-square object-cover"
            />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-10">Your Journey to Employment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 max-w-4xl mx-auto">
          <JourneyStep 
            number="01" 
            title="Personalized Assessment"
            description="We start by understanding your skills, experience, and career aspirations to create a tailored plan just for you." 
          />
          <JourneyStep 
            number="02" 
            title="Action Plan & Skill Building"
            description="Together, we build your resume, practice interviewing, and identify any certifications that can boost your career." 
          />
          <JourneyStep 
            number="03" 
            title="Connect with Employers"
            description="We connect you directly with our network of fair-chance employers and guide you through the application process." 
          />
          <JourneyStep 
            number="04" 
            title="Long-Term Support"
            description="Our support doesn't stop once you're hired. We're here to help you navigate your new role and plan for future growth." 
          />
        </div>
      </div>

    </div>
  );
};