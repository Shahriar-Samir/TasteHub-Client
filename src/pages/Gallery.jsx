import React, { useContext } from 'react';
import { FaCirclePlus } from "react-icons/fa6";
import { AuthContext } from '../providers/AuthProvider';

const Gallery = () => {
    const {userLoggedIn} = useContext(AuthContext)
    return (
        <div>
              <div className="bg-[linear-gradient(to_top,rgba(0,0,0,0.4),rgba(0,0,0,0)),linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0)),url('/images/foodGallery.jpg')] bg-no-repeat bg-cover flex justify-center items-center gap-10 h-[70vh] w-full">
                <h1 className='text-5xl font-bold'>Gallery</h1>
            </div>
            <div className='flex justify-center mt-10'>
           
                {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn text-white font-bold bg-[#C90B12] hover:bg-[#8e282b]" onClick={()=>document.getElementById('my_modal_5').showModal()}>Add <FaCirclePlus/></button>
<dialog id="my_modal_5" className="modal modal-middle">
  <div className="rounded-lg p-5 w-11/12 max-w-[350px] bg-gray-700">
  <div className="modal-action m-0 ">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="text-white rotate-45 text-xl"><FaCirclePlus/></button>
      </form>
    </div>
    <form className="card-body mx-auto p-0 text-white">
        <h1 className='font-bold text-2xl'>Share your experience</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">User Name</span>
          </label>
          <div className="input input-bordered flex items-center cursor-not-allowed border-white border-2 bg-transparent">{userLoggedIn?.displayName}</div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Feedback</span>
          </label>
          <textarea type="text" placeholder="Your feedback" className="rounded-md h-[15vh] max-h-[20vh] p-2 border-white border-2 bg-transparent" required></textarea>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Image</span>
          </label>
          <input type="text" placeholder="Image URL" className="input input-bordered border-white border-2 bg-transparent" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#C90B12] hover:bg-[#8e282b] text-white border-0">Add</button>
        </div>
      </form>
  </div>
</dialog>
            </div>
        </div>
    );
};

export default Gallery;