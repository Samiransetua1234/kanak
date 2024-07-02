import React from 'react';

const InfiniteMovingCards = ({cards}) => {
  return (
    <div className="overflow-hidden">
      <div className="flex space-x-4 animate-scroll">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex-shrink-0 w-64 h-40 text-white flex items-center justify-center rounded-lg shadow-lg"
          >
            <img src={card.image} alt={`client${card.id}`} className='w-full h-full' />
          </div>
        ))}
        {/* Duplicate the cards for smooth infinite scrolling */}
        {cards.map((card) => (
          <div
            key={card.id + cards.length}
            className="flex-shrink-0 w-64 h-40 text-white flex items-center justify-center rounded-lg shadow-lg"
          >
            <img src={card.image} alt={`client${card.id}`} className='w-full h-full' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteMovingCards;
