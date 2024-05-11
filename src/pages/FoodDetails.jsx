import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
    const {data} = useLoaderData()
    return (
        <div className='h-[100vh]'>
            <img src={data.image}/>
            <div>
                <p>{data.foodName}</p>
                <p>{data.foodName}</p>
                <p>{data.foodName}</p>
                <p>{data.foodName}</p>
                <p>{data.foodName}</p>
            </div>
        </div>
    );
};

export default FoodDetails;