import ReactCardFlip from 'react-card-flip';
import { tokens } from '../styles/tokens';

export default function Flashcard({ card, isFlipped, setIsFlipped }) {
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="w-full max-w-2xl aspect-[3/2] cursor-pointer transition-transform duration-300 hover:scale-[1.02] mb-20"
      onClick={handleClick}
    >
      <ReactCardFlip 
        isFlipped={isFlipped} 
        flipDirection="horizontal"
        containerClassName="h-full"
      >
        {/* Front of card */}
        <div className="h-full bg-white rounded-2xl p-8 flex flex-col 
                      shadow-[0px_4px_10px_rgba(0,0,0,0.1)]
                      transition-shadow duration-300 hover:shadow-[0px_6px_15px_rgba(0,0,0,0.15)]">
          <div className="flex-1 flex flex-col items-center justify-center gap-6">
            <div className="uppercase tracking-wider text-sm text-[#777777]">
              {card?.category}
            </div>
            <div className="text-2xl md:text-3xl font-semibold text-center text-[#222222]">
              {card?.service}
            </div>
          </div>
          <div className="mt-auto pt-6 text-center text-sm text-[#777777]">
            Press SPACE to flip
          </div>
        </div>

        {/* Back of card */}
        <div className="h-full bg-white rounded-2xl p-8 flex flex-col 
                      shadow-[0px_4px_10px_rgba(0,0,0,0.1)]
                      transition-shadow duration-300 hover:shadow-[0px_6px_15px_rgba(0,0,0,0.15)]">
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="text-lg leading-relaxed text-center text-[#333333] max-w-xl">
              {card?.description}
            </div>
          </div>
          <div className="mt-auto pt-6 text-center text-sm text-[#777777]">
            Press SPACE to flip back
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
}