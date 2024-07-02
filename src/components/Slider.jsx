import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Button } from "flowbite-react";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [current]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="relative flex justify-center items-center h-screen w-screen overflow-hidden">
      <button onClick={prevSlide} className="absolute cursor-pointer left-4 z-10 p-2 text-2xl bg-gray-800 bg-opacity-50 rounded-full hover:bg-opacity-75 transition md:left-6">
        <IoIosArrowBack />
      </button>
      <button onClick={nextSlide} className="absolute cursor-pointer right-4 z-10 p-2 text-2xl bg-gray-800 bg-opacity-50 rounded-full hover:bg-opacity-75 transition md:right-6">
        <IoIosArrowForward />
      </button>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          {index === current && (
            <div className="flex flex-col gap-4 text-white items-center justify-center h-full bg-black bg-opacity-50 p-4 animate-fade-in-scale text-center">
              <div className='flex flex-col w-[60%] justify-center items-center'>
                <p className='text-2xl font-[400] font-Nunito'>{slide.caption.line1}</p>
                <h1 className='text-[4.3rem] max-[50%] font-[800] font-Nunito'>{slide.caption.line2}</h1>
              </div>
              <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4">
              <Button color="blue" className='text-2xl'>Free Quote</Button>
                <Button color="light" className='text-2xl'>Contact Us</Button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Slider;
