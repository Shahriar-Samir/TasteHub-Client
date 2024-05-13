import axios from 'axios';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../providers/AuthProvider';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const MyPurchases = () => {
    const {data} = useLoaderData()
    const {userLoggedIn} = useContext(AuthContext)
    console.log(data)

    const deletePurchaseData = (id)=>{
        const email = userLoggedIn?.email
        document.getElementById(id).style.display = 'none'
        axios.delete(`http://localhost:5000/deletePurchaseItem/${id}`,{withCredentials:true, params:{email}})
        .then(res=>{
            toast.success('Purchased food Item deleted')
        })
        .catch(err=>{
            toast.error('Something went wrong')
        })
    }

    return (
        <div className='w-11/12 max-w-[1000px] mx-auto'>
                 <HelmetProvider>
        <Helmet>
            <title>TasteHub || My Purchases</title>
        </Helmet>
    </HelmetProvider>
            <div className="overflow-x-auto mt-40">
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
              <div className="font-bold">{item.foodName}</div>
              <div className="text-sm opacity-50">{item.foodOrigin}</div>
            </div>
          </div>
        </td>
        <td>
          <span className="">{item.foodOwner}</span>
        </td>
        <td>
          <span className="">{item.price}</span>
        </td>
        <td>
          <span className="">{item.quantity}</span>
        </td>
        <td>
          <span className="">{item.purchaseDate}</span>
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

