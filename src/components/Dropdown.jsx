import React from 'react'

const Dropdown = () => {
  return (
        <div className="top-2 flex flex-wrap justify-center items-center gap-14 p-7">
            {/* Dropdown Location */}
            <button className="
                relative
                flex jutify-center items-center
                bg-gray-700
                text-white rounded-2xl
                focus:outline-none focus:ring
                ring-gray-700
                group
                ">
                <p className="px-4">Dropdown</p>
                <span className="border-l p-2">
                    <svg
                    className="w-7 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                        ></path>
                    </svg>
                </span>
                <div className="
                    absolute top-full
                    hidden group-focus:block
                    min-w-full w-max
                    bg-gray-700
                    shadow-md mt-1 rounded
                ">
                    <ul className="text-left border rounded">
                    <li className="px-4 py-1 hover:bg-gray-600 border-b">
                        menu list 1
                    </li>
                    <li className="px-4 py-1 hover:bg-gray-600 border-b">
                        menu list 2
                    </li>
                    <li className="px-4 py-1 hover:bg-gray-600 border-b">
                        menu list 3
                    </li>
                    <li className="px-4 py-1 hover:bg-gray-600 border-b">
                        menu list 4
                    </li>
                    <li className="px-4 py-1 hover:bg-gray-600">
                        menu list 5
                    </li>
                    </ul>
                </div>
            </button>
            {/* Dropdown Price */}
            <button className="
                relative
                flex jutify-center items-center
                bg-gray-700
                text-white rounded-2xl
                focus:outline-none focus:ring
                ring-gray-700
                group
                ">
                <p className="px-4">Dropdown</p>
                <span className="border-l p-2">
                    <svg
                    className="w-7 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                        ></path>
                    </svg>
                </span>
                <div className="
                    absolute top-full
                    hidden group-focus:block
                    min-w-full w-max
                    bg-gray-700
                    shadow-md mt-1 rounded
                ">
                    <ul className="text-left border rounded">
                    <li className="px-4 py-1 hover:bg-gray-600 border-b">
                        menu list 1
                    </li>
                    <li className="px-4 py-1 hover:bg-gray-600 border-b">
                        menu list 2
                    </li>
                    <li className="px-4 py-1 hover:bg-gray-600 border-b">
                        menu list 3
                    </li>
                    <li className="px-4 py-1 hover:bg-gray-600 border-b">
                        menu list 4
                    </li>
                    <li className="px-4 py-1 hover:bg-gray-600">
                        menu list 5
                    </li>
                    </ul>
                </div>
            </button>
            {/* Dropdown Rating */}
            <button className="
                relative
                flex jutify-center items-center
                bg-gray-700
                text-white rounded-2xl
                focus:outline-none focus:ring
                ring-gray-700
                group
                ">
                <p className="px-4">Dropdown</p>
                <span className="border-l p-2">
                    <svg
                    className="w-7 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                        ></path>
                    </svg>
                </span>
                <div className="
                    absolute top-full
                    hidden group-focus:block
                    min-w-full w-max
                    bg-gray-700
                    shadow-md mt-1 rounded
                ">
                    <ul className="text-left border rounded">
                    <li className="px-4 py-1 hover:bg-gray-600 border-b">
                        menu list 1
                    </li>
                    <li className="px-4 py-1 hover:bg-gray-600 border-b">
                        menu list 2
                    </li>
                    <li className="px-4 py-1 hover:bg-gray-600 border-b">
                        menu list 3
                    </li>
                    <li className="px-4 py-1 hover:bg-gray-600 border-b">
                        menu list 4
                    </li>
                    <li className="px-4 py-1 hover:bg-gray-600">
                        menu list 5
                    </li>
                    </ul>
                </div>
            </button>
            <button className="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-3xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>Cari Destinasi
            </button>
        </div>
  )
}

export default Dropdown
