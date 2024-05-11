import React, { useEffect } from 'react';

const AddFoodItem = () => {
    useEffect(()=>{
        document.querySelector('html').setAttribute('data-theme','light')
    },[])
    return (
        <div className="h-[100vh] w-full  bg-[linear-gradient(to_top,rgba(0,0,0,0.4),rgba(0,0,0,0)),linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0)),url('/images/foodCooking.jpeg')] bg-no-repeat bg-cover flex justify-center items-center gap-10 text-white">
          <form className="card-body bg-[#FFFFFF80] w-11/12 max-w-[500px]">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
        </div>
    );
};

export default AddFoodItem;