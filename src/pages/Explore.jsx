/* eslint-disable prettier/prettier */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../components/Cards";

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
          {wisata.map((value,index)=>{
         return <div style={{ backgroundImage: `url('${value.picture_url}')` }} className="card-container flex-wrap items-center mx-auto justify-center mt-5 "key={index}><Cards item={value}/></div>})}
  </>;
}

export default Explore;
