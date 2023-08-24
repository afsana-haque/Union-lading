import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaQuestionCircle, FaCheck } from "react-icons/fa";
import { SingUpSchema } from '../helpers/validation/auth/SignupSchema';
import { yupResolver } from '@hookform/resolvers/yup';



const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(SingUpSchema) });
    const onSubmit = () =>{

    }
    return (
        <div className='max-w-6xl mx-auto'>
            <div className="hero min-h-screen bg-base-100">
                <div className='grid grid-cols-1 lg:grid-cols-12 md:grid-cols-1 gap-3 mx-6 my5-6'>

                    <div className="lg:col-span-8 my-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='card flex-shrink-0 w-full max-w-3xl shadow-2xl bg-base-100 mb-4'>
                        <div className="card-body ml-2">
                            <h3 className='text-2xl font-semibold m-4 text-white text-center bg-fuchsia-700 p-2 rounded'>চেয়ারম্যানের তথ্য</h3>
                            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">নাম (বাংলায়) </span>
                                    </label>
                                    <input type="text" {...register("ChairmanBanglaName")}className="input input-bordered" />
                                    {errors.ChairmanBanglaName && <span className='text-red-700 mt-3'>{errors.ChairmanBanglaName.message}</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">নাম (ইংরেজিতে)</span>
                                    </label>
                                    <input type="text" {...register("ChairmanEnglishName")}className="input input-bordered" />
                                    {errors.ChairmanEnglishName && <span className='text-red-700 mt-3'>{errors.ChairmanEnglishName.message}</span>}
                                </div>
                            </div>
                            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">জাতীয় পরিচয়পত্র নম্বর </span>
                                </label>
                                <input type="number" {...register("ChairmanNID")}  className="input input-bordered" />
                                    {errors.ChairmanNID && <span className='text-red-700 mt-3'>{errors.ChairmanNID.message}</span>}
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">মোবাইল নম্বর </span>
                                </label>
                                <input type="number" {...register("ChairmanMobileNumber")}  className="input input-bordered" />
                                {errors.ChairmanMobileNumber && <span className='text-red-700 mt-3'>{errors.ChairmanMobileNumber.message}</span>}
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className='card flex-shrink-0 w-full max-w-3xl shadow-2xl bg-base-100 mb-4'>
                        <div className="card-body ml-2">
                            <h3 className='text-2xl font-semibold m-4 text-white text-center bg-fuchsia-700 p-2 rounded'>ইউনিয়ন পরিষদ সচিবের তথ্য </h3>
                            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">নাম (বাংলায়) </span>
                                    </label>
                                    <input type="text" {...register("SecretaryBanglaName")}  className="input input-bordered" />
                                    {errors.SecretaryBanglaName && <span className='text-red-700 mt-3'>{errors.SecretaryBanglaName.message}</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">নাম (ইংরেজিতে)</span>
                                    </label>
                                    <input type="text" {...register("SecretaryEnglishName")}  className="input input-bordered" />
                                    {errors.SecretaryEnglishName && <span className='text-red-700 mt-3'>{errors.SecretaryEnglishName.message}</span>}
                                </div>
                            </div>
                            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">জাতীয় পরিচয়পত্র নম্বর </span>
                                </label>
                                <input type="number" {...register("SecretaryNID")} className="input input-bordered" />
                                {errors.SecretaryNID && <span className='text-red-700 mt-3'>{errors.SecretaryNID.message}</span>}
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">মোবাইল নম্বর </span>
                                </label>
                                <input type="number" {...register("SecretaryMobileNumber")}   className="input input-bordered" />
                                {errors.SecretaryMobileNumber && <span className='text-red-700 mt-3'>{errors.SecretaryMobileNumber.message}</span>}
                            </div>
                            </div>
                            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">ই-মেইল</span>
                                </label>
                                <input type="email" {...register("SecretaryEmail")} className="input input-bordered" />
                                {errors.SecretaryEmail && <span className='text-red-700 mt-3'>{errors.SecretaryEmail.message}</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">পাসওয়ার্ড </span>
                                </label>
                                <input type="password" {...register("SecretaryPassword")} className="input input-bordered" />
                                {errors.SecretaryPassword && <span className='text-red-700 mt-3'> {errors.SecretaryPassword.message}</span>}
                            </div> 
                      
                            </div>
                        </div>
                        </div>
                        <div className='card flex-shrink-0 w-full max-w-3xl shadow-2xl bg-base-100 mb-4'>
                        <div className="card-body ml-2">
                            <h3 className='text-2xl font-semibold m-4 text-white text-center bg-fuchsia-700 p-2 rounded'>উদ্যোক্তার তথ্য</h3>
                            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">নাম (বাংলায়) </span>
                                    </label>
                                    <input type="text" {...register("EntrepreneurBanglaName")}  className="input input-bordered" />
                                    {errors.EntrepreneurBanglaName && <span className='text-red-700 mt-3'>{errors.EntrepreneurBanglaName.message}</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">নাম (ইংরেজিতে)</span>
                                    </label>
                                    <input type="text" {...register("EntrepreneurEnglishName")}   className="input input-bordered" />
                                    {errors.EntrepreneurEnglishName && <span className='text-red-700 mt-3'>{errors.EntrepreneurEnglishName.message}</span>}
                                </div>
                            </div>
                            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">জাতীয় পরিচয়পত্র নম্বর </span>
                                </label>
                                <input type="number" {...register("EntrepreneurNID")} className="input input-bordered" />
                                {errors.EntrepreneurNID && <span className='text-red-700 mt-3'>{errors.EntrepreneurNID.message}</span>}
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">মোবাইল নম্বর </span>
                                </label>
                                <input type="number" {...register("EntrepreneurMobileNumber")}   className="input input-bordered" />
                                {errors.EntrepreneurMobileNumber && <span className='text-red-700 mt-3'>{errors.EntrepreneurMobileNumber.message}</span>}
                            </div>
                            </div>
                            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">ই-মেইল</span>
                                </label>
                                <input type="email" {...register("EntrepreneurEmail")} className="input input-bordered" />
                                {errors.EntrepreneurEmail && <span className='text-red-700 mt-3'>{errors.EntrepreneurEmail.message}</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">পাসওয়ার্ড </span>
                                </label>
                                <input type="password" {...register("EntrepreneurPassword")} className="input input-bordered" />
                                {errors.EntrepreneurPassword && <span className='text-red-700 mt-3'> {errors.EntrepreneurPassword.message}</span>}
                            </div> 
                      
                            </div>
                        </div>
                        </div>
                        <div className='card flex-shrink-0 w-full max-w-3xl shadow-2xl bg-base-100'>
                        <div className="card-body ml-2">
                            <h3 className='text-2xl font-semibold m-4 text-white text-center bg-fuchsia-700 p-2 rounded'>নিয়োগ এলাকা তথ্য</h3>
                            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">ঠিকানার ধরণ</span>
                                    </label>
                                    <input type="name" {...register("address")}  className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">বিভাগ</span>
                                    </label>
                                    <input type="text" {...register("department")} name='text'  className="input input-bordered" />
                                </div>
                            </div>
                            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">জেলা</span>
                                </label>
                                <input type="text" {...register("district")} name='text'  className="input input-bordered" />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">থানা / উপজেলা</span>
                                </label>
                                <input type="text" {...register("Upazila")} name='text'  className="input input-bordered" />
                            </div>
                            </div>
                            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">সিটি কর্পোরেশন</span>
                                </label>
                                <input type="text" {...register("cityCorporation")} className="input input-bordered" />
                            </div> 
   
                            </div>
                        </div>
                        </div>
                        <input className="btn btn-primary bg-fuchsia-700 text-white mt-4" type="submit" value=" নিবন্ধন করুন" />
                        </form>
                
                        
                    </div>
                    <div className='lg:col-span-4 my-5'>
                        <h1 className="bg-lime-400 p-2 text-xl font-bold flex items-center gap-2 rounded"><FaQuestionCircle className='text-fuchsia-700'/><span>নির্দেশনা</span></h1>
                        <div className='px-2'>
                            <p><span className='text-3xl font-extrabold'>.</span> (*) চিহ্নিত ক্ষেত্রগুলি পূরণ করা বাধ্যতামূলক। অন্যগুলো ঐচ্ছিক।</p>
                            <p><span className='text-3xl font-extrabold'>.</span> আপনার মোবাইল ফোন নম্বর এর মোট সংখ্যা হবে ১১ ডিজিট।</p>
                            <p><span className='text-3xl font-extrabold'>.</span> আপনার জাতীয় পরিচয়পত্রের মোট সংখ্যা হবে ১০ অথবা ১৭ ডিজিট।।</p>

                            <p><span className='text-3xl font-extrabold'>.</span> আপনার সঠিক একাউন্ট ধরন নির্বাচন করুন।</p>
                            <p><span className='text-3xl font-extrabold'>.</span> তথ্য জমা দেয়ার পর একটি যাচাইকরণ কোড আপনার মোবাইলে পাঠানো হবে।</p>
                            <p><span className='text-3xl font-extrabold'>.</span> তথ্য জমা দেওয়ার পর আপনার মোবাইলে একটি যাচাইকরণ কোড প্রেরণ করা হবে।</p>
                            <p><span className='text-3xl font-extrabold'>.</span> আপনার প্রেরিত তথ্য যাচাই করার পর আপনার অ্যাকাউন্ট দিয়ে আপনি কার্যক্রম পরিচালনা করতে পারবেন।</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            );
};

            export default SignUp;



