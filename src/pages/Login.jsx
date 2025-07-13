import React from 'react';

const Login = () => {
    return (
        <div className="lg:max-w-7xl max-w-[350px] mx-auto">
            <p>this is login page</p>
            <div className='lg:max-w-2xl mx-auto '>
                <form>
                        <input type="email" className="input" placeholder="Email" /><br />
                        <input type="password" className="input" placeholder="Password" /><br />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
