import React from 'react'
import { NavLink } from 'react-router-dom'

import gun from "../assets/gun.png"
import cube from "../assets/cube.jpeg"

export default function Card() {

  const itemList = [
    {
      name: "Mouser Gun",
      image: gun,
    },
    {
      name: "Cocu Cube",
      image: cube,
    },
    {
      name: "Mouser Gun",
      image: "",
    },
    {
      name: "Mouser Gun",
      image: "",
    },
  ]

  return (
    <div className='bg-blue-600 '>
      <div class="flex items-center justify-center text-white font-bold pt-10 text-5xl">
      Out Top Products
      </div>
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {itemList.map((item) => (
        <div
          key={itemList.name}
          className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]"
        >
          <img
            src={item.image}
            alt={item.name}
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">{item.name}</h1>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
             <NavLink to="/products">Press to Know more &rarr;</NavLink> 
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
    
  )
}
