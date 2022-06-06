import React from 'react'
import Dropdown from './Dropdown'
import wisata1 from '../assets/wisata1.jpg'

const Pencarian = () => {
    return (
        <section id="Pencarian">
          <div className="w-full h-screen relative bg-theme3">
            <div className="absolute top-20 w-full h-full flex flex-col text-center text-theme1">
                <h1 className="font-black text-3xl">Pencarian Destinasi Wisata di</h1>
                <h1 className='font-black text-3xl'>Provinsi Bali</h1>
                <Dropdown/>
                <div class="mt-12 gap-8 flex-wrap flex justify-center items-center">
                {/* Cards And Background child Start */}
                  <div className="card-container w-52" style={{ backgroundImage: `url('${wisata1}')`}}>
                      <div className="min-h-full bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50 p-3">
                        <img class="w-full h-40 object-cover rounded-xl" src={wisata1} alt="" />
                        <div class="p-2">
                          <h2 class="font-bold text-lg mb-2 text-theme1 ">Heading</h2>
                          <p class="text-sm text-gray-100">Simple Yet Beautiful Card Design with TaiwlindCss Subscribe to our Youtube channel for more </p>
                        </div>
                      </div>
                  </div>
                  <div className="card-container w-52" style={{ backgroundImage: `url('${wisata1}')`}}>
                      <div className="min-h-full bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50 p-3">
                        <img class="w-full h-40 object-cover rounded-xl" src={wisata1} alt="" />
                        <div class="p-2">
                          <h2 class="font-bold text-lg mb-2 text-theme1 ">Heading</h2>
                          <p class="text-sm text-gray-100">Simple Yet Beautiful Card Design with TaiwlindCss Subscribe to our Youtube channel for more </p>
                        </div>
                      </div>
                  </div>
                  <div className="card-container w-52" style={{ backgroundImage: `url('${wisata1}')`}}>
                      <div className="min-h-full bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50 p-3">
                        <img class="w-full h-40 object-cover rounded-xl" src={wisata1} alt="" />
                        <div class="p-2">
                          <h2 class="font-bold text-lg mb-2 text-theme1 ">Heading</h2>
                          <p class="text-sm text-gray-100">Simple Yet Beautiful Card Design with TaiwlindCss Subscribe to our Youtube channel for more </p>
                        </div>
                      </div>
                  </div>
                  <div className="card-container w-52" style={{ backgroundImage: `url('${wisata1}')`}}>
                      <div className="min-h-full bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50 p-3">
                        <img class="w-full h-40 object-cover rounded-xl" src={wisata1} alt="" />
                        <div class="p-2">
                          <h2 class="font-bold text-lg mb-2 text-theme1 ">Heading</h2>
                          <p class="text-sm text-gray-100">Simple Yet Beautiful Card Design with TaiwlindCss Subscribe to our Youtube channel for more </p>
                        </div>
                      </div>
                  </div>
                  <div className="card-container w-52" style={{ backgroundImage: `url('${wisata1}')`}}>
                      <div className="min-h-full bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50 p-3">
                        <img class="w-full h-40 object-cover rounded-xl" src={wisata1} alt="" />
                        <div class="p-2">
                          <h2 class="font-bold text-lg mb-2 text-theme1 ">Heading</h2>
                          <p class="text-sm text-gray-100">Simple Yet Beautiful Card Design with TaiwlindCss Subscribe to our Youtube channel for more </p>
                        </div>
                      </div>
                  </div>
                  <div className="card-container w-52" style={{ backgroundImage: `url('${wisata1}')`}}>
                      <div className="min-h-full bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50 p-3">
                        <img class="w-full h-40 object-cover rounded-xl" src={wisata1} alt="" />
                        <div class="p-2">
                          <h2 class="font-bold text-lg mb-2 text-theme1 ">Heading</h2>
                          <p class="text-sm text-gray-100">Simple Yet Beautiful Card Design with TaiwlindCss Subscribe to our Youtube channel for more </p>
                        </div>
                      </div>
                  </div>
                  <div className="card-container w-52" style={{ backgroundImage: `url('${wisata1}')`}}>
                      <div className="min-h-full bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50 p-3">
                        <img class="w-full h-40 object-cover rounded-xl" src={wisata1} alt="" />
                        <div class="p-2">
                          <h2 class="font-bold text-lg mb-2 text-theme1 ">Heading</h2>
                          <p class="text-sm text-gray-100">Simple Yet Beautiful Card Design with TaiwlindCss Subscribe to our Youtube channel for more </p>
                        </div>
                      </div>
                  </div>
                  <div className="card-container w-52" style={{ backgroundImage: `url('${wisata1}')`}}>
                      <div className="min-h-full bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50 p-3">
                        <img class="w-full h-40 object-cover rounded-xl" src={wisata1} alt="" />
                        <div class="p-2">
                          <h2 class="font-bold text-lg mb-2 text-theme1 ">Heading</h2>
                          <p class="text-sm text-gray-100">Simple Yet Beautiful Card Design with TaiwlindCss Subscribe to our Youtube channel for more </p>
                        </div>
                      </div>
                  </div>
                  
                </div>
            </div>     
          </div>
        </section>
    )
  }
  
  export default Pencarian