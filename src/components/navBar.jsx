import React from 'react'

const NavBar = () => {
  return (
      <header Class="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
      <div Class="container">
        <div Class="flex items-center justify-between relative">
          <div Class="px-4">
            <a href="#beranda" Class="font-black text-3xl text-theme1 block py-6 hover:text-theme2">Balinesia</a>
          </div>
          <div Class="flex items-center px-4">
            <button id="hamburger" name="hamburger" type="button" Class="block absolute right-4 lg:hidden">
              <span Class="hamburger-line transition duration-200 ease-in-out origin-top-left"></span>
              <span Class="hamburger-line transition duration-200 ease-in-out"></span>
              <span Class="hamburger-line transition duration-200 ease-in-out origin-bottom-left"></span>
            </button>
            <nav
              id="nav-menu"
              Class="hidden absolute py-5 bg-black bg-opacity-20 backdrop-blur-sm shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none lg:backdrop-blur-0"
            >
              <ul Class="block lg:flex">
                <li Class="group">
                  <a href="#beranda" Class="text-base font-bold text-theme1 py-2 mx-8 flex group-hover:text-theme2">Beranda</a>
                </li>
                <li Class="group">
                  <a href="#home" Class="text-base font-bold text-theme1 py-2 mx-8 flex group-hover:text-theme2">Cari Destinasi</a>
                </li>
                <li Class="group">
                  <a href="#home" Class="text-base font-bold text-theme1 py-2 mx-8 flex group-hover:text-theme2">Jelajah</a>
                </li>
                <li Class="group">
                  <a href="#home" Class="text-base font-bold text-theme1 py-2 mx-8 flex group-hover:text-theme2">Rekomendasi</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar