import React, { useRef, useState } from 'react';
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
import nine from '../assets/nine.jpg'
import ten from '../assets/ten.jpg'
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

const VoucherSwiper = (props)=>{

  const selectVoucherHandler = (points)=>{
   props.selectedPoints(points);
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
          <img src={one} onClick={selectVoucherHandler.bind(null, 500)}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={two} onClick={selectVoucherHandler.bind(null, 5)}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={three} onClick={selectVoucherHandler.bind(null, 5)}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={four} onClick={selectVoucherHandler.bind(null, 5)}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={five} onClick={selectVoucherHandler.bind(null, 100)}/>
        </SwiperSlide>
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