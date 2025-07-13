import React from 'react';
import { Outlet } from 'react-router';

const AllComponent = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default AllComponent;