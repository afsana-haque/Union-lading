import * as yup from "yup";
export const SingUpSchema = yup.object().shape({
    ChairmanBanglaName: yup.string().required("চেয়ারম্যান বাংলা নাম ফিল্ড খালি রাখা যাবে না।"),
    ChairmanEnglishName: yup.string().required("চেয়ারম্যান ইংরেজি নাম ফিল্ডখালি রাখা যাবে না।"),
    ChairmanNID: yup.string().min(10).max(13).required("এনআইডি কমপক্ষে 10 এবং ১৩ অক্ষরের হতে হবে"),
    ChairmanMobileNumber: yup.string().min(11).max(11).required("মোবাইল নাম্বার মকপক্ষে ১১ অক্ষরের হতে হবে"),
    //Secretary
    SecretaryBanglaName: yup.string().required("সচিব বাংলা নাম ফিল্ড খালি রাখা যাবে না।"),
    SecretaryEnglishName : yup.string().required("সচিব ইংরেজি নাম ফিল্ড খালি রাখা যাবে না।"),
    SecretaryNID: yup.string().min(10).max(13).required("এনআইডি কমপক্ষে 10 এবং ১৩ অক্ষরের হতে হবে"),
    SecretaryEmail: yup.string(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/).required(""),
    SecretaryPassword : yup.string().min(8).max(32).required("পাসওয়ার্ড সর্ব নিম্ন আটটা সর্বোচ্চ ৩২ টা হতে হবে "),
    SecretaryMobileNumber: yup.string().min(11).max(11).required("মোবাইল নাম্বার মকপক্ষে ১১ অক্ষরের হতে হবে"),
    //Entrepreneur
    EntrepreneurBanglaName: yup.string().required("উদ্যোক্তার বাংলা নাম ফিল্ড খালি রাখা যাবে না।"),
    EntrepreneurEnglishName : yup.string().required("উদ্যোক্তার ইংরেজি নাম ফিল্ড খালি রাখা যাবে না।"),
    EntrepreneurNID: yup.string().min(10).max(13).required("এনআইডি কমপক্ষে 10 এবং ১৩ অক্ষরের হতে হবে"),
    EntrepreneurEmail: yup.string(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/).required(""),
    EntrepreneurPassword : yup.string().min(8).max(32).required("পাসওয়ার্ড সর্ব নিম্ন আটটা সর্বোচ্চ ৩২ টা হতে হবে "),
    EntrepreneurMobileNumber: yup.string().min(11).max(11).required("মোবাইল নাম্বার মকপক্ষে ১১ অক্ষরের হতে হবে"),
    // password: yup.string().min(8).max(32).required("Password min  8 Digit."),


})