import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
    return (
        <div className='flex h-[100vh]'>
                <div className='w-1/3 flex justify-center items-center'>
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
                <div className="w-2/3 h-full bg-[linear-gradient(to_top,rgba(0,0,0,0.4),rgba(0,0,0,0)),linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0)),url('/images/loginBanner.jpg')] bg-no-repeat bg-cover flex justify-center items-center">
                            <h1 className='text-4xl font-bold '>Join us to know more info Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse harum nesciunt nobis sunt quaerat porro, quis aut. Saepe accusamus reprehenderit, odio quasi autem soluta consequatur incidunt, cumque possimus libero dolore!</h1>
                </div>
        </div>
    );
};

export default Signin;