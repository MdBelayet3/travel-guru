import React from 'react';
import Navbar from './shared/Navbar';
import TouristCarousel from './TouristCarousel';

const Home = () => {
    return (
        <div className="relative h-screen">
            {/* Background image */}
            <div className="fixed inset-0 bg-[url('/Rectangle1.png')] bg-cover bg-center z-0"></div>

            {/* Overlay */}
            <div className="fixed inset-0 bg-black bg-opacity-80 z-10"></div>

            {/* Content */}
            <div className="relative z-20">

                <div className="lg:max-w-7xl max-w-[350px] mx-auto">
                    <div className='sticky top-2 bg-[#160929] z-50 '>
                        <Navbar></Navbar>
                    </div>
                    <h1 className='text-center text-4xl font-semibold text-white my-5'>Travel Guru</h1>
                    <p className='text-white lg:px-40 mb-5'>Travel Guru offers hotel booking, tourist guides, transport, custom tours, and full travel support for a seamless journey experience.</p>
                    <TouristCarousel></TouristCarousel>
                    <p className='text-white lg:px-40 pb-32 pt-8'>Travel Guru is a complete travel solution platform offering hotel bookings, tourist guide services, transport arrangements, and custom tour packages. We ensure a smooth, safe, and enjoyable travel experience for all. Whether you're exploring new places or planning a vacation, Travel Guru is here to make your journey effortless and memorable.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
