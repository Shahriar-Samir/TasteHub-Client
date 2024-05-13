import { useState } from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function App() {


  return (
    <div className='text-white'>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default App
