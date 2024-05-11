import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import profileLoading from '../../public/animations/profileLoading.json'
import buttonLoading from '../../public/animations/buttonLoading.json'
import Lottie from 'lottie-react';
import { toast } from 'react-toastify';

const Navbar = () => {
  const {loadingSpinner,userLoggedIn,signOutUser} = useContext(AuthContext)
  
  function logOut(){
      signOutUser()
      .then(()=> toast.success('Signed Out'))
      .catch(()=>{
        toast.error('Something went wrong')
      })
  }

  return (
    <div className='py-2 fixed top-0 w-full'>
      <div className='md:flex justify-between items-center hidden px-7'>
        <div></div>
        <div className='flex items-center flex-col  ms-20'>
        <img src='/icons/icon.png' className='w-[50px]'/>
        <a className="text-2xl">
        TasteHub</a>
        </div>
      <div className='hidden md:block'>
      {loadingSpinner? <div className='flex items-center relative'>
        <Lottie animationData={profileLoading} loop={true} className="w-[50px]"/> 
        <Lottie animationData={buttonLoading} loop={true} className="text-white p-2 absolute bottom-[-50px] end-[-10px] w-[70px]"/> 
      </div>: userLoggedIn?  <div className='flex items-center relative'> <div className="dropdown">
    <img tabIndex={0} className="w-[48px] h-[48px] border-2 border-white rounded-full object-cover" src={`${userLoggedIn.photoURL}`} role='button'/>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-black rounded-box w-52 right-[0px]">
      <li><Link to='/myFoodItems'>My added food itms</Link></li>
        <li><Link to='/addFoodItem'>Add a food item</Link></li>
        <li><Link to='/myOrders'>My ordered food items</Link></li>
      </ul>
    </div>
    <button className='text-white py-2 w-[80px] absolute text-center bottom-[-45px] right-[-15px] rounded-md text-sm bg-[#C90B12]' onClick={signOutUser}>Log Out</button>
    </div>   : <Link to='/signin' className="btn">Sign In</Link>}
      </div>
      </div>
     <div className="navbar p-0 m-0 min-h-fit ">
  <div className="navbar-start ">
    <div className="dropdown md:hidden">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to='/'>Home</Link></li>
        <li><Link to='/allFoods'>All Foods</Link></li>
        <li><Link to='/gallery'>Gallery</Link></li>
      </ul>
    </div>
    <div className='md:hidden flex items-center gap-2'>
    <img src='/icons/icon.png' className='w-[50px]'/>
    <a className="text-xl">
        TasteHub</a>
    </div>
  </div>
  <div className="navbar-center hidden md:flex">
    <ul className="menu menu-horizontal p-0 gap-5">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/allFoods'>All Foods</Link></li>
        <li><Link to='/gallery'>Gallery</Link></li>

    </ul>
  </div>
  <div className="navbar-end">
    <div className='md:hidden'>
    {loadingSpinner? <Lottie animationData={profileLoading} loop={true} className="w-[50px]"/> : userLoggedIn? <div className='flex flex-col'>
    <img className="w-[50px] h-[50px] rounded-full object-cover" src={`${userLoggedIn.photoURL}`}/>
    <button className='text-white bg-red-500 p-2' onClick={logOut}>Log Out</button>
    </div>  : <Link to='/signin' className="btn">Sign In</Link>}
    </div>
  </div>
</div>
    </div>
  );
};

export default Navbar;