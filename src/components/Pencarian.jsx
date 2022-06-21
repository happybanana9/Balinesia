/* eslint-disable prettier/prettier */
import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import Dropdown from "./Dropdown";

const Pencarian = () => {
  const [wisata, setWisata] = useState([]);
  const getWisataRekomendasi = async () => {
    const response = await axios.get('http://localhost:5000/api/destinations');
    const resData = response.data.data;
    setWisata(resData);
  }

  useEffect(()=>{
    getWisataRekomendasi()
  },[])
  return (
    <section id="Pencarian">
      <div className="w-full h-full relative bg-theme3">
        <div className="relative px-8 py-32 md:max-w-none text-center text-theme1">
          <h1 className="font-black text-3xl">Pencarian Destinasi Wisata di</h1>
          <h1 className="font-black text-3xl">Provinsi Bali</h1>
          <Dropdown />
          <div className="relative z-0 mt-12 gap-8 flex-wrap flex justify-center items-center">
          {wisata.map((value,index)=>{
         return <section style={{ backgroundImage: `url('${value.picture_url}')` }} className="card-container"key={index}><Cards item={value}/></section>})}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pencarian;
