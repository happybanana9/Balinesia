/* eslint-disable prettier/prettier */
import React from "react";
import wisata1 from "../assets/wisata1.jpg";

const Cards = () => {
  return (
    <>
      <div
        className="card-container"
        style={{ backgroundImage: `url('${wisata1}')` }}
      >
        <div className="min-h-full bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50 p-3">
          <img
            className="w-full h-40 object-cover rounded-xl"
            src={wisata1}
            alt=""
          />
          <div className="p-2">
            <h2 className="font-bold text-lg mb-2 text-theme1 ">Heading</h2>
            <p className="text-sm text-gray-100">
              Simple Yet Beautiful Card Design with TaiwlindCss Subscribe to our
              Youtube channel for more{" "}
            </p>
            <h3 className="text-center font-semibold text-theme1 mt-5">
              Lokasi
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
