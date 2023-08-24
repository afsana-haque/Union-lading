import React from 'react';

const ResetPassword = () => {
    return (
        <div className='max-w-6xl mx-auto my-12 '>
            <div className='flex justify-center items-center '>
                
                <div className="form-control bg-slate-50 shadow-xl ">
                <h3 className='text-lg border-2 p-2'>রিসেট পাসওয়ার্ড</h3>
                    <div className='lg:px-28 lg:py-12 p-4'>
                        <h4>ই-মেইল :</h4>
                    <input type="text" className="input input-bordered w-full max-w-xs mb-2" />
                    <input className="btn btn-primary bg-fuchsia-700 text-white" type="submit" value="পাসওয়ার্ড রিসেট করুন" />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;