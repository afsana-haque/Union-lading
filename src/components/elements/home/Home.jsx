import React from 'react';
import Sondseba from './Sondseba';
import Banner from './Banner';
import NavBar from '../../layout/Shared/NavBar/NavBar';

const Home = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <NavBar></NavBar>
            <Sondseba></Sondseba>
        </div>
    );
};

export default Home;