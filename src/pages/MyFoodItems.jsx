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
        <div>
    
           {loading? <div className='h-[100vh] flex justify-center items-center'>
                <Loading/>
           </div> : <div> <h1 className='mt-40 text-center text-3xl font-bold'>My Food Items</h1>
            <div className='grid grid-cols-3 mx-auto w-11/12 max-w-[1200px] mt-10 gap-10'>
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
    const {foodName,foodImage,_id} = item
    return(
        <div className="card shadow-xl">
  <figure><img src={foodImage} /></figure>
  <div className="card-body">
    <h2 className="card-title">{foodName}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <Link className="btn btn-primary" to={`/updateFoodItem/${_id}`}>Update</Link>
    </div>
  </div>
</div>
    )
}
