import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const FoodDetails = () => {
    const {data} = useLoaderData()
    const {userLoggedIn} = useContext(AuthContext)
    const {foodName,foodImage,_id,foodCategory,foodOrigin,price,quantity,description,name} = data
    return (
        <div className='h-[120vh] w-11/12 max-w-[1200px] mx-auto flex justify-center items-center'>
              <HelmetProvider>
                <Helmet>
                    <title>TasteHub || Food Details</title>
                </Helmet>
            </HelmetProvider>
            <div className='h-[450px] w-full flex items-center justify-between gap-10 mt-10'>
            <img src={foodImage} className='w-1/2 object-cover h-full'/>
            <div className='w-2/4 h-full flex flex-col gap-4'>
                <p className='font-bold text-sm'>Added by: {name} {data.email === userLoggedIn?.email? '(You)' : ''}</p>
                <p className='text-2xl font-bold'>{foodName}</p>
                <p className='text-xl'>{description}</p>
                <p className='text-xl font-bold'>Food Category: {foodCategory}</p>
                <p className='text-xl font-bold'>Food Origin: {foodOrigin}</p>
                <p className='text-xl font-bold'>Price: <span className='text-[gold]'>${price}</span></p>
               {
                quantity > 0?  <p className='text-xl font-bold'>In stock: <span className='text-[#2aaa2a]'>Yes</span></p> : <p className='text-xl font-bold'>Status: <span className='text-[#d33434]'>Out of stock</span></p>
               }
                <p className='text-xl '>Available quantity: {quantity}</p>
                <Link to={`/purchaseItem/${_id}`}><button className="btn bg-[#C90B12] hover:bg-[#8e282b] border-none text-white font-bold text-xl px-32">Purchase</button></Link>
            </div>
        </div>
        </div>
    );
};

export default FoodDetails;