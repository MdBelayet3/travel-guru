import React from 'react';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='font-montserrat'>
            <Outlet></Outlet>
        </div>

    );
};

export default Root;
