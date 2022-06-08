/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
// import wisata1 from "../assets/wisata1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import request from "../request";
import axios from "axios";
const Rekomendasi = () => {
  const [wisata, setWisata] = useState([])

  useEffect(()=>{
    axios.get(request.requestWisata).then((response)=>{
      setWisata(response.data.results)
    })
  },[])

  return (
    <section id="Rekomendasi">
      <div className="w-full h-full bg-theme3">
        <div className="relative px-4 py-32 text-left md:max-w-none text-center">
          <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-left text-theme1 text-center sm:leading-none md:text-6xl lg:text-7xl">
            Rekomendasi
          </h1>
          <div className="mx-auto mt-1 text-theme1 md:mt-3 md:max-w-lg md:text-center lg:text-lg">
            Destinasi Wisata Yang Paling Disukai
          </div>
          {/* Cards And Background Start */}
          <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className="mySwiper "
      >
        {wisata.map((value,urut)=>{
          console.log(urut)
         return <SwiperSlide><Cards item={value} key={urut} /></SwiperSlide>})}
      </Swiper>
          {/* Cards And Background End */}
        </div>
      </div>
    </section>
  );
};

export default Rekomendasi;