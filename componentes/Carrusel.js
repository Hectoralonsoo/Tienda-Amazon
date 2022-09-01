import React, { useRef, useState } from "react";
import Productos from "../componentes/Productos";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";


export default function App() {
  return (
    <>
      <Swiper
       
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={false}
        pagination={{
          clickable: true,
      
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
      }}
        className="mySwiper"
        
      >
        <SwiperSlide>
        <Productos 
            nombre="Monitor Benq"
            imagen="../../imagenes/Monitor-Benq-Mobiuz.png"/>
        </SwiperSlide>
        <SwiperSlide><Productos 
            nombre="Monitor Benq"
            imagen="../../imagenes/Monitor-Benq-Mobiuz.png"/></SwiperSlide>
        <SwiperSlide><Productos 
            nombre="Monitor Benq"
            imagen="../../imagenes/Monitor-Benq-Mobiuz.png"/></SwiperSlide>
        <SwiperSlide><Productos 
            nombre="Monitor Benq"
            imagen="../../imagenes/Monitor-Benq-Mobiuz.png"/></SwiperSlide>
        <SwiperSlide><Productos 
            nombre="Monitor Benq"
            imagen="../../imagenes/Monitor-Benq-Mobiuz.png"/></SwiperSlide>
        <SwiperSlide><Productos 
            nombre="Monitor Benq"
            imagen="../../imagenes/Monitor-Benq-Mobiuz.png"/></SwiperSlide>
        <SwiperSlide><Productos 
            nombre="Monitor Benq"
            imagen="../../imagenes/Monitor-Benq-Mobiuz.png"/></SwiperSlide>
        <SwiperSlide><Productos 
            nombre="Monitor Benq"
            imagen="../../imagenes/Monitor-Benq-Mobiuz.png"/></SwiperSlide>
        <SwiperSlide><Productos 
            nombre="Monitor Benq"
            imagen="../../imagenes/Monitor-Benq-Mobiuz.png"/></SwiperSlide>
             <SwiperSlide><Productos 
            nombre="Monitor Benq"
            imagen="../../imagenes/Monitor-Benq-Mobiuz.png"/></SwiperSlide>
             
 
        <SwiperSlide><Productos 
            nombre="Monitor Benq"
            imagen="../../imagenes/Monitor-Benq-Mobiuz.png"/></SwiperSlide>
        <SwiperSlide><Productos 
            nombre="Monitor Benq"
            imagen="../../imagenes/Monitor-Benq-Mobiuz.png"/></SwiperSlide>
        <SwiperSlide><Productos 
            nombre="Monitor Benq"
            imagen="../../imagenes/Monitor-Benq-Mobiuz.png"/></SwiperSlide>
        <SwiperSlide><Productos 
            nombre="Monitor Benq"
            imagen="../../imagenes/Monitor-Benq-Mobiuz.png"/></SwiperSlide>
        <SwiperSlide><Productos 
            nombre="Monitor Benq"
            imagen="../../imagenes/Monitor-Benq-Mobiuz.png"/></SwiperSlide>
        <SwiperSlide><Productos 
            nombre="Monitor Benq"
            imagen="../../imagenes/Monitor-Benq-Mobiuz.png"/></SwiperSlide>
        <SwiperSlide><Productos 
            nombre="Monitor Benq"
            imagen="../../imagenes/Monitor-Benq-Mobiuz.png"/></SwiperSlide>
        <SwiperSlide><Productos 
            nombre="Monitor Benq"
            imagen="../../imagenes/Monitor-Benq-Mobiuz.png"/></SwiperSlide>
             <SwiperSlide><Productos 
            nombre="Monitor Benq"
            imagen="../../imagenes/Monitor-Benq-Mobiuz.png"/></SwiperSlide>
      </Swiper>
    </>
  );
}
