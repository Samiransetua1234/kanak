import React from 'react'
import InfiniteMovingCards from './InfiniteMovingCards'

const cards = [
    { id: 1, image: "/public/client1.jpg" },
    { id: 2, image: "/public/client2.jpg" },
    { id: 3, image: "/public/client3.jpg" },
    { id: 4, image: "/public/client4.jpg" },
  ];

const Clients = () => {
  return (
    <div className='flex flex-col gap-6 mb-6'>
      <h2 className='text-4xl font-Nunito font-extrabold mb-4'>Trusted By</h2>
      <InfiniteMovingCards cards={cards}/>
    </div>
  )
}

export default Clients
