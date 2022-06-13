/* eslint-disable prettier/prettier */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../components/Cards";
import { Footer } from "../components/Footer";

function Explore() {
      const { lokasi } = useParams();
      const [wisata, setWisata] = useState([]);
      const getWisataDestination = async () => {
        const response = await axios.get(
          "http://localhost:5000/api/destinations/location/" + lokasi,
          { params: { lokasi } }
        );
        const resData = response.data.data;
        setWisata(resData);
        console.log(lokasi);
      };
    
      useEffect(() => {
        getWisataDestination();
      }, [lokasi]);

  return <>
  <section id="Destinasi">
    <div className="w-full h-full bg-theme3">
      <div className="relative px-4 py-64 md:max-w-none text-center">
        <div className="mt-12 gap-10 grid grid-cols-1 grid-rows-1 sm:grid-cols-1 sm:grid-rows-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-3 justify-items-center">
          {wisata.map((value,index)=>{
         return <div style={{ backgroundImage: `url('${value.picture_url}')` }} className="card-container flex-wrap items-center mx-auto justify-center mt-5 "key={index}><Cards item={value}/></div>})}
        </div>
      </div>
    </div>
    </section>
  <Footer></Footer>
  </>;
}

export default Explore;
