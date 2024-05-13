import axios from 'axios';
import Lottie from 'lottie-react';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Loading from './Loading';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';


const MyFoodItems = () => {
    const [foodsData,setFoodsData] = useState([])
    const [loading,setLoading] = useState(true)
    const {userLoggedIn} = useContext(AuthContext)
    useEffect(()=>{
        setLoading(true)
        axios.get(`http://localhost:5000/myFoods/${userLoggedIn.email}`,{withCredentials:true})
        .then(res=>{
            setLoading(false)
            setFoodsData(res.data)
        })
        .catch(()=>{setLoading(false)})
    },[])

    return (
        <div className='w-11/12 max-w-[1200px] mx-auto'>
    
           {loading? <div className='h-[100vh] flex justify-center items-center'>
                <Loading/>
           </div> : <div> <h1 className='mt-40 text-center text-3xl font-bold'>My Food Items</h1>
            <div className='grid grid-cols-2 mx-auto w-11/12 max-w-[1200px] mt-10 gap-10 justify-center'>
                {foodsData.map(item=>{
                    return <FoodItem key={item._id} item={item}/>
                })}
            </div>  </div>}
        </div>
    );
};

export default MyFoodItems;

// food item card 

const FoodItem = ({item})=>{
    const {foodName,foodImage,foodCategory,foodOrigin,price,quantity,_id} = item
    return(
        <div className="flex bg-base-100 shadow-xl gap-5 border-2 p-4">
  <img src={foodImage} className='w-[200px] h-[250px] object-cover'/>
  <div className="flex flex-col w-full justify-between gap-4">
    <div className='flex flex-col justify-between h-full'>
    <h2 className="font-bold text-2xl">{foodName}</h2>
    <p className='text-lg font-semibold'>Food Category: {foodCategory}</p>
    <p className='text-lg font-semibold'>Price: ${price}</p>
    <p className='text-lg font-semibold'>Quantity: {quantity}</p>
    <p className='text-lg font-semibold'>Food Origin: {foodOrigin}</p>
    </div>
    <div className="flex w-full justify-end gap-4">
      <Link to={`/foodDetails/${_id}`}><button className="btn btn-primary border-0 bg-[#C90B12] hover:bg-[#8e282b] text-white">View Details</button></Link>
      <Link to={`/updateFoodItem/${_id}`}><button className="btn btn-primary border-0 bg-[#C90B12] hover:bg-[#8e282b] text-white">Update Item</button></Link>
    </div>
  </div>
</div>
    )
}
