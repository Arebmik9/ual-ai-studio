
import React, { useState, useEffect } from 'react';
import { Door } from './components/Door';
import { RoomView } from './components/RoomView';
import { ROOM_DATA } from './constants';
import type { RoomId } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<RoomId | 'home'>('home');
  const [isExiting, setIsExiting] = useState<boolean>(false);
  const [openingDoorId, setOpeningDoorId] = useState<RoomId | null>(null);

  const bgUrl = 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop';

  useEffect(() => {
    const img = new Image();
    img.src = bgUrl;
  }, []);

  const handleDoorClick = (roomId: RoomId) => {
    setOpeningDoorId(roomId);
    setIsExiting(true);
    setTimeout(() => {
      setCurrentView(roomId);
      setIsExiting(false);
    }, 800); 
  };

  const handleGoBack = () => {
    setIsExiting(true);
    setTimeout(() => {
      setCurrentView('home');
      setOpeningDoorId(null);
      setIsExiting(false);
    }, 500);
  };

  const currentRoomData = ROOM_DATA.find(room => room.id === currentView);

  return (
    <div
      className="min-h-screen w-full font-sans transition-all duration-500 bg-cover bg-center"
      style={{
        backgroundImage: `url('${bgUrl}')`,
      }}
    >
      <div className="min-h-screen w-full bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center p-4">
        {currentView === 'home' ? (
          <div
            className={`transition-opacity duration-500 ${isExiting ? 'opacity-0' : 'opacity-100'}`}
          >
            <header className="text-center mb-16">
               <div className="mb-4">
                  <img 
                      src="https://dl.dropboxusercontent.com/scl/fi/0ttfmzonqzaxj7uirpy6j/Simple-Aesthetic-Elegant-Business-Real-Estate-Logo-2.png?rlkey=9d2im1gyvxo53y2h8u9d9gg0u&raw=1"
                      alt="Urban Affordable Living Logo"
                      className="h-36 md:h-48 w-auto mx-auto filter invert"
                  />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-amber-400 tracking-widest mt-2 mb-4">REBUILD. REFOCUS. RISE.</h2>
              <p className="mt-2 text-lg md:text-xl text-gray-300 font-medium">Your new beginning starts here.</p>
            </header>
            <main className="flex flex-wrap justify-center items-start gap-x-8 gap-y-16 md:gap-x-16 md:gap-y-24" style={{ perspective: '1500px' }}>
              {ROOM_DATA.map((room) => (
                <Door
                  key={room.id}
                  title={room.title}
                  isOpen={openingDoorId === room.id}
                  onClick={() => handleDoorClick(room.id)}
                />
              ))}
            </main>
             <footer className="text-center mt-20 text-gray-400">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">Contact Us</h3>
                <p>512-762-7914</p>
                <p>urbanaffordableliving@yahoo.com</p>
            </footer>
          </div>
        ) : (
          currentRoomData && (
            <RoomView
              room={currentRoomData}
              onBack={handleGoBack}
              isExiting={isExiting}
            />
          )
        )}
      </div>
    </div>
  );
};

export default App;
