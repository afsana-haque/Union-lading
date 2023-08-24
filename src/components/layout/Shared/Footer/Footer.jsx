import React from 'react';
import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
<footer className="max-w-6xl mx-auto footer items-center p-4 bg-base-200 text-base-content">
  <div className="items-center grid-flow-col">
  <img src="https://i.ibb.co/9vTb6B0/logo.png" alt="" /> 
    <p>Copyright © 2023 - All right reserved</p>
  </div> 
  <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a href='/' className='text-2xl '><FaTwitter/></a> 
    <a href='/' className='text-2xl '><FaYoutube/></a> 
    <a href='/' className='text-2xl '><FaFacebookF/></a> 

  </div>
</footer>
  );
};

export default Footer;