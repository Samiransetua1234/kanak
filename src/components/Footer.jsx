import React from 'react';
import facebookLogo from '../../public/facebook-logo.jpg'; 
import instagramLogo from '../../public/instagram.jpg'; 
import linkedinLogo from '../../public/LinkedIn.jpg'; 
import xlogo from '../../public/x.jpg';
import { IoMailOpenOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";

const Footer = () => {
  return (
    <div className='bg-[#091e3e] text-white font-Nunito'>
      <div className='container mx-auto py-8 px-4 md:px-8 lg:px-16'>
        <div className='flex flex-wrap justify-between'>
          
          <div className='w-full md:w-1/4 lg:w-1/5 mb-6'>
            <img src="/KanakLandscapeLogo.png" alt="kanak-logo" className='mb-4 w-full h-auto' />
            <p className='text-sm text-center leading-relaxed'>
              Kanak Drishti is a leading IT company that specializes in providing customized solutions for businesses. From web design to custom software development, our team of experts is committed to helping you achieve your goals. Contact us today to get started.
            </p>
          </div>

          
          <div className='w-full md:w-1/4 lg:w-1/5 mb-6'>
            <p className='font-semibold text-2xl mb-4'>Get In Touch</p>
            <ul className='text-lg flex flex-col gap-2'>
              <li className='flex flex-row items-center gap-2'><IoMailOpenOutline />sales@kanakdrishtiinfo.com</li>
              <li className='flex flex-row items-center gap-2'><LuPhoneCall /> <p>+91 9911210174, <br /> +91 9625781262</p></li>
            </ul>
          </div>

          
          <div className='w-full md:w-1/4 lg:w-1/5 mb-6'>
            <p className='font-semibold text-2xl mb-4'>Quick Links</p>
            <ul className='text-lg flex flex-col gap-2'>
              <li><a href="#">Clients</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          
          <div className='w-full md:w-1/4 lg:w-1/5 mb-6'>
            <p className='font-semibold text-2xl mb-4'>Popular Links</p>
            <ul className='text-lg flex flex-col gap-2'>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Request Quote</a></li>
            </ul>
          </div>
        </div>
      </div>

      
      <div className='bg-[#050d19] py-4 px-4 md:px-8 lg:px-16 flex justify-between items-center'>
        <p className='text-sm'>
          All Rights Reserved © <a href="#" className='underline'>Kanak Drishti Infotech Pvt. Ltd.</a>
        </p>
        <div className='flex gap-3'>
          <a href="#">
            <img src={facebookLogo} alt="Facebook" className='w-5 h-5' />
          </a>
          <a href="#">
            <img src={instagramLogo} alt="Instagram" className='w-5 h-5' />
          </a>
          <a href="#">
            <img src={linkedinLogo} alt="LinkedIn" className='w-5 h-5' />
          </a>
          <a href="#">
            <img src={xlogo} alt="xlogo" className='w-5 h-5' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
