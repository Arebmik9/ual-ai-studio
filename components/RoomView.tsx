
import React from 'react';
import type { Room } from '../types';

interface RoomViewProps {
  room: Room;
  onBack: () => void;
  isExiting: boolean;
}

export const RoomView: React.FC<RoomViewProps> = ({ room, onBack, isExiting }) => {
  const ContentComponent = room.content;

  return (
    <div className={`w-full max-w-5xl mx-auto p-4 md:p-8 rounded-lg bg-black bg-opacity-80 backdrop-blur-md transition-opacity duration-500 ${isExiting ? 'opacity-0' : 'opacity-100 animate-fadeIn'}`}
    style={{
        animation: 'fadeIn 0.5s ease-in-out'
    }}>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div className="relative">
        <button 
          onClick={onBack}
          className="absolute top-0 left-0 text-gray-300 hover:text-white transition-colors flex items-center gap-2"
          aria-label="Go back to the main view"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
          </svg>
          Back to Main
        </button>
        <div className="text-center pt-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 text-amber-400">{room.title}</h1>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">{room.description}</p>
        </div>
        <div className="mt-8">
          <ContentComponent />
        </div>
      </div>
    </div>
  );
};
