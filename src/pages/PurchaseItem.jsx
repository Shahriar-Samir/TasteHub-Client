import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Lottie from 'lottie-react';
import buttonLoader from '../../public/animations/buttonLoading.json'
import { useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const PurchaseItem = () => {
    const {userLoggedIn} = useContext(AuthContext)
    const {data} = useLoaderData()
    const [loading, setLoading] = useState(false)
    const [priceValue,setPriceValue] = useState(data.price)
    const navigate = useNavigate()
  console.log(typeof data.price)
    const [time,setTime] = useState(new Date())

    useEffect(()=>{
        setInterval(()=> setTime(new Date()),1000)
    },[])

    const date = time.getDate();
    const month = time.toLocaleString('default', { month: 'long' });
    const year = time.getFullYear();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const formattedTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`

    const submit = (e)=>{
          setLoading(true)
          e.preventDefault()
          const form = e.target 
          const foodName = form.foodName.value
          const price = parseInt(form.price.value)
          const quantity = parseInt(form.quantity.value)
          const name = form.name.value
          const email = form.email.value
          const purchaseDate = form.purchaseDate.value
          const foodId = data._id
          const {foodImage,foodOrigin} = data
          const foodOwner = data.name
          axios.post('http://localhost:5000/addPurchaseItem',{foodName,foodId,foodImage,price,quantity,name,email,purchaseDate,foodOrigin,foodOwner}, {withCredentials:true})
          .then(res=>{
              setLoading(false)
              toast.success('Item purchased successfully')
              setTimeout(()=>{
                  navigate(`/myPurchases/${userLoggedIn.email}`)
              },2000)
          })
          .catch(err=>{
              setLoading(false)
              toast.error('Something went wrong')
          })
    }

    const updatePrice = (e)=>{
          const {price} = data
          const quantity = e.target.value
          const result = price*quantity
          setPriceValue(result)
}

    return (
       <div className='w-11/12 max-w-[1100px] mx-auto mt-48 h-[100vh] '>
       
        <h1 className='text-3xl font-bold text-center mb-14'>Purchase Food Item</h1>
         <div className='flex justify-between gap-10'>
           <div className='w-1/2 flex flex-col gap-3 items-start'>
              <h1 className='text-xl font-bold'>{data.foodName}</h1>
              <img src={data.foodImage} className='object-cover w-11/12 mx-auto h-2/4'/>
            <div className='flex justify-between items-center w-full'>
            <h1 className='text-xl font-bold text-[gold]'><span className='text-white'>Price per serving:</span> ${data.price}</h1>
              <h1 className='text-xl font-bold text-[#C90B12]'><span className='text-white'>Quantity:</span> {data.quantity}</h1>
            </div>
           </div>
          <div className='w-1/2'> 
          <form className="card-body bg-[#63636380]" onSubmit={submit}>
            <h1 className='text-center text-xl font-bold'>Purchase Order</h1>
            <div className='grid grid-cols-2 gap-4 items-center mt-4'>
            <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Food Name</span>
          </label>
          <input type="text" defaultValue={data.foodName} placeholder="Food name" readOnly className="input input-bordered bg-transparent border-white placeholder-slate-300" name='foodName' required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Price (USD)</span>
          </label>
          <input type="number" min='1' placeholder="Price" readOnly value={priceValue} className="input input-bordered bg-transparent border-white placeholder-slate-300" name='price' required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Quantity</span>
          </label>
          <input type="number" min='1' max={data.quantity} defaultValue={1} onChange={updatePrice} placeholder="Quantity" className="input input-bordered bg-transparent border-white placeholder-slate-300" name='quantity' required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">User Name</span>
          </label>
          <input type="text" placeholder="User name" readOnly className="input input-bordered bg-transparent border-white placeholder-slate-300" defaultValue={userLoggedIn.displayName} name='name' required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">User Email</span>
          </label>
          <input type="email" placeholder="User email" readOnly className="input input-bordered bg-transparent border-white placeholder-slate-300" defaultValue={userLoggedIn.email} name='email' required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Current Time</span>
          </label>
          <input value={`${formattedTime} ${month} ${date}, ${year}`} readOnly className="input input-bordered bg-transparent border-white placeholder-slate-300" name='purchaseDate'/>
        </div>

            </div>  
        <div className="form-control mt-6">
         {loading?  <button className="btn-disabled border rounded-md bg-transparent border-[#C90B12] flex justify-center items-center"><Lottie animationData={buttonLoader} loop={true} className='w-[50px]'/></button>:  <button className="btn border-0 text-white bg-[#C90B12] hover:bg-[#8e282b]">Purchase</button>}
        </div>
      </form>
          </div>
        </div>
       </div>
    );
};

export default PurchaseItem;