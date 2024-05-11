import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyFoodItems = () => {
    // const {data} = useLoaderData()
    return (
        <div>
            <h1 className='mt-40 text-center text-3xl font-bold'>My Food Items</h1>
            <div className='grid grid-cols-3 mx-auto w-11/12 max-w-[1200px] mt-10 gap-10'>
                {[1,2,3,4].map(item=>{
                    return <FoodItem/>
                })}
            </div>  
        </div>
    );
};

export default MyFoodItems;

// food item card 

const FoodItem = ()=>{
    return(
        <div className="card shadow-xl">
  <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    )
}
