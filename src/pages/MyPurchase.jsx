import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../providers/AuthProvider';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const MyPurchases = () => {
    const {data} = useLoaderData()
    const {userLoggedIn} = useContext(AuthContext)

    useEffect(()=>{
      document.querySelector('html').setAttribute('data-theme','dark')
  },[])

    const deletePurchaseData = (id)=>{
        const email = userLoggedIn?.email
        document.getElementById(id).style.display = 'none'
        axios.delete(`https://assignment-11-server-alpha-one.vercel.app/deletePurchaseItem/${id}`,{withCredentials:true, params:{email}})
        .then(res=>{
            toast.success('Purchased food Item deleted')
        })
        .catch(err=>{
            toast.error('Something went wrong')
        })
    }

    return (
        <div className='w-11/12 max-w-[1200px] mx-auto mb-28'>
                 <HelmetProvider>
        <Helmet>
            <title>TasteHub || My Purchases</title>
        </Helmet>
    </HelmetProvider>
            <div className="overflow-x-auto mt-20">
                <div><button>Back </button></div>
            <h1 className='text-center text-2xl font-bold'>My Purchased Items</h1>
  <table className="table mt-4">
    {/* head */}
    <thead>
      <tr>
        <th>
        </th>
        <th>Food owner</th>
        <th>price</th>
        <th>quantity</th>
        <th>Purchased Time</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {data.map(item=>{
        const {foodName,food} = item
        return  <tr key={item._id} id={item._id}>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.foodImage} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold text-xl">{item.foodName}</div>
              <div className="opacity-70 text-lg">{item.foodOrigin}</div>
            </div>
          </div>
        </td>
        <td>
          <span className="text-white text-lg">{item.foodOwner}</span>
        </td>
        <td>
          <span className="text-white text-lg">{item.price}</span>
        </td>
        <td>
          <span className="text-white text-lg">{item.quantity}</span>
        </td>
        <td>
          <span className="text-white text-lg">{item.purchaseDate}</span>
        </td>
        <td>
          <span onClick={()=>{deletePurchaseData(item._id)}} className="btn bg-[#C90B12] hover:bg-[#8e282b] text-white">Delete</span>
        </td>
      </tr>
    })}
    </tbody>

  </table>
</div>
        </div>
    );
};

export default MyPurchases;

