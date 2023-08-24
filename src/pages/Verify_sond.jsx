import React from 'react';
import { FaSearch } from "react-icons/fa";

const Verify_sond = () => {
    return (
        <div className='max-w-6xl mx-auto my-12 '>
            <div className='flex justify-center items-center '>
                <div className="form-control bg-slate-50 shadow-xl lg:p-40 rounded">
                    <h3 className='text-lg py-2'>আবেদন আইডি নং / সনদ নং</h3>
                    <div className="input-group ">
                        <input type="text" placeholder="অনুসন্ধান..." className="input input-bordered lg:w-96" />
                        <button className="btn btn-square w-32 bg-fuchsia-700 text-white">
                         <div className='flex gap-1 px-2'>
                            <FaSearch className='text-lg'/>
                            <p>যাচাই করুন</p>
                         </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Verify_sond;