/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
// import wisata1 from "../assets/wisata1.jpg";
import { Swiper, SwiperSlide, } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
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
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1368: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        className="mySwiper flex items-center mx-auto justify-center mt-5 !p-8 "
      >
        {wisata.map((value,index)=>{
         return <SwiperSlide style={{ backgroundImage: `url('${`https://image.tmdb.org/t/p/w500/`+ value.backdrop_path}')` }} className="card-container"key={index}><Cards item={value}/></SwiperSlide>})}
      </Swiper>
          {/* Cards And Background End */}
        </div>
      </div>
    </section>
  );
};

export default Rekomendasi;