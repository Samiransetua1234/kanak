
import React from 'react';
import { MdPhone } from "react-icons/md";
import { IoReturnUpBack } from "react-icons/io5";
import { FaSquarePhone } from "react-icons/fa6";

const RequestQuote = () => {
  return (
    <div className='w-[90%] mx-auto flex flex-col md:flex-row mt-6 gap-6'>
      <div className='md:w-2/3 flex flex-col gap-6'>
        <h4 className='text-3xl font-Nunito font-semibold text-blue-600 uppercase'>Request a quote</h4>
        <h2 className='text-4xl font-Nunito font-extrabold mb-4'>Ready to unlock your business potential?</h2>
        <div className='flex flex-col md:flex-row gap-6'>
          <div className='flex flex-col gap-2 w-full md:w-1/2 shadow-xl border-2 border-gray-200 p-4'>
            <div className='flex flex-row gap-2 items-center font-Nunito'>
              <IoReturnUpBack className='text-blue-600 text-4xl'/>
              <h4>Get a Free Quote:</h4>
            </div>
            <p className='font-Rubik font-[200]'>Our expert team will evaluate your needs and provide a tailored solution, all within 24 hours.</p>
          </div>
          <div className='flex flex-col gap-2 w-full md:w-1/2 shadow-xl border-2 border-gray-200 p-4'>
            <div className='flex flex-row gap-2 items-center font-Nunito'>
              <MdPhone className='text-blue-600 text-4xl' />
              <h4>Contact Us:</h4>
            </div>
            <p className='font-Rubik font-[200]'>Speak with our friendly advisors and ask any questions you may have.</p>
          </div>
        </div>
        <p className='font-Nunito font-[800] text-lg text-gray-600 '>Invest in your future, choose Kanak Drishti.</p>
        <div className='flex flex-col md:flex-row gap-6'>
          <div className='flex flex-row items-center gap-2 w-full md:w-1/2'>
            <FaSquarePhone className='text-6xl text-blue-600'/>
            <div className='flex flex-col font-Nunito font-[600]'>
              <h4 className='text-xl'>Call to ask any question</h4>
              <p className='self-end text-blue-500'>+91 9911210174</p>
              <p className='self-end text-blue-500'>+91 9625781262</p>
            </div>
          </div>
          <button className='bg-blue-600 hover:bg-blue-900 h-10 px-4 text-white border rounded-2xl w-full md:w-auto'>Download Brochure</button>
        </div>
      </div>
      <div className='md:w-1/3'>
        <form className='w-full p-6 md:p-10 bg-blue-600'>
          <div className='flex flex-col gap-3'>
            <input type="text" placeholder='Enter Your Name' className='p-2 border-none'/>
            <input type="email" placeholder='Enter Your Email' className='p-2 border-none'/>
            <select name="service" id="service" className='p-2 border-none'>
              <option selected disabled className='text-gray-400'>Select A Service</option>
              <option value="UI / UX design">UI / UX design </option>
              <option value="Web Development">Web Development</option>
              <option value="App Development">App Development</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Customise Software Solution">Customise Software Solution</option>
            </select>
            <textarea name="message" id="message" placeholder='Message' className='p-2 border-none'></textarea>
            <button className='bg-white text-blue-600 font-semibold py-2 hover:bg-gray-200'>Request A Quote</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RequestQuote;


