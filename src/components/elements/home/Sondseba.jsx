import React from 'react';
import Sebas from './Sebas';
import ImportantLink from './ImportantLink';
import { Link } from 'react-router-dom';



const Sondseba = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-5'>
            <div className='lg:col-span-8'>
                <div className='bg-white shadow-md pb-5'>
                <div className='flex justify-between border-b-2 py-2 items-center px-2'>
                    <h4 className='text-xl text-fuchsia-700 font-semibold'>সনদের সেবাসমূহ</h4>
                   
                </div>
                <div>
                    <Sebas></Sebas>
                </div>
                </div>
            </div>
            <div className='lg:col-span-4 '>
                <div className='mb-5 bg-white py-3 shadow-md'>
                    <h4 className='text-xl text-fuchsia-700 font-semibold ps-4 border-b-2 pb-3'>কার্যালয় আওতাভুক্তকরনের আবেদন</h4>
                    <div className='grid grid-cols-1 gap-2 p-5'>
                        <button className="btn btn-primary bg-fuchsia-700 text-white text-base ">সিটি কর্পোরেশন আন্তর্ভুক্ত</button>
                        <Link to='/signup' className="btn btn-info text-white text-base">পৌরসভা আন্তর্ভুক্ত</Link>
                        <Link to='/signup' className="btn btn-success text-white text-base">ইউনিয়ন আন্তর্ভুক্ত</Link>
                    </div>
                </div>
                <div className='bg-white py-3 shadow-md'>
                    <h4 className='text-xl text-fuchsia-700font-semibold ps-4 border-b-2 pb-3'>গুরুত্বপূর্ণ লিংক</h4>
                    <ImportantLink></ImportantLink>
                </div>

            </div>
        </div>
    );
};

export default Sondseba;