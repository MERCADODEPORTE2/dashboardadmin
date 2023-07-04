import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./carrusel.css";

// import required modules
import { Navigation } from "swiper/modules";

export default function Carrusel(props) {
  // console.log(props);
  return (
    <div className="carro">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {props.images?.map((link, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={link} alt={i} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
