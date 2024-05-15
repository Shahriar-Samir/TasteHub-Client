import axios from 'axios';
import Lottie from 'lottie-react';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Loading from './Loading';
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const MyFoodItems = () => {
    const [foodsData,setFoodsData] = useState([])
    const [loading,setLoading] = useState(true)
    const {userLoggedIn} = useContext(AuthContext)
    useEffect(()=>{

            document.querySelector('html').setAttribute('data-theme','dark')
        setLoading(true)
        axios.get(`https://assignment-11-server-alpha-one.vercel.app/myFoods/${userLoggedIn.email}`,{withCredentials:true})
        .then(res=>{
            setLoading(false)
            setFoodsData(res.data)
        })
        .catch(()=>{setLoading(false)})
    },[])

    const deletePurchaseData = (id)=>{
        const email = userLoggedIn?.email
        document.getElementById(id).style.display = 'none'
        axios.delete(`https://assignment-11-server-alpha-one.vercel.app/deleteMyItem/${id}`,{withCredentials:true, params:{email}})
        .then(res=>{
            toast.success('Your food Item deleted')
        })
        .catch(err=>{
            toast.error('Something went wrong')
        })
    }

    return (
        <div className='w-11/12 max-w-[1200px] mx-auto mb-28'>
                 <HelmetProvider>
        <Helmet>
            <title>TasteHub || My Food Items</title>
        </Helmet>
    </HelmetProvider>
           {loading? <div className='h-[100vh] flex justify-center items-center'>
                <Loading/>
           </div> : <div> <h1 className='mt-20 text-center text-3xl font-bold'>My Food Items</h1>
            { foodsData ?
               <div className='h-[60vh]'>
                <p className='text-md mt-5 font-bold text-center'>You haven't added any food item</p>
               </div> : <div className='grid  md:grid-cols-2 mx-auto w-11/12 max-w-[1200px] mt-10 gap-10 justify-center'>
                {foodsData.map((item,index)=>{
                    return <FoodItem key={item._id} index={index}  item={item} deletePurchaseData={deletePurchaseData}/>
                })}
            </div> 
            } </div>}
        </div>
    );
};

export default MyFoodItems;

// food item card 

const FoodItem = ({item,deletePurchaseData,index})=>{
    const {foodName,foodImage,foodCategory,foodOrigin,price,quantity,_id} = item


    return(
        <div id={_id} className="flex flex-col lg:flex-row bg-base-100 shadow-xl gap-5 border-2 p-4">
            
    <dialog id={`my_modal_${index}`} className="modal ">
    <div className="modal-box border-2 border-white">
        <h3 className="font-bold text-lg text-center">Delete</h3>
        <p className="py-4 text-center">Are you sure you want to delete this item ?</p>
        <div className="modal-action justify-center">
        <form method="dialog" className="flex items-center gap-4">
            <button className="btn bg-[#C90B12] hover:bg-[#8e282b] text-white" onClick={()=>{deletePurchaseData(_id)}}>Delete</button>
            <button className="btn btn-ghost">Cancel</button>
        </form>
        </div>
    </div>
    </dialog>
  <img src={foodImage} className='lg:w-[200px] h-[250px] object-cover'/>
  <div className="flex flex-col w-full justify-between gap-4">
    <div className='flex flex-col justify-between h-full'>
    <h2 className="font-bold text-2xl">{foodName}</h2>
    <p className='text-lg font-semibold'>Food Category: {foodCategory}</p>
    <p className='text-lg font-semibold'>Price: ${price}</p>
    <p className='text-lg font-semibold'>Quantity: {quantity}</p>
    <p className='text-lg font-semibold'>Food Origin: {foodOrigin}</p>
    </div>
    <div className="flex w-full justify-start lg:justify-end gap-4">
      <Link to={`/updateFoodItem/${_id}`}><button className="btn btn-primary border-0 bg-[#C90B12] hover:bg-[#8e282b] text-white">Update Item</button></Link>
      <button onClick={()=>document.getElementById(`my_modal_${index}`).showModal()} className="btn btn-primary border-0 bg-[#C90B12] hover:bg-[#8e282b] text-white">Delete Item</button>
    </div>
  </div>
</div>
    )
}
