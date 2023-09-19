import React from 'react'
import logo from '../assets/logo.png'
import van from '../assets/van-removebg-preview.png'
import './Loader.css'
function Loader() {
  
  return (
    <div className=' w-[100vw] bg-[#1B4A30] h-screen'>
<div className='p-[3rem] flex  justify-center items-center'>
    <img src={logo} alt="" className='w-[30rem]  h-[9rem]'/>
</div>
<div className='obstacle obstacleAni'>
</div>
    </div>
  )
}

export default Loader;