import React from 'react';
import AllComponent from '../pages/AllComponent';

const Root = () => {
    return (
        <div className="relative h-screen">
            {/* Background image */}
            <div className="absolute inset-0 bg-[url('/Rectangle1.png')] bg-cover bg-center z-0"></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>

            {/* Content */}
            <div className="relative z-20">
                <h1 className="text-white text-4xl">Welcome to Travel World</h1>
                <AllComponent></AllComponent>
            </div>
            
        </div>

    );
};

export default Root;