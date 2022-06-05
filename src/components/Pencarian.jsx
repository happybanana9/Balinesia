import React from 'react'
import Dropdown from './Dropdown'

const Pencarian = () => {
  const options = ['New', 'Edit', 'Update', 'Delete']
    return (
        <section id="beranda">
          <div className="w-full h-screen relative bg-theme3">
            <div className="absolute top-20 w-full h-full flex flex-col text-center text-theme1">
                <h1 className="font-black text-3xl">Pencarian Destinasi Wisata di Provinsi Bali</h1>
                <Dropdown options={options}/>
            </div>     
          </div>
        </section>
    )
  }
  
  export default Pencarian