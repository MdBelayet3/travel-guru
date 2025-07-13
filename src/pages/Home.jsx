import React from 'react';
import Navbar from './shared/Navbar';

const Home = () => {
    return (
        <div className="relative h-screen">
            {/* Background image */}
            <div className="absolute inset-0 bg-[url('/Rectangle1.png')] bg-cover bg-center z-0"></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-80 z-10"></div>

            {/* Content */}
            <div className="relative z-20">

                <div className="lg:max-w-7xl max-w-[350px] mx-auto">
                    <Navbar></Navbar>
                    <p>this is home page</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
