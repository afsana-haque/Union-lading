import React from 'react';
import Header from './Shared/Header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Shared/Footer/Footer';

const Main = () => {
    const location = useLocation();
    console.log(location);
    const noHeaderFooter = location.pathname.includes("login");
    return (
        <div className=' '>
        {noHeaderFooter || <Header></Header>}
        <Outlet></Outlet>
        {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;