import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
    return (
        <div className='flex h-[100vh]'>
                <div className='w-1/2 flex justify-center items-center border'>
<form className="w-11/12 max-w-[300px]">
    <h1 className='text-3xl mb-5 font-bold text-center'>Sign In</h1>
  <div className="mb-5 w-full ">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="enter your email" required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
    <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="enter your password" required />
  </div>
 
  <button type="submit" className="w-full text-white bg-[#C90B12] hover:bg-[#8e282b] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign In</button>
  <p className='mt-4 text-sm'>Don't have an account? <Link to='/signup' className='font-bold hover:underline'>Create a new account</Link></p>
</form>

                </div>
                <div>
                    
                </div>
        </div>
    );
};

export default Signin;