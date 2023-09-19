import React from 'react'
import search from '../assets/search.png'
 import user from '../assets/user.png'
 import map from '../assets/map.png'
 import './Certificate.css'
 import plant from '../assets/flowerpot.png'
function Certificate() {
  return (
    <div style={{height:'100vh', width:'100vw'}} className='certificateContainer'>
    <div className='bg-[#1B5F3A] shadow-2xl shadow-[black] py-[1rem] md:py-[0rem] h-auto'>
    <div className="text-[#E1E1E1]   md:flex justify-between gap-[4px] mx-auto w-[95%] py-[1rem] text-center items-center">
        <p className=' text-[1.7rem] lg:text-[2rem] font-[Merriweather] hover:shadow-2xl hover:shadow-[black]'>Trash to Treasure</p>
        <div className='md:flex lg:justify-between text-center items-center  text-[#ACACAC] gap-[5rem] '>
        <p className='hover:text-[white]  hover:cursor-pointer '>Home</p>
        <p className='hover:text-[white] hover:cursor-pointer '>About us</p>
        <p className='hover:text-[white] hover:cursor-pointer '>Contact Us</p>
        <p className='hover:text-[white] hover:cursor-pointer '>Login / Sign Up</p>
        </div>
        <div className='hidden hover:cursor-pointer md:flex justify-between gap-[14px] '>
        <img src={search} alt=""  className='w-[1.5rem] h-[1.5rem]'/>
        <img src={user} alt="" className='w-[1.5rem] h-[1.5rem]' />
        </div>
      </div>
      </div>
      <div className='background'>
        
        <div className='flex justify-center  py-[1rem]'>
        <p className='text-[2.4rem] font-bold'>Thanks for your contribution !</p>
        </div>
        <div className=' w-[70%] mx-auto'>
            <p className='text-[1.6rem] font-bold'>Download your certificate form here :</p>
        </div>
        <div className='flex justify-between rounded-xl bg-[#c8c8c8] my-[1rem] h-[4rem] w-[50%] mx-auto'>
<p className='text-[1.2rem] ml-[5rem] pt-[1rem] font-bold'>Certificate of appreciation.pdf</p>
<div className='rounded-xl h-[2rem] bg-[#1B4A30] px-[1.4rem] mr-[3rem] mt-[1rem]'>
<p className='text-[1.3rem] text-[white] hover:cursor-pointer hover:opacity-[60%]'>Download</p>
</div>
        </div>
        <div className='flex '>
        <div>
        <div>
            <p className='text-[1.6rem] w-[60%] ml-[9rem] pr-[0rem] mt-[2rem]'>Your tree will be planted on this location on 26 January 2024. Please visit our site after sometime to track your tree growth.</p>
        </div>
        <div className='w-[16rem] h-[12rem] mt-[-2rem] pr-[0rem]  ml-[9rem]'>
            <img src={plant} alt="" />
        </div>
        </div>
        <div className=' mx-[5rem]'>
        <img src={map} alt="" className='w-[35rem] h-[19rem]'/>
        </div>
        </div>
        </div>
              </div>
  )
}

export default Certificate;