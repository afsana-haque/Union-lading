import React from 'react';
import Banner from '../../../elements/home/Banner';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const navItem = <>
    <li><Link to=''>প্রথম পাতা</Link></li>
    <li tabIndex={0}>
      <details>
        <summary>সেবাসমূহ</summary>
        <ul className="p-2">
          <li><Link to=''>Submenu 1</Link></li>
          <li><Link to=''>Submenu 2</Link></li>
        </ul>
      </details>
    </li>
    <li><Link to=''>আবেদনর অবস্থা জানুন </Link></li>
    <li><Link to='/verifySond'>সনদ যাচাই</Link></li>
    <li><Link to=''>ব্যবহার নির্দেশিকা</Link></li>
    <li><Link to=''>ষ্মার্ট বাংলাদেশ</Link></li>
    <li><Link to=''>যোগাযোগ</Link></li>

  </>
  return (

    <div>
      <Banner></Banner>
      <div className="navbar bg-slate-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <div className='flex'>
                <p>মেনু অনুসন্ধান করুন</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItem}
            </ul>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navItem}
            </ul>
          </div>
        </div>

      </div>
     
    </div>
  );
};

export default NavBar;