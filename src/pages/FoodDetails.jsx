import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
    const {data} = useLoaderData()
    const {foodName,foodImage,_id} = data
    return (
        <div className='h-[120vh] w-11/12 max-w-[1200px] mx-auto'>
            <div className='h-full flex items-center justify-between gap-5'>
            <img src={foodImage} className='w-1/4'/>
            <div className='w-2/4'>
                <p>{foodName}</p>
                <Link to={`/purchaseItem/${_id}`}>Purchase</Link>
            </div>
        </div>
        </div>
    );
};

export default FoodDetails;