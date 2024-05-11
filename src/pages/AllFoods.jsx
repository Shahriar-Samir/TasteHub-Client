import React from 'react';
import { ToastContainer } from 'react-toastify';

const AllFoods = () => {
    return (
        <div>
            <ToastContainer/>
            <div className="bg-[linear-gradient(to_top,rgba(0,0,0,0.4),rgba(0,0,0,0)),linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0)),url('/images/loginBanner.jpg')] bg-no-repeat bg-cover flex justify-center items-center gap-10 h-[100vh]">
                <h1 className='text-5xl font-bold'>All Food Items</h1>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default AllFoods;