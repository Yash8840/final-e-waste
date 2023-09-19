import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import './SwiperImages.css';

// import required modules
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

const SwiperImages = ()=>{
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://www.gep.com/prod/s3fs-public/blog-images/sustainable-e-waste-management-nurturing-a-greener-future-1920x1274.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.natgeofe.com/n/69b5b7dc-02c3-47b3-8063-781268ebab1e/01-e-waste-millions-tons.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://assets.ey.com/content/dam/ey-sites/ey-com/en_us/topics/climate-change/ey-waste-bin-full-of-e-waste.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://u4d2z7k9.rocketcdn.me/wp-content/uploads/2022/05/Untitled-design-30.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://media.licdn.com/dms/image/C5112AQF3fSCHSu7pXA/article-cover_image-shrink_720_1280/0/1581926693662?e=2147483647&v=beta&t=fSSJi4QyPGrR1AzDPisbvLy0m4Qz0_m4Q5AWx5OYyAU" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.waste360.com/sites/waste360.com/files/styles/article_featured_standard/public/RecycleForce-770.jpg?itok=eocL0Vn8" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-bKjETfknuyhRKR8LRXE-iZuzJ3LLuxS9A&usqp=CAU" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://pro-planet.in/wp-content/uploads/2023/03/abtsp1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.ewastebgone.com/wp-content/uploads/2019/02/16652_en_3eedc_2467_sims-worker-tucson-1.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperImages;