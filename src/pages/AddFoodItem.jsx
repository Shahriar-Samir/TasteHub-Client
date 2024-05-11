import React, { useEffect } from 'react';

const AddFoodItem = () => {

    return (
        <div className="h-[150vh] w-full  bg-[linear-gradient(to_top,rgba(0,0,0,0.4),rgba(0,0,0,0)),linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0)),url('/images/foodCooking.jpeg')] bg-no-repeat bg-cover flex justify-center items-center gap-10 text-white">
          <form className="card-body bg-[#FFFFFF80] w-11/12 max-w-[500px] mt-32">
            <h1 className='text-center text-3xl font-bold'>Add a new food item</h1>
            <div className='grid grid-cols-2 gap-4 items-center mt-4'>
            <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Food Name</span>
          </label>
          <input type="text" placeholder="Food name" className="input input-bordered bg-transparent border-white placeholder-slate-300" name='foodName' required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Food Image</span>
          </label>
          <input type="text" placeholder="Food image URL" className="input input-bordered bg-transparent border-white placeholder-slate-300" name='foodImage' required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Food Category</span>
          </label>
          <input type="text" placeholder="Food category" className="input input-bordered bg-transparent border-white placeholder-slate-300" name='foodCategory' required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Quantity</span>
          </label>
          <input type="number" min='0' placeholder="Quantity" className="input input-bordered bg-transparent border-white placeholder-slate-300" name='quantity' required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Price</span>
          </label>
          <input type="number" min='1' placeholder="Price" className="input input-bordered bg-transparent border-white placeholder-slate-300" name='price' required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">User Name</span>
          </label>
          <input type="text" placeholder="User name" className="input input-bordered bg-transparent border-white placeholder-slate-300" name='name' required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">User Email</span>
          </label>
          <input type="email" placeholder="User email" className="input input-bordered bg-transparent border-white placeholder-slate-300" name='email' required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Food Origin</span>
          </label>
          <input type="text" placeholder="Food origin" className="input input-bordered bg-transparent border-white placeholder-slate-300" name='foodOrigin' required />
        </div>
        <div className="form-control  col-span-2">
          <label className="label">
            <span className="label-text text-white">Description</span>
          </label>
          <textarea placeholder="Description" className="input input-bordered bg-transparent border-white placeholder-slate-300 h-[10vh] max-h-[15vh]" name='description' required></textarea>
        </div>
            </div>  
        <div className="form-control mt-6">
          <button className="btn border-0 text-white bg-[#C90B12] hover:bg-[#8e282b]">Add Food Item</button>
        </div>
      </form>
        </div>
    );
};

export default AddFoodItem;