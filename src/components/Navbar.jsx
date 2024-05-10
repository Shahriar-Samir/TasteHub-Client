import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='py-2 fixed top-0 w-full'>
      <div className='md:flex justify-between items-center hidden px-2'>
        <div></div>
        <div className='flex items-center flex-col  ms-20'>
        <img src='/icons/icon.png' className='w-[50px]'/>
        <a className="text-2xl">
        TasteHub</a>
        </div>
      <div className='hidden md:block'>
      <Link to='/signin' className="btn">Sign In</Link>
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
    <Link to='/signin' className="btn">Sign In</Link>
    </div>
  </div>
</div>
    </div>
  );
};

export default Navbar;