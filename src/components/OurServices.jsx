import React from 'react';


const OurServices = () => {
  return (
    <div className='flex flex-col items-center gap-6 px-4 py-8'>
      <h4 className='text-3xl font-Nunito font-semibold text-blue-600 uppercase'>OUR SERVICES</h4>
      <h2 className='text-4xl font-Nunito font-extrabold mb-4 text-center'>Custom IT Solutions for Your Successful Business</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        
          <div className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flip-card-front top-0'>
                <img src="/it-solution.jpg" alt="service" className='w-full h-2/3 object-cover rounded-t-lg' />
                <h1 className='text-2xl font-bold mt-10'>UI / UX</h1>
              </div>
              <div className='flip-card-back px-4'>
                <p className='text-base mb-4'>We are a team of skilled UI/UX designers who are passionate about creating exceptional user experiences.</p>
                <button className='bg-white text-blue-600 font-bold py-2 px-4 rounded'>Learn More</button>
              </div>
            </div>
          </div>

          <div className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flip-card-front top-0'>
                <img src="/it-solution.jpg" alt="service" className='w-full h-2/3 object-cover rounded-t-lg' />
                <h1 className='text-2xl font-bold mt-10'>Web / App Development</h1>
              </div>
              <div className='flip-card-back px-4'>
                <p className='text-base mb-4'>At our company, we create custom apps and websites that are tailor-made to our clients' unique needs and goals.</p>
                <button className='bg-white text-blue-600 font-bold py-2 px-4 rounded'>Learn More</button>
              </div>
            </div>
          </div>

          <div className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flip-card-front top-0'>
                <img src="/it-solution.jpg" alt="service" className='w-full h-2/3 object-cover rounded-t-lg' />
                <h1 className='text-2xl font-bold mt-10'>Digital Marketing</h1>
              </div>
              <div className='flip-card-back px-4'>
                <p className='text-base mb-4'>We are experts in digital marketing, from search engine optimization (SEO) to social media management and advertising.</p>
                <button className='bg-white text-blue-600 font-bold py-2 px-4 rounded'>Learn More</button>
              </div>
            </div>
          </div>

          <div className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flip-card-front top-0'>
                <img src="/it-solution.jpg" alt="service" className='w-full h-2/3 object-cover rounded-t-lg' />
                <h1 className='text-2xl font-bold mt-10'>Graphic Designing</h1>
              </div>
              <div className='flip-card-back px-4'>
                <p className='text-base mb-4'>We are a team of talented graphic designers who create visually stunning designs that communicate our clients' brand message.</p>
                <button className='bg-white text-blue-600 font-bold py-2 px-4 rounded'>Learn More</button>
              </div>
            </div>
          </div>

          <div className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flip-card-front top-0'>
                <img src="/it-solution.jpg" alt="service" className='w-full h-2/3 object-cover rounded-t-lg' />
                <h1 className='text-2xl font-bold mt-10'>Customised Software Solutions</h1>
              </div>
              <div className='flip-card-back px-4'>
                <p className='text-base mb-4'>We create custom software that drives growth and innovation.</p>
                <button className='bg-white text-blue-600 font-bold py-2 px-4 rounded'>Learn More</button>
              </div>
            </div>
          </div>

          <div className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flip-card-front top-0'>
                <img src="/it-solution.jpg" alt="service" className='w-full h-2/3 object-cover rounded-t-lg' />
                <h1 className='text-2xl font-bold mt-10'>E-Commerce Solutions</h1>
              </div>
              <div className='flip-card-back px-4'>
                <p className='text-base mb-4'>Our e-commerce solutions are fully customizable, allowing you to create a unique online store that reflects your brand and meets your business goals.</p>
                <button className='bg-white text-blue-600 font-bold py-2 px-4 rounded'>Learn More</button>
              </div>
            </div>
          </div>
   
      </div>
    </div>
  );
};

export default OurServices;
