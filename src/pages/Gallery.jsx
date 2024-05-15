import React, { useContext, useEffect, useState } from 'react';
import { FaCirclePlus } from "react-icons/fa6";
import { AuthContext } from '../providers/AuthProvider';
import { useLoaderData, useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import {motion} from 'framer-motion'
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Gallery = () => {
    const {userLoggedIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const {data} = useLoaderData()
    const addFeedback = (e)=>{
            e.preventDefault()
            const form = e.target
            const name = userLoggedIn?.displayName
            const feedback = form.feedback.value
            const image = form.image.value
            const email = userLoggedIn?.email
            axios.post('https://assignment-11-server-alpha-one.vercel.app/addFeedback', {name,email,feedback, image}, {withCredentials:true})
            .then(res=>{
                toast.success('Feedback added successfully')
                setTimeout(()=>{
                    navigate(0)
                },1500)
            })
            .catch(err=>{
               toast.error('Something went wrong')
            })
    }

    useEffect(()=>{
      document.querySelector('html').setAttribute('data-theme','dark')
  },[])

    const showModal = ()=>{
        if(!userLoggedIn){
            return navigate('/signIn',{ state: location.pathname})
        }
        else{
            document.getElementById('my_modal_5').showModal()
        }
    }

    return (
        <div className='mb-28'>
                 <HelmetProvider>
                <Helmet>
                    <title>TasteHub || Gallery</title>
                </Helmet>
            </HelmetProvider>
              <div className="bg-[linear-gradient(to_top,rgba(0,0,0,0.4),rgba(0,0,0,0)),linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0)),url('/images/foodGallery.jpg')] bg-no-repeat bg-cover flex justify-center items-center gap-10 h-[70vh] w-full">
                <h1 className='text-4xl lg:tex-5xl font-bold'>Gallery</h1>
            </div>
            <div className='flex justify-center mt-10'>
           
                {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn text-white font-bold bg-[#C90B12] hover:bg-[#8e282b]" onClick={showModal}>Add <FaCirclePlus/></button>
<dialog id="my_modal_5" className="modal modal-middle">

  <div className="rounded-lg p-5 w-11/12 max-w-[350px] bg-gray-700">
  <div className="modal-action m-0 ">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="text-white rotate-45 text-xl"><FaCirclePlus/></button>
      </form>
    </div>
    <form className="card-body mx-auto p-0 text-white" onSubmit={addFeedback}>
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
          <textarea type="text" placeholder="Your feedback" className="rounded-md h-[15vh] max-h-[20vh] p-2 border-white border-2 bg-transparent" name='feedback' required></textarea>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Image</span>
          </label>
          <input type="text" placeholder="Image URL" className="input input-bordered border-white border-2 bg-transparent" name='image' required />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#C90B12] hover:bg-[#8e282b] text-white border-0">Add</button>
        </div>
      </form>
  </div>
</dialog>
            </div>
        <div  className='mt-10 mx-auto w-11/12 max-w-[1200px] '>
          <h1 className='text-xl font-bold text-center'>All the feedbacks</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12'>
              {data.map(item=>{
                return <Card key={item._id} item={item}/>
              })}
            </div>
        </div>
        </div>
    );
};

export default Gallery;


const Card = ({item})=>{
  const {name,feedback,image} = item
  const [position,setPostion] = useState(500)
  const [opacity,setOpacity] = useState(1)

  const showAll = ()=>{
      setPostion(0)
      setOpacity(0.5)
  }
  const hideAll = ()=>{
      setPostion(500)
      setOpacity(1)
  }

  return(
      <motion.div className="shadow-xl h-[300px] border-2 rounded-sm overflow-hidden relative" onMouseEnter={showAll} onMouseLeave={hideAll}>
      <motion.img src={image} className='h-full w-full object-cover' initial={{opacity:opacity}} animate={{opacity:opacity}}/>
      <motion.div initial={{x:0}} animate={{x:position}} transition={{duration:1}} className='w-10/12  h-[250px] absolute z-10 overflow-auto inset-6'>
      <h2 className="text-2xl font-bold" style={{textShadow:'1px 1px 20px black'}}>{name}</h2>
      <p  className='font-semibold'style={{textShadow:'1px 1px 20px black'}}>{feedback}</p>
      </motion.div>

  </motion.div>
  )
}