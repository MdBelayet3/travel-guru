import React, { useContext } from 'react';
import AuthProvider from '../providers/AuthProvider';
import Navbar from './shared/Navbar';

const Booking = () => {
    const name = useContext(AuthProvider);
    console.log(name);
    return (
        <div className='bg-[#160929]'>
            <div className='lg:max-w-5xl max-w-[350px] mx-auto'>
                <Navbar></Navbar>
            </div>
        </div>
    );
};

export default Booking;
