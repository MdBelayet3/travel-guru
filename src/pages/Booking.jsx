import React, { useContext } from 'react';
import AuthProvider from '../providers/AuthProvider';

const Booking = () => {
    const name = useContext(AuthProvider);
    console.log(name);
    return (
        <div>
            <h1>Its Booking page</h1>
        </div>
    );
};

export default Booking;
