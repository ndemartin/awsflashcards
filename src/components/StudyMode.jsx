import { useState, useEffect, useCallback } from 'react';
import Flashcard from './Flashcard';
import { tokens } from '../styles/tokens';

export default function StudyMode({ cards }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
    setIsFlipped(false); // Reset flip state when navigating
  }, [cards.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    setIsFlipped(false); // Reset flip state when navigating
  }, [cards.length]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === ' ') {
        e.preventDefault();
        setIsFlipped(prev => !prev); // Toggle flip state on space bar
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [goToNext, goToPrevious]);

  return (
    <div className="min-h-screen bg-[#FAFAFA] overflow-y-auto p-4">
      <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* Flashcard Container */}
        <div className="w-full">
          <Flashcard 
            card={cards[currentIndex]} 
            isFlipped={isFlipped}
            setIsFlipped={setIsFlipped}
          />
        </div>

        {/* Navigation Container with explicit spacing */}
        <div className="relative w-full flex justify-center" style={{ marginTop: '40px' }}>
          <div className="flex items-center gap-8">
            <button
              onClick={goToPrevious}
              className="h-12 px-6 
                       bg-white border-2 border-[#0073E6] rounded-xl
                       text-[#0073E6] font-medium text-sm
                       shadow-[0px_2px_5px_rgba(0,0,0,0.1)]
                       transition-all duration-300
                       hover:shadow-[0px_4px_8px_rgba(0,0,0,0.15)]
                       hover:scale-105
                       focus:outline-none focus:ring-2 focus:ring-[#0073E6] focus:ring-offset-2"
            >
              Previous
            </button>

            <div className="px-6 py-3 bg-white rounded-xl shadow-[0px_2px_5px_rgba(0,0,0,0.1)]
                          min-w-[100px] text-center">
              <span className="text-[#333333] text-sm">
                {currentIndex + 1} / {cards.length}
              </span>
            </div>

            <button
              onClick={goToNext}
              className="h-12 px-6
                       bg-[#0073E6] rounded-xl
                       text-white font-medium text-sm
                       shadow-[0px_2px_5px_rgba(0,0,0,0.1)]
                       transition-all duration-300
                       hover:bg-[#0066CC]
                       hover:shadow-[0px_4px_8px_rgba(0,0,0,0.15)]
                       hover:scale-105
                       focus:outline-none focus:ring-2 focus:ring-[#0073E6] focus:ring-offset-2"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}