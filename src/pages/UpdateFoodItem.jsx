import { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import Lottie from 'lottie-react';
import buttonLoader from '../../public/animations/buttonLoading.json'
import { AuthContext } from '../providers/AuthProvider';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const UpdateFoodItem = () => {
    const {userLoggedIn} = useContext(AuthContext)
    const {data} = useLoaderData()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const submit = (e)=>{
        setLoading(true)
        e.preventDefault()
        const form = e.target
        const foodName = form.foodName.value
        const foodImage = form.foodImage.value
        const foodCategory = form.foodCategory.value
        const quantity = parseInt(form.quantity.value)
        const price = parseInt(form.price.value)
        const foodOrigin = form.foodOrigin.value
        const description = form.description.value
        const email = userLoggedIn.email

        axios.put(`https://assignment-11-server-alpha-one.vercel.app/updateFood/${data._id}`,{foodName,foodImage,foodCategory,quantity,price,foodOrigin,description,email}, {withCredentials:true})
        .then(res=>{
            setLoading(false)
            toast.success('Updated food item')
            setTimeout(()=>{
              navigate('/myFoodItems')
            },1500)
        })
        .catch(err=>{
            setLoading(false)
            toast.error('Something went wrong')
        })
    }

    useEffect(()=>{
      document.querySelector('html').setAttribute('data-theme','dark')
  },[])

    return (
        <>
         <HelmetProvider>
        <Helmet>
            <title>TasteHub || Update Food Item</title>
        </Helmet>
    </HelmetProvider>
        <div className="h-[150vh] w-full  bg-[linear-gradient(to_top,rgba(0,0,0,0.4),rgba(0,0,0,0)),linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0)),url('/images/foodCooking.jpeg')] bg-no-repeat bg-cover flex justify-center items-center gap-10 text-white">
          <form className="card-body bg-[#FFFFFF80] w-11/12 max-w-[500px] mt-32" onSubmit={submit}>
            <h1 className='text-center text-3xl font-bold'>Update Food Item</h1>
            <div className='grid grid-cols-2 gap-4 items-center mt-4'>
            <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Food Name</span>
          </label>
          <input type="text" placeholder="Food name" className="input input-bordered bg-transparent border-white placeholder-slate-300" defaultValue={data.foodName} name='foodName' required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Food Image</span>
          </label>
          <input type="text" placeholder="Food image URL" className="input input-bordered bg-transparent border-white placeholder-slate-300" name='foodImage' defaultValue={data.foodImage} required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Food Category</span>
          </label>
          <input type="text" placeholder="Food category" className="input input-bordered bg-transparent border-white placeholder-slate-300" name='foodCategory' defaultValue={data.foodCategory} required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Quantity</span>
          </label>
          <input type="number" min='0' placeholder="Quantity" className="input input-bordered bg-transparent border-white placeholder-slate-300" name='quantity' defaultValue={data.quantity} required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Price (USD)</span>
          </label>
          <input type="number" min='1' placeholder="Price" className="input input-bordered bg-transparent border-white placeholder-slate-300" name='price' defaultValue={data.price} required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Food Origin</span>
          </label>
          <input type="text" placeholder="Food origin" className="input input-bordered bg-transparent border-white placeholder-slate-300" name='foodOrigin' defaultValue={data.foodOrigin} required />
        </div>
        <div className="form-control  col-span-2">
          <label className="label">
            <span className="label-text text-white">Description</span>
          </label>
          <textarea placeholder="Description" className="input input-bordered bg-transparent border-white placeholder-slate-300 h-[10vh] max-h-[15vh]" name='description' defaultValue={data.description} required></textarea>
        </div>
            </div>  
        <div className="form-control mt-6">
         {loading?  <button className="btn-disabled border rounded-md bg-transparent border-[#C90B12] flex justify-center items-center"><Lottie animationData={buttonLoader} loop={true} className='w-[50px]'/></button>:  <button className="btn border-0 text-white bg-[#C90B12] hover:bg-[#8e282b]">Update Food Item</button>}
    
        </div>
      </form>
        </div>
        </>
    );
};

export default UpdateFoodItem;