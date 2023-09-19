import React from "react";
import "./Awareness.css";
import SwiperComp from "../swiper/Swiper";
import SwiperImages from "../swiper/SwiperImages";
const Awareness = () => {
  return (
    <div className="awarenessContainer">
      <div className="cont1">
        <div className="swiperCont">
          <SwiperComp />
        </div>
        <div className="videoCont">
        <iframe width="90%" height="90%" src="https://www.youtube.com/embed/eT34ypRodB0" title="Recycling e-waste - Good for business and the environment | DW Documentary" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>

      <div className="cont2">
        {/* <SwiperImages/> */}
      </div>
    </div>
  );
};

export default Awareness;
