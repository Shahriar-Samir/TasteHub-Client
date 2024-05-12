import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyPurchases = () => {
    const {data} = useLoaderData()
    console.log(data)
    return (
        <div className='w-11/12 max-w-[1200px] mx-auto'>
            <div className="overflow-x-auto mt-40">
  <table className="table">
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
        return  <tr key={item._id}>
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
          <span className="btn bg-[#C90B12] hover:bg-[#8e282b] text-white">Delete</span>
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

