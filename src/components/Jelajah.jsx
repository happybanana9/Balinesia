/* eslint-disable prettier/prettier */
import React from "react";
import karangasem from "../assets/karangasem.png";
import badung from "../assets/badung.png";
import bangli from "../assets/bangli.png";
import gianyar from "../assets/gianyar.png";
import buleleng from "../assets/buleleng.png";
import klungkung from "../assets/klungkung.png";
import tabanan from "../assets/tabanan.png";
import jembrana from "../assets/jembrana.png";
import denpasar from "../assets/denpasar.png";
const Jelajah = () => {
  return (
    <section id="Jelajah">
      <div className="w-full h-full bg-theme3">
        <div className="relative px-4 py-32 text-left md:max-w-none md:text-center">
          <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-left text-theme1 md:text-center sm:leading-none md:text-6xl lg:text-5xl">
            Mari Berjelajah!
          </h1>
          <div className="mx-auto mt-1 text-theme1 md:mt-3 md:max-w-lg md:text-center lg:text-lg">
            Jelajahi Destinasi Wisata Yang Ada Di Bali
          </div>
          <div className="mt-12 gap-10 flex-wrap flex justify-center items-center">
            {/* Cards And Background child Start */}
            <div
              className="card-container w-80"
              style={{ backgroundImage: `url('${karangasem}')` }}
            >
              <div className="min-h-full bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50 p-3">
                <img
                  className="mx-auto h-40 object-cover rounded-xl"
                  src={karangasem}
                  alt=""
                />
                <div className="p-2">
                  <h2 className="font-bold text-lg mb-2 text-theme1 ">
                    Karangasem
                  </h2>
                  <p className="text-sm text-gray-100">
                    Simple Yet Beautiful Card Design with TaiwlindCss Subscribe
                    to our Youtube channel for more{" "}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="card-container w-80"
              style={{ backgroundImage: `url('${bangli}')` }}
            >
              <div className="min-h-full bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50 p-3">
                <img
                  className="mx-auto h-40 object-cover rounded-xl"
                  src={bangli}
                  alt=""
                />
                <div className="p-2">
                  <h2 className="font-bold text-lg mb-2 text-theme1 ">
                    Bangli
                  </h2>
                  <p className="text-sm text-gray-100">
                    Simple Yet Beautiful Card Design with TaiwlindCss Subscribe
                    to our Youtube channel for more{" "}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="card-container w-80"
              style={{ backgroundImage: `url('${gianyar}')` }}
            >
              <div className="min-h-full bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50 p-3">
                <img
                  className="mx-auto h-40 object-cover rounded-xl"
                  src={gianyar}
                  alt=""
                />
                <div className="p-2">
                  <h2 className="font-bold text-lg mb-2 text-theme1 ">
                    Gianyar
                  </h2>
                  <p className="text-sm text-gray-100">
                    Simple Yet Beautiful Card Design with TaiwlindCss Subscribe
                    to our Youtube channel for more{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 gap-10 flex-wrap flex justify-center items-center">
            <div
              className="card-container w-80"
              style={{ backgroundImage: `url('${buleleng}')` }}
            >
              <div className="min-h-full bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50 p-3">
                <img
                  className="mx-auto h-40 object-cover rounded-xl"
                  src={buleleng}
                  alt=""
                />
                <div className="p-2">
                  <h2 className="font-bold text-lg mb-2 text-theme1 ">
                    Buleleng
                  </h2>
                  <p className="text-sm text-gray-100">
                    Simple Yet Beautiful Card Design with TaiwlindCss Subscribe
                    to our Youtube channel for more{" "}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="card-container w-80"
              style={{ backgroundImage: `url('${klungkung}')` }}
            >
              <div className="min-h-full bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50 p-3">
                <img
                  className="mx-auto h-40 object-cover rounded-xl"
                  src={klungkung}
                  alt=""
                />
                <div className="p-2">
                  <h2 className="font-bold text-lg mb-2 text-theme1 ">
                    Klungkung
                  </h2>
                  <p className="text-sm text-gray-100">
                    Simple Yet Beautiful Card Design with TaiwlindCss Subscribe
                    to our Youtube channel for more{" "}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="card-container w-80"
              style={{ backgroundImage: `url('${badung}')` }}
            >
              <div className="min-h-full bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50 p-3">
                <img
                  className="mx-auto h-40 object-cover rounded-xl"
                  src={badung}
                  alt=""
                />
                <div className="p-2">
                  <h2 className="font-bold text-lg mb-2 text-theme1 ">
                    Badung
                  </h2>
                  <p className="text-sm text-gray-100">
                    Simple Yet Beautiful Card Design with TaiwlindCss Subscribe
                    to our Youtube channel for more{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 gap-10 flex-wrap flex justify-center items-center">
            <div
              className="card-container w-80"
              style={{ backgroundImage: `url('${tabanan}')` }}
            >
              <div className="min-h-full bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50 p-3">
                <img
                  className="mx-auto h-40 object-cover rounded-xl"
                  src={tabanan}
                  alt=""
                />
                <div className="p-2">
                  <h2 className="font-bold text-lg mb-2 text-theme1 ">
                    Tabanan
                  </h2>
                  <p className="text-sm text-gray-100">
                    Simple Yet Beautiful Card Design with TaiwlindCss Subscribe
                    to our Youtube channel for more{" "}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="card-container w-80"
              style={{ backgroundImage: `url('${jembrana}')` }}
            >
              <div className="min-h-full bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50 p-3">
                <img
                  className="mx-auto h-40 object-cover rounded-xl"
                  src={jembrana}
                  alt=""
                />
                <div className="p-2">
                  <h2 className="font-bold text-lg mb-2 text-theme1 ">
                    Jembrana
                  </h2>
                  <p className="text-sm text-gray-100">
                    Simple Yet Beautiful Card Design with TaiwlindCss Subscribe
                    to our Youtube channel for more{" "}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="card-container w-80"
              style={{ backgroundImage: `url('${denpasar}')` }}
            >
              <div className="min-h-full bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50 p-3">
                <img
                  className="mx-auto h-40 object-cover rounded-xl"
                  src={denpasar}
                  alt=""
                />
                <div className="p-2">
                  <h2 className="font-bold text-lg mb-2 text-theme1 ">
                    Denpasar
                  </h2>
                  <p className="text-sm text-gray-100">
                    Simple Yet Beautiful Card Design with TaiwlindCss Subscribe
                    to our Youtube channel for more{" "}
                  </p>
                </div>
              </div>
            </div>
            {/* Cards And Background End */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jelajah;
