import React from "react"
const Dropdown = () =>{
    return (
        <div class="relative flex justify-center items-center gap-14 pt-7">
            {/* Dropdown Location */}
            <button class="
                relative 
                flex jutify-center items-center 
                bg-gray-700 
                text-white rounded-2xl 
                focus:outline-none focus:ring 
                ring-gray-700
                group
                ">
                <p class="px-4">Dropdown</p>
                <span class="border-l p-2">
                    <svg 
                    class="w-7 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg">
                        <path 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M19 9l-7 7-7-7"
                        ></path>
                    </svg>
                </span>
                <div class="
                    absolute top-full
                    hidden group-focus:block 
                    min-w-full w-max 
                    bg-gray-700 
                    shadow-md mt-1 rounded
                ">
                    <ul class="text-left border rounded">
                    <li class="px-4 py-1 hover:bg-gray-600 border-b">
                        menu list 1
                    </li>
                    <li class="px-4 py-1 hover:bg-gray-600 border-b">
                        menu list 2
                    </li>
                    <li class="px-4 py-1 hover:bg-gray-600 border-b">
                        menu list 3
                    </li>
                    <li class="px-4 py-1 hover:bg-gray-600 border-b">
                        menu list 4
                    </li>
                    <li class="px-4 py-1 hover:bg-gray-600">
                        menu list 5
                    </li>
                    </ul>
                </div>
            </button>
            {/* Dropdown Price */}
            <button class="
                relative 
                flex jutify-center items-center 
                bg-gray-700 
                text-white rounded-2xl 
                focus:outline-none focus:ring 
                ring-gray-700
                group
                ">
                <p class="px-4">Dropdown</p>
                <span class="border-l p-2">
                    <svg 
                    class="w-7 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg">
                        <path 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M19 9l-7 7-7-7"
                        ></path>
                    </svg>
                </span>
                <div class="
                    absolute top-full
                    hidden group-focus:block 
                    min-w-full w-max 
                    bg-gray-700 
                    shadow-md mt-1 rounded
                ">
                    <ul class="text-left border rounded">
                    <li class="px-4 py-1 hover:bg-gray-600 border-b">
                        menu list 1
                    </li>
                    <li class="px-4 py-1 hover:bg-gray-600 border-b">
                        menu list 2
                    </li>
                    <li class="px-4 py-1 hover:bg-gray-600 border-b">
                        menu list 3
                    </li>
                    <li class="px-4 py-1 hover:bg-gray-600 border-b">
                        menu list 4
                    </li>
                    <li class="px-4 py-1 hover:bg-gray-600">
                        menu list 5
                    </li>
                    </ul>
                </div>
            </button>
            {/* Dropdown Rating */}
            <button class="
                relative 
                flex jutify-center items-center 
                bg-gray-700 
                text-white rounded-2xl 
                focus:outline-none focus:ring 
                ring-gray-700
                group
                ">
                <p class="px-4">Dropdown</p>
                <span class="border-l p-2">
                    <svg 
                    class="w-7 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg">
                        <path 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M19 9l-7 7-7-7"
                        ></path>
                    </svg>
                </span>
                <div class="
                    absolute top-full
                    hidden group-focus:block 
                    min-w-full w-max 
                    bg-gray-700 
                    shadow-md mt-1 rounded
                ">
                    <ul class="text-left border rounded">
                    <li class="px-4 py-1 hover:bg-gray-600 border-b">
                        menu list 1
                    </li>
                    <li class="px-4 py-1 hover:bg-gray-600 border-b">
                        menu list 2
                    </li>
                    <li class="px-4 py-1 hover:bg-gray-600 border-b">
                        menu list 3
                    </li>
                    <li class="px-4 py-1 hover:bg-gray-600 border-b">
                        menu list 4
                    </li>
                    <li class="px-4 py-1 hover:bg-gray-600">
                        menu list 5
                    </li>
                    </ul>
                </div>
            </button>
            <button class="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-3xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
	            Cari Destinasi
            </button>
        </div>
    )
}

export default Dropdown