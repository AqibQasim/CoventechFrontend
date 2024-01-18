import React,{useEffect} from 'react';
import logo from "../../assets/logo.png";
import { Link } from 'react-scroll';
import trustpilot from "../../assets/trustpilot.png"
const Footer = () => {
  useEffect(() => {
    // Load Glassdoor widget script dynamically
    const script = document.createElement('script');
    script.src = 'https://www.glassdoor.com/static/js/api/widget/v1.js';
    script.async = true;
    document.head.appendChild(script);

    // Clean up script tag on component unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <footer className="border border-gray text-gray-500 py-16 pb-8 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between pb-8">
        {/* Left Side */}
        <div className="mb-4 md:mb-0 text-md font-normal leading-9 sm:w-[50%] lg:w-[30%] md:w-[40%]">
          <a href='https://www.trustpilot.com/review/co-ventech.com' target='blank'>
          <img src={trustpilot} />
          </a>
          <div className="flex mb-1 text-center">
            <a href="https://www.linkedin.com/company/co-ventech/mycompany/" className="mr-4">LinkedIn</a>
            <span className="">|</span>
            <a href="https://twitter.com/C0VenTech" className="mx-2">X</a>
            <span className="">|</span>
            <a href="https://www.facebook.com/Coventec?mibextid=ZbWKwL" className="mx-2">Facebook</a>
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
            <h5>+1 737 2822 940 - info@coventech.com</h5>
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
