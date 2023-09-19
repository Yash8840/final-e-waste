import React from 'react'
import tree from './tree.png'
import {Swiper,SwiperSlide} from "swiper/react";
import 'swiper/css';
import gift from './gift.png'
import recycle from './recycle.png'
import hand from './plant.png'
import 'swiper/css/effect-cards';
import { useRef, useState } from 'react';

 import { EffectCards } from 'swiper/modules';

function Aboutus() {
  return (
    <div className='bg-[#c8c8c8] h-[120vh]'>
      <p className='text-[3rem] text-[#2E2E2E] py-[1rem] px-[5rem]'>
        About Us

      </p>
      <div className='flex justify-between h-[45%] my-auto '>
        <div className='w-[60%] px-[5rem] my-[2rem]'>
      <p className='text-[1.5rem] text-[#303030]'>
      We're the link between e-waste recycling companies and eco-conscious consumers. Our platform connects clients with trusted recycling partners, streamlining the recycling process and offering rewards for sustainable choices
      </p>
      </div>
      <div className='mt-[-5rem] '>
<img src={tree} alt="" />
      </div>   
      </div>
<div className='flex justify-between h-[25%]  mx-auto items-center justify-center text-white w-[90%] '>
<div className='w-[25%]  hover:scale-125 hover:duration-500 hover:cursor-pointer shadow-2xl shadow-black flex flex-col  h-[13rem] bg-[#1B4A30]  rounded-xl text-center'>
        
<img src={recycle} alt="" className='w-[3.5rem] h-[3.5rem] mx-auto'/>
{/* <p className='text-[1.5rem] text-black font-bold pt-[0.5rem]'>E-WASTE LOCATOR</p> */}
<p className='text-[white] text-[1.2rem] pt-[1rem]'>Locate nearby e-waste recycling spots on our website for eco-convenience</p>
</div>
<div className='w-[30%] hover:scale-110 hover:duration-500 hover:cursor-pointer shadow-2xl h-[18rem] shadow-black flex flex-col  text-center  bg-[#1B4A30] rounded-xl'>
<img src={gift} alt="" className='w-[3rem] h-[3rem] mx-auto '/>
{/* <p className='text-[1.5rem] text-black font-bold pt-[0.5rem]'>REWARDS</p> */}
<p className='text-[white] text-[1.2rem] p-[1rem]'>Rewards await you with every succesfull e-waste disposal get credit points for every successfull disposal. Use these points to awail numerous vouchers and cashbacks! </p>
</div>
<div className='w-[25%] hover:scale-125  hover:duration-500 hover:cursor-pointer shadow-2xl shadow-black h-[13rem] flex flex-col  bg-[#1B4A30] text-center rounded-xl'>
        <img src={hand} alt="" className='w-[3rem] h-[3rem] mx-auto'/>
{/* <p className='text-[1.5rem] text-black font-bold ' >CERTIFICATE</p> */}
<p className='text-[white] text-[1.1rem] p-[0.6rem]'>Dispose e-waste responsibly,and we'll plant a tree in your name while you track its growth with your exclusive e-certificate</p>
</div>
  </div>

{/*<Swiper
       effect={'cards'}
       grabCursor={true}
       modules={[EffectCards]}
       className="mySwiper"
      >
        <SwiperSlide>
        <div className='w-[100%]  shadow-2xl h-[100%] flex flex-col justify-between bg-[#1B4A30] text-center rounded-xl'>
<p className='text-[2rem]' >Price Comparison</p>
<p className='bg-black text-white h-[2rem] hover:text-black hover:h-[2rem] hover:bg-[white] text-center my-[1rem]  w-[40%] mx-auto rounded-xl hover:text-center hover:my-[1rem]  hover:w-[40%] hover:mx-auto hover:rounded-xl'>Click Here</p>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-[100%] shadow-2xl h-[100%] flex flex-col justify-between bg-[rgb(0, 140, 255)] text-center rounded-xl'>
<p className='text-[2rem]' >Price Comparison</p>
<p className='bg-black text-white h-[2rem] hover:text-black hover:h-[2rem] hover:bg-[white] text-center my-[1rem]  w-[40%] mx-auto rounded-xl hover:text-center hover:my-[1rem]  hover:w-[40%] hover:mx-auto hover:rounded-xl'>Click Here</p>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-[100%] shadow-2xl h-[100%] flex flex-col justify-between bg-[rgb(211, 122, 7)] text-center rounded-xl'>
<p className='text-[2rem]' >Price Comparison</p>
<p className='bg-black text-white h-[2rem] hover:text-black hover:h-[2rem] hover:bg-[white] text-center my-[1rem]  w-[40%] mx-auto rounded-xl hover:text-center hover:my-[1rem]  hover:w-[40%] hover:mx-auto hover:rounded-xl'>Click Here</p>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-[100%] shadow-2xl h-[100%] flex flex-col justify-between bg-[rgb(206, 17, 17)] text-center rounded-xl'>
<p className='text-[2rem]' >Price Comparison</p>
<p className='bg-black text-white h-[2rem] hover:text-black hover:h-[2rem] hover:bg-[white] text-center my-[1rem]  w-[40%] mx-auto rounded-xl hover:text-center hover:my-[1rem]  hover:w-[40%] hover:mx-auto hover:rounded-xl'>Click Here</p>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-[100%] shadow-2xl h-[100%] flex flex-col justify-between bg-[rgb(118, 163, 12)] text-center rounded-xl'>
<p className='text-[2rem]' >Price Comparison</p>
<p className='bg-black text-white h-[2rem] hover:text-black hover:h-[2rem] hover:bg-[white] text-center my-[1rem]  w-[40%] mx-auto rounded-xl hover:text-center hover:my-[1rem]  hover:w-[40%] hover:mx-auto hover:rounded-xl'>Click Here</p>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-[100%] shadow-2xl h-[100%] flex flex-col justify-between bg-[rgb(243, 228, 12)] text-center rounded-xl'>
<p className='text-[2rem]' >Price Comparison</p>
<p className='bg-black text-white h-[2rem] hover:text-black hover:h-[2rem] hover:bg-[white] text-center my-[1rem]  w-[40%] mx-auto rounded-xl hover:text-center hover:my-[1rem]  hover:w-[40%] hover:mx-auto hover:rounded-xl'>Click Here</p>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-[100%] shadow-2xl h-[100%] flex flex-col justify-between bg-[#1B4A30] text-center rounded-xl'>
<p className='text-[2rem]' >Price Comparison</p>
<p className='bg-black text-white h-[2rem] hover:text-black hover:h-[2rem] hover:bg-[white] text-center my-[1rem]  w-[40%] mx-auto rounded-xl hover:text-center hover:my-[1rem]  hover:w-[40%] hover:mx-auto hover:rounded-xl'>Click Here</p>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-[100%] shadow-2xl h-[100%] flex flex-col justify-between bg-[#1B4A30] text-center rounded-xl'>
<p className='text-[2rem]' >Price Comparison</p>
<p className='bg-black text-white h-[2rem] hover:text-black hover:h-[2rem] hover:bg-[white] text-center my-[1rem]  w-[40%] mx-auto rounded-xl hover:text-center hover:my-[1rem]  hover:w-[40%] hover:mx-auto hover:rounded-xl'>Click Here</p>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-[100%] shadow-2xl h-[100%] flex flex-col justify-between bg-[#1B4A30] text-center rounded-xl'>
<p className='text-[2rem]' >Price Comparison</p>
<p className='bg-black text-white h-[2rem] hover:text-black hover:h-[2rem] hover:bg-[white] text-center my-[1rem]  w-[40%] mx-auto rounded-xl hover:text-center hover:my-[1rem]  hover:w-[40%] hover:mx-auto hover:rounded-xl'>Click Here</p>
</div>
        </SwiperSlide>
</Swiper>*/}

      </div>
  )
}

export default Aboutus