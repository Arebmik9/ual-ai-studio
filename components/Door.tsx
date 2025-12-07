
import React from 'react';

interface DoorProps {
  title: string;
  isOpen: boolean;
  onClick: () => void;
}

export const Door: React.FC<DoorProps> = ({ title, isOpen, onClick }) => {
  return (
    <div className="flex flex-col items-center gap-4 group">
      <div
        onClick={onClick}
        className="relative w-48 h-[24rem] md:w-52 md:h-[26rem] cursor-pointer"
        style={{ transformStyle: 'preserve-3d', perspective: '1500px' }}
      >
        {/* Door Frame */}
        <div className="absolute inset-0 bg-black rounded-lg shadow-inner">
             <div className="absolute inset-1 border-2 border-gray-900/40 rounded-md"></div>
        </div>

        {/* The Door Panel */}
        <div
          className={`relative inset-0 w-full h-full transition-transform duration-1000 bg-gray-800 rounded-lg shadow-lg flex flex-col items-center justify-center p-4`}
          style={{
            transformOrigin: 'left',
            transform: isOpen ? 'rotateY(-120deg)' : 'rotateY(0deg)',
            backfaceVisibility: 'hidden',
            boxShadow: 'inset 0 0 10px rgba(0,0,0,0.3), 0 5px 15px rgba(0,0,0,0.5)',
          }}
        >
          {/* Subtle inset panels */}
          <div className="w-full h-full border-2 border-gray-700/80 rounded-md shadow-inner bg-gray-900/20"></div>

          {/* Door Handle */}
          <div
            className="absolute top-1/2 right-6 w-2 h-20 -translate-y-1/2 bg-amber-400 rounded-full shadow-md"
            style={{
              boxShadow: 'inset 0 0 4px rgba(0,0,0,0.4)'
            }}
          ></div>
        </div>
      </div>
      
      {/* Title below the door */}
      <h3 className="text-lg md:text-xl font-bold text-gray-300 tracking-wide transition-colors group-hover:text-white text-center">
        {title}
      </h3>
    </div>
  );
};
