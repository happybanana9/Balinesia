/* eslint-disable prettier/prettier */
import React from "react";
import Cards from "./Cards";
const Rekomendasi = () => {
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
          <Cards></Cards>
          {/* Cards And Background End */}
        </div>
      </div>
    </section>
  );
};

export default Rekomendasi;
