import React from 'react';
import { FaPhoneSquareAlt } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-6 px-4 mt-6 w-full'>
      <div className='flex flex-col p-4 lg:w-3/5'>
        <h4 className='text-4xl font-Nunito font-semibold text-blue-600 uppercase'>About Us</h4>
        <h1 className='text-4xl font-Nunito font-extrabold mb-4'>Kanak Drishti: Business Growth Through Innovative IT Solutions</h1>
        <p className='text-lg font-Rubik font-light mb-8'>For 10 years, Kanak Drishti has empowered businesses in India with customer-centric IT solutions. We combine cutting-edge expertise with unwavering dedication to drive your business growth exponentially.</p>
        <div className='grid grid-flow-row md:grid-cols-2 gap-4'>
          <div className='flex flex-col gap-2 py-4 shadow-lg p-4 rounded-md transform transition-transform duration-300 hover:-translate-y-2'>
            <h4 className='font-Nunito text-xl text-blue-600'>Unmatched Design & Development:</h4>
            <p className='font-Rubik text-base font-light'>Our skilled professionals excel in crafting intuitive websites, captivating UI/UX, and powerful software solutions.</p>
          </div>
          <div className='flex flex-col gap-2 py-4 shadow-lg p-4 rounded-md transform transition-transform duration-300 hover:-translate-y-2'>
            <h4 className='font-Nunito text-xl text-blue-600'>Unmatched Design & Development:</h4>
            <p className='font-Rubik text-base font-light'>Our skilled professionals excel in crafting intuitive websites, captivating UI/UX, and powerful software solutions.</p>
          </div>
          <div className='flex flex-col gap-2 py-4 shadow-lg p-4 rounded-md transform transition-transform duration-300 hover:-translate-y-2'>
            <h4 className='font-Nunito text-xl text-blue-600'>Unmatched Design & Development:</h4>
            <p className='font-Rubik text-base font-light'>Our skilled professionals excel in crafting intuitive websites, captivating UI/UX, and powerful software solutions.</p>
          </div>
          <div className='flex flex-col gap-2 py-4 shadow-lg p-4 rounded-md transform transition-transform duration-300 hover:-translate-y-2'>
            <h4 className='font-Nunito text-xl text-blue-600'>Unmatched Design & Development:</h4>
            <p className='font-Rubik text-base font-light'>Our skilled professionals excel in crafting intuitive websites, captivating UI/UX, and powerful software solutions.</p>
          </div>
          <div className='flex flex-col gap-4 py-4'>
            <div className='flex flex-col text-lg font-Nunito'>
              <p>Call to ask any question</p>
              <div className='flex flex-row items-center gap-2'>
                <FaPhoneSquareAlt color='blue' className='text-4xl' />
                <div className='text-blue-600'>
                  <p>+91 9911210174</p>
                  <p>+91 9625781262</p>
                </div>
              </div>
            </div>
            <button className='text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 lg:py-1 lg:px-2 font-Nunito text-sm lg:text-xs'>Request A Quote</button>
          </div>
        </div>
      </div>
      <div className='lg:w-2/5 flex justify-center items-center'>
        <img src="../../public/about.jpg" alt="about-image" className='w-full h-auto object-cover rounded-lg shadow-lg lg:w-4/5' />
      </div>
    </div>
  );
}

export default AboutUs;
