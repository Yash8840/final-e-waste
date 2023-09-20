import React, { useContext, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import one from '../assets/one.jpg'
import two from '../assets/two.jpg'
import three from '../assets/three.jpg'
import four from '../assets/four.jpg'
import five from '../assets/five.jpg'
import six from '../assets/six.jpg'
import seven from '../assets/seven.jpg'
import eight from '../assets/eight.jpg'
// import nine from '../assets/nine.jpg'
// import ten from '../assets/ten.jpg'
// import one from '../assets/one.jpg'
// import one from '../assets/one.jpg'
// import one from '../assets/one.jpg'
// import one from '../assets/one.jpg'
// import one from '../assets/one.jpg'
// import one from '../assets/one.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './VoucherSwiper.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import VoucherContext from '../Context/VoucherContext';

const VoucherSwiper = (props)=>{

  const voucherCtx = useContext(VoucherContext);

  const selectVoucherHandler = (obj)=>{
   props.selectedPoints(obj.points);
   voucherCtx.add(obj);
  }
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
          
        }}
        pagination={true}
        spaceBetween={60}
        loop={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img  src={one} onClick={selectVoucherHandler.bind(null, {imgUrl:one, points:500, id:Math.random().toString()})}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={two} onClick={selectVoucherHandler.bind(null, {imgUrl:two, points:5, id:Math.random().toString()})}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={three} onClick={selectVoucherHandler.bind(null, {imgUrl:three, points:5, id:Math.random().toString()})}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={four} onClick={selectVoucherHandler.bind(null, {imgUrl:four, points:5, id:Math.random().toString()})}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={five} onClick={selectVoucherHandler.bind(null, {imgUrl:five, points:100, id:Math.random().toString()})}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={six} onClick={selectVoucherHandler.bind(null, {imgUrl:six, points:1700, id:Math.random().toString()})}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={seven} onClick={selectVoucherHandler.bind(null, {imgUrl:seven, points:1000, id:Math.random().toString()})}/>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={eight} onClick={selectVoucherHandler.bind(null, 00)}/>
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <img src={six} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={seven} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={eight} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={nine} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ten} />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}

export default VoucherSwiper;