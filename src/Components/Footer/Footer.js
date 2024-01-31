import React,{useEffect} from 'react';
import logo from "../../assets/logo.png";
import { Link } from 'react-scroll';
import trustpilot from "../../assets/trustpilot.png"
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="border border-gray text-gray-500 py-16 pb-8 mt-16 xsm:text-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-between pb-8">
        {/* Left Side */}
        <div className="mb-4 md:mb-0 text-md font-normal leading-9 sm:w-[50%]  lg:w-[30%] md:w-[40%]">
          <a href='https://www.trustpilot.com/review/co-ventech.com' target='blank'>
          <img src={trustpilot} />
          </a>          <div className="flex mb-1 text-center">
            <a href="https://www.linkedin.com/company/co-ventech/mycompany/" className="mr-4 text-secondary">LinkedIn</a>
            <span className="">|</span>
            <a href="https://twitter.com/C0VenTech" className="mx-2 text-secondary">X</a>
            <span className="">|</span>
            <a href="https://www.facebook.com/Coventec?mibextid=ZbWKwL" className="mx-2 text-secondary">Facebook</a>
          </div>
          <div>
            <h5>Working Worldwide</h5>
          </div>
        </div>

        {/* Right Side */}
        <div className="text-center md:text-left text-md font-normal leading-8 lg:w-[30%] md:w-[40%] sm:w-[50%]">
          <div className="mb-2">
        <Link to='Overview' smooth={true} duration={800} className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
          <img src={logo} className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white">Co-ventech</span>
        </Link>
          </div>
          <div className="mb-2">
          <a href="tel:+17372822940" className="flex items-center">
            <FaPhoneAlt className="mr-2" /> {/* Adjust margin as needed */}
            <h5 className="text-secondary"> +1 737 2822 940 </h5>
          </a>
          <a href="mailto:info@coventech.com" className="flex items-center">
            <MdOutlineEmail  className="mr-2" /> {/* Adjust margin as needed */}
            <h5 className="text-secondary"> info@coventech.com </h5>
          </a>
          </div>
          <div>
            <h5>Headquarter (USA, Texas office): 5900 Balcones Drive Austin, TX, United States 78731</h5>
          </div>
        </div>
        
      </div>
      <div className='text-center'>
            <h5>© 2023 CoVenTech – Venture your technology dreams. All rights reserved.</h5>
        </div>
    </footer>
  );
};

export default Footer;