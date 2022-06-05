import React from 'react'
import wisata1 from '../assets/wisata1.jpg'
const Jelajah = () => {
    return (
      <section id="Jelajah">
      <div className="w-full h-full bg-theme3">
        <div class="relative px-4 py-32 text-left md:max-w-none md:text-center">
            <h1 class="text-5xl font-extrabold leading-10 tracking-tight text-left text-theme1 md:text-center sm:leading-none md:text-6xl lg:text-5xl">Mari Berjelajah!</h1>
            <div class="mx-auto mt-1 text-theme1 md:mt-3 md:max-w-lg md:text-center lg:text-lg">Jelajahi Destinasi Wisata Yang Ada Di Bali</div>
            <div class="mt-12 gap-8 flex-wrap flex justify-center items-center">
              {/* Cards And Background Root */}
              <div className="card-container w-96" style={{ backgroundImage: `url('${wisata1}')`}}>
                <div className="min-h-full bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50 p-3">
                  <img class="w-full h-40 object-cover rounded-xl" src={wisata1} alt="" />
                  <div class="p-2">
                    <h2 class="font-bold text-lg mb-2 text-theme1 ">Bali</h2>
                    <p class="text-sm text-gray-100">Simple Yet Beautiful Card Design with TaiwlindCss Subscribe to our Youtube channel for more </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-12 gap-10 flex-wrap flex justify-center items-center">
              {/* Cards And Background child Start */}
            <div className="card-container w-80" style={{ backgroundImage: `url('${wisata1}')`}}>
              <div className="min-h-full bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50 p-3">
                <img class="w-full h-40 object-cover rounded-xl" src={wisata1} alt="" />
                <div class="p-2">
                  <h2 class="font-bold text-lg mb-2 text-theme1 ">Karangasem</h2>
                  <p class="text-sm text-gray-100">Simple Yet Beautiful Card Design with TaiwlindCss Subscribe to our Youtube channel for more </p>
                </div>
              </div>
            </div>
            <div className="card-container w-80" style={{ backgroundImage: `url('${wisata1}')`}}>
              <div className="min-h-full bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50 p-3">
                <img class="w-full h-40 object-cover rounded-xl" src={wisata1} alt="" />
                <div class="p-2">
                  <h2 class="font-bold text-lg mb-2 text-theme1 ">Bangli</h2>
                  <p class="text-sm text-gray-100">Simple Yet Beautiful Card Design with TaiwlindCss Subscribe to our Youtube channel for more </p>
                </div>
              </div>
            </div>
            <div className="card-container w-80" style={{ backgroundImage: `url('${wisata1}')`}}>
              <div className="min-h-full bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50 p-3">
                <img class="w-full h-40 object-cover rounded-xl" src={wisata1} alt="" />
                <div class="p-2">
                  <h2 class="font-bold text-lg mb-2 text-theme1 ">Gianyar</h2>
                  <p class="text-sm text-gray-100">Simple Yet Beautiful Card Design with TaiwlindCss Subscribe to our Youtube channel for more </p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-12 gap-10 flex-wrap flex justify-center items-center">
            <div className="card-container w-80" style={{ backgroundImage: `url('${wisata1}')`}}>
              <div className="min-h-full bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50 p-3">
                <img class="w-full h-40 object-cover rounded-xl" src={wisata1} alt="" />
                <div class="p-2">
                  <h2 class="font-bold text-lg mb-2 text-theme1 ">Buleleng</h2>
                  <p class="text-sm text-gray-100">Simple Yet Beautiful Card Design with TaiwlindCss Subscribe to our Youtube channel for more </p>
                </div>
              </div>
            </div>
            <div className="card-container w-80" style={{ backgroundImage: `url('${wisata1}')`}}>
              <div className="min-h-full bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50 p-3">
                <img class="w-full h-40 object-cover rounded-xl" src={wisata1} alt="" />
                <div class="p-2">
                  <h2 class="font-bold text-lg mb-2 text-theme1 ">Klungkung</h2>
                  <p class="text-sm text-gray-100">Simple Yet Beautiful Card Design with TaiwlindCss Subscribe to our Youtube channel for more </p>
                </div>
              </div>
            </div>
            <div className="card-container w-80" style={{ backgroundImage: `url('${wisata1}')`}}>
              <div className="min-h-full bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50 p-3">
                <img class="w-full h-40 object-cover rounded-xl" src={wisata1} alt="" />
                <div class="p-2">
                  <h2 class="font-bold text-lg mb-2 text-theme1 ">Badung</h2>
                  <p class="text-sm text-gray-100">Simple Yet Beautiful Card Design with TaiwlindCss Subscribe to our Youtube channel for more </p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-12 gap-10 flex-wrap flex justify-center items-center">
            <div className="card-container w-80" style={{ backgroundImage: `url('${wisata1}')`}}>
              <div className="min-h-full bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50 p-3">
                <img class="w-full h-40 object-cover rounded-xl" src={wisata1} alt="" />
                <div class="p-2">
                  <h2 class="font-bold text-lg mb-2 text-theme1 ">Tabanan</h2>
                  <p class="text-sm text-gray-100">Simple Yet Beautiful Card Design with TaiwlindCss Subscribe to our Youtube channel for more </p>
                </div>
              </div>
            </div>
            <div className="card-container w-80" style={{ backgroundImage: `url('${wisata1}')`}}>
              <div className="min-h-full bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50 p-3">
                <img class="w-full h-40 object-cover rounded-xl" src={wisata1} alt="" />
                <div class="p-2">
                  <h2 class="font-bold text-lg mb-2 text-theme1 ">Jembrana</h2>
                  <p class="text-sm text-gray-100">Simple Yet Beautiful Card Design with TaiwlindCss Subscribe to our Youtube channel for more </p>
                </div>
              </div>
            </div>
            <div className="card-container w-80" style={{ backgroundImage: `url('${wisata1}')`}}>
              <div className="min-h-full bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50 p-3">
                <img class="w-full h-40 object-cover rounded-xl" src={wisata1} alt="" />
                <div class="p-2">
                  <h2 class="font-bold text-lg mb-2 text-theme1 ">Denpasar</h2>
                  <p class="text-sm text-gray-100">Simple Yet Beautiful Card Design with TaiwlindCss Subscribe to our Youtube channel for more </p>
                </div>
              </div>
            </div>
            {/* Cards And Background End */}
          </div>
        </div>
      </div>
    </section>
    )
  }
  
  export default Jelajah