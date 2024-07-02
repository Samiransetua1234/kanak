import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import AboutUs from '../components/AboutUs';
import WhyChooseUs from '../components/WhyChooseUs';
import OurServices from '../components/OurServices';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import RequestQuote from '../components/RequestQuote';
import Clients from '../components/Clients';

const slides = [
    {
      image: '/carousel-1.jpg',
      caption: {
        line1:'TRANSFORM YOUR BUSINESS WITH THE LEADING IT COMPANY IN NOIDA',
        line2:'Expert IT Solutions, Exceptional Results'
      }
    },
    {
      image: '/carousel-2.jpg',
      caption: {
        line1:'THE BEST IT COMPANY IN NOIDA: EXPERT SOLUTIONS FOR YOUR BUSINESS',
        line2:'Custom IT Solutions and Software Services - KDIPL'
      }
    },
    
  ];

const LandingPage = () => {
    
  return (
    <div className='w-screen flex flex-col hide-scrollbar'>
      <div className='relative z-10'><Header/></div>

      <div className='relative top-20 flex flex-col justify-center items-center'>
      <Slider slides={slides}/>
      <AboutUs/>
      <WhyChooseUs/>
      <OurServices/>
      <RequestQuote/>
      <Testimonial/>
      <Clients/>
      <Footer/>
      </div>
    </div>
  )
}

export default LandingPage
