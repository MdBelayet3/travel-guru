import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaFacebook } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import Navbar from './shared/Navbar';

const Register = () => {

    // useState hook for eye btn show or not
    const [eyeBtn, setEyeBtn] = useState(false);

    // handle register function
    const handleRegister = e => {
        e.preventDefault();

        // to get input data
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        console.log(form);
        const name = form.get('name');
        console.log(name);
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);
    }

    return (
        <div className='bg-[#160929]'>
            <div className='lg:max-w-5xl max-w-[350px] mx-auto'>
                <Navbar></Navbar>
            </div>
            <div className="lg:max-w-xl max-w-[350px] mx-auto my-10">
                <div className='lg:max-w-2xl mx-auto '>
                    <form onSubmit={handleRegister}  className='border-2 rounded-xl bg-white border-gray-300 p-3 lg:px-12 lg:py-8 space-y-5'>
                        <h1 className='text-2xl font-bold'>Create an account</h1>
                        <input required type="name" className="w-full placeholder-black p-2 border-b-2" placeholder=" First Name" /><br />
                        <input required type="name" className="w-full placeholder-black p-2 border-b-2" placeholder=" Last Name" /><br />
                        <input required type="email" className="w-full placeholder-black p-2 border-b-2" placeholder=" Email" /><br />
                        <div className='relative'>
                            <input type={eyeBtn ? "text" : "password"} className="w-full placeholder-black p-2 border-b-2" placeholder="Password" /><br />
                            <div onClick={() => setEyeBtn(!eyeBtn)} className='absolute left-[90%] bottom-[25%] cursor-pointer'>
                                {eyeBtn ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-primary w-full mt-4">Create an account</button>
                            <p className='font-medium text-center mt-5'>Already have an account? <Link className='text-orange-400 hover:underline' to="/login">Login</Link></p>
                        </div>
                    </form>
                    <p className='mt-4 font-bold text-xl text-center'>or</p>
                    <div className='flex justify-center mt-5'>
                        <div className='flex bg-white items-center justify-center gap-4 border-2 rounded-3xl px-4 py-2 text-sm lg:text-xl'>
                            <FaFacebook className='text-blue-500' />
                            <p>Continue with Facebook</p>
                        </div>
                    </div>
                    <div className='flex justify-center mt-6'>
                        <div className='flex bg-white items-center justify-center gap-4 border-2 rounded-3xl px-7 py-2 text-sm lg:text-xl mb-20'>
                            <FcGoogle className='text-blue-550' />
                            <p>Continue with Google</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
