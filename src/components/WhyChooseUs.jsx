import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className='flex flex-col gap-6 justify-center text-center items-center max-w-[90%] px-4 py-8'>
      <h4 className='text-3xl font-Nunito font-semibold text-blue-600 uppercase'>WHY CHOOSE US</h4>
      <h2 className='text-4xl font-Nunito font-extrabold mb-4'>Our proven expertise encompasses:</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='p-4 md:order-1'>
          <img src="../../public/it-solution.jpg" alt="custom-it-solution" className='w-full h-48 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105' />
          <div className='mt-2'>
            <h5 className='text-xl font-bold'>Custom IT Solutions:</h5>
            <p>Streamline operations and enhance efficiency with personalized software development.</p>
          </div>
        </div>
        <div className='p-4'>
          <img src="../../public/e-commerce-solution.jpg" alt="e-commerce-solution" className='w-full h-48 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105' />
          <div className='mt-2'>
            <h5 className='text-xl font-bold'>E-Commerce Solutions:</h5>
            <p>Boost your online sales with our comprehensive e-commerce solutions.</p>
          </div>
        </div>
        <div className='p-4 md:row-span-2'>
          <img src="../../public/feature.jpg" alt="feature-image" className='w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105' />
        </div>
        <div className='p-4'>
          <img src="../../public/graphic-design.jpeg" alt="graphic-design" className='w-full h-48 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105' />
          <div className='mt-2'>
            <h5 className='text-xl font-bold'>Graphic Design:</h5>
            <p>Create visually stunning designs that captivate and engage your audience.</p>
          </div>
        </div>
        <div className='p-4 '>
          <img src="../../public/digital-marketing.jpg" alt="digital-marketing" className='w-full h-48 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105' />
          <div className='mt-2'>
            <h5 className='text-xl font-bold'>Digital Marketing:</h5>
            <p>Enhance your online presence and reach your target audience effectively.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs;
