import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <div className='bg-fuchsia-700 py-2'>
                <div className='flex justify-between items-center lg:px-4'>
                    <h3 className='lg:text-xl font-bold text-white'>অনলাইন সার্টিফিকেট সিস্টেম</h3>

                    <div className='flex gap-1  '>
                        <Link to="/login" className="btn btn"><CiLogin className='text-xl '/>লগইন</Link>
                        <button className="btn btn"><FaUserAlt/>নাগরিক কর্ণার</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;