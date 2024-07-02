import React, { useState } from 'react'
import { Button, Navbar } from "flowbite-react";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
    const [qLinks, setQLinks] = useState(true)
  return (
    <div className='fixed top-0 w-screen'>
     <div className={` hidden flex-row items-center justify-between px-4 py-1 bg-blue-950 xl:text-2xl text-white ${qLinks?'lg:flex':'lg:hidden'}`}>
        <p><a href="#">SCHEDULE A FREE CALL</a></p>
        <ul className='flex flex-row gap-6 items-center'>
            <li className='flex flex-row items-center gap-1'><MdOutlinePhoneIphone />+91 9911210174 ,</li>
            <li>+91 9625781262</li>
            <li className='flex flex-row items-center gap-1'><CiMail />
            sales@kanakdrishtiinfo.com</li>
            <li onClick={()=>{setQLinks(false)}} className='cursor-pointer'><RxCross2 /></li>
        </ul>
    </div>   
    <Navbar fluid rounded className='px-4'>
      <Navbar.Brand href="https://www.kanakdrishtiinfotec.in/">
        <img src="../../public/KanakLandscapeLogo.png" className="mr-3 h-6 sm:h-9" alt="Kanak Dristi Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button color="blue">Contact Us</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Packages</Navbar.Link>
        <Navbar.Link href="#">Portfolio</Navbar.Link>
        <Navbar.Link href="#">Blogs</Navbar.Link>
        <Navbar.Link href="#">Clients</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default Header
