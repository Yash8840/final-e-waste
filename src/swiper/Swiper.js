import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Swiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SwiperComp = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide>
          <div className="sliderContent">
            <h1 style={{ fontWeight:'500', fontSize:'2rem'}}>What are the harmful effects of e-waste?</h1>
            <div>
              Electronic waste contains many harmful elements like lead,
              mercury, cadmium, barium, and lithium that dangerously affect
              human health, including heart, brain, kidney diseases.
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="sliderContent">
            <h1 style={{ fontWeight:'500', fontSize:'1.5rem'}}>What is your process for recycling electronic waste?</h1>
            <div style={{fontSize:'15px'}}>
              Our process for recycling electronic waste involves the following
              steps: We offer convenient collection points or pickup services
              for your e-waste. Once collected, we carefully sort the items
              based on their components. Then, we utilize specialized techniques
              to recycle and recover valuable materials.Any waste that cannot be
              recycled is disposed of responsibly. For more information, please
              feel free to contact us –8800805969
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="sliderContent">
            <h1 style={{ fontWeight:'500', fontSize:'2rem'}}>What are the various electronic wastes around us?</h1>
            <div>
              Electronic that has worn out and reached its end of life is known
              as electronic waste or e-waste. Many electronics like computers,
              mouse, keyboards, laptops, wires, televisions, VCRs are considered
              electronic waste usually utilized in our daily lives.
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="sliderContent">
            <h1 style={{ fontWeight:'500', fontSize:'1.6rem'}}>Can you provide data destruction services?</h1>
            <div>
              Yes, we offer data destruction services at TRASH TO TREASURE. We
              use industry-standard methods such as physical destruction,
              degaussing, and data wiping/erasure to ensure the secure handling
              and disposal of your electronic devices. Our services cover a wide
              range of data types, and we hold relevant certifications in data
              destruction.{" "}
            </div>
          </div>
        </SwiperSlide>

        {/* <SwiperSlide>
          <div className="sliderContent">
            <h2>What happens to the e-waste that we discard in dustbins? </h2>
            <div>
              One should never discard their electronic waste in the dustbin.
              The trash collectors collect the trash from the bins and throw it
              at a waste dump along with other types of waste that can harm the
              atmosphere by emitting poisonous chemicals. One should always
              focus on disposing of their e-waste sustainably. You could contact
              TRASH TO TREASURE for the most secure electronic waste disposal.
            </div>
          </div>
        </SwiperSlide> */}

        <SwiperSlide>
          <div className="sliderContent">
            <h1 style={{ fontWeight:'500', fontSize:'2rem'}}>How to get your e-waste service?</h1>
            <div>
              You can contact our corporate office at 8800805969 and connect to
              our experts to get the best e-waste recycling service in Delhi or
              email us at t3trashtotreasure@gmail.com for any queries.
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="sliderContent">
            <h1 style={{color:'#ffffff', fontWeight:'500', fontSize:'2rem'}}>What are the harmful effects of e-waste?</h1>
            <div>
              Electronic waste contains many harmful elements like lead,
              mercury, cadmium, barium, and lithium that dangerously affect
              human health, including heart, brain, kidney diseases.
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default SwiperComp;
