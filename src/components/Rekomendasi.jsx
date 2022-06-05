import React from 'react'
import wisata1 from '../assets/wisata1.jpg'
const Rekomendasi = () => {
  return (
  <section>
      <section id="beranda">
        <div className="w-full h-screen relative bg-theme3">
          <div class="container max-w-lg px-4 py-32 mx-auto my-auto text-left md:max-w-none md:text-center">
              <h1 class="text-5xl font-extrabold leading-10 tracking-tight text-left text-theme1 md:text-center sm:leading-none md:text-6xl lg:text-7xl">Rekomendasi</h1>
              <div class="mx-auto mt-1 text-theme1 md:mt-3 md:max-w-lg md:text-center lg:text-lg">Destinasi Wisata Yang Paling Sering Dikunjungi</div>
              <div class="mt-12 gap-4 flex-wrap flex justify-center items-center">
              <div className='bg-black opacity-100 blur-md'></div>
              <div className="w-60 p-2 rounded-xl bg-cover bg-center transform transition-all hover:-translate-y-2 duration-300 shadow-lg bg-opacity-80 hover:shadow-2xl hover:scale-110" style={{ backgroundImage:`url('${wisata1}')`,}}>
                  <img class="w-full h-60 object-cover rounded-xl h-40 object-cover rounded-xl" src={wisata1} alt="" />
                  <div class="p-2">
                    <h2 class="font-bold text-lg mb-2 ">Heading</h2>
                    <p class="text-sm text-gray-600">Simple Yet Beautiful Card Design with TaiwlindCss. Subscribe to our Youtube channel for more ...</p>
                  </div>
                </div>
              {/* Tambahan  */}
              <div class="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl hover:scale-110">
                  <img class="w-full h-60 object-cover rounded-xl h-40 object-cover rounded-xl" src={wisata1} alt="" />
                  <div class="p-2">
                    <h2 class="font-bold text-lg mb-2 ">Heading</h2>
                    <p class="text-sm text-gray-600">Simple Yet Beautiful Card Design with TaiwlindCss. Subscribe to our Youtube channel for more ...</p>
                  </div>
                </div>
              {/* Tambahan  */}
              <div class="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl hover:scale-110">
                  <img class="w-full h-60 object-cover rounded-xl h-40 object-cover rounded-xl" src={wisata1} alt="" />
                  <div class="p-2">
                    <h2 class="font-bold text-lg mb-2 ">Heading</h2>
                    <p class="text-sm text-gray-600">Simple Yet Beautiful Card Design with TaiwlindCss. Subscribe to our Youtube channel for more ...</p>
                  </div>
                </div>
              {/* Tambahan  */}
              <div class="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl hover:scale-110">
                  <img class="w-full h-60 object-cover rounded-xl h-40 object-cover rounded-xl" src={wisata1} alt="" />
                  <div class="p-2">
                    <h2 class="font-bold text-lg mb-2 ">Heading</h2>
                    <p class="text-sm text-gray-600">Simple Yet Beautiful Card Design with TaiwlindCss. Subscribe to our Youtube channel for more ...</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Rekomendasi