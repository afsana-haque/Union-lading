import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-1 ">
                   <div className='lg:col-span-4 card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 ml-2'>
                   <form className="card-body lg:pt-40"> 
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">ই-মেইল</span>
                            </label>
                            <input type="email" {...register("email")} name='email' placeholder="ই-মেইল" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">পাসওয়ার্ড</span>
                            </label>
                            <input type="password"  {...register("password")} name='password' placeholder="পাসওয়ার্ড" className="input input-bordered" />
                            <label className="label">
                            <Link to="/resetPassword" className="label-text-alt link link-hover">পাসওয়ার্ড ভুলেগেছেন? রিসেট করুন</Link>
                            </label>
                        </div>
                        
                        <input className="btn btn-primary bg-fuchsia-700 text-white" type="submit" value="লগইন" />

                    </form>
                   </div>
                   <div className='lg:col-span-8'>
                        <img className='h-[650px]' src="https://i.ibb.co/2khb6sX/image.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;