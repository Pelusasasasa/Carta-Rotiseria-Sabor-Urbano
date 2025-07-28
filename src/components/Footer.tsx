import React from 'react'
import { CiHome } from 'react-icons/ci'
import { MdOutlineShoppingCart } from 'react-icons/md'

export const Footer = () => {
  return (
    <footer className="flex justify-center gap-15">
        <div className="flex justify-center flex-col items-center gap-1">
          <CiHome size={20}/>
          <p>Sabor Urbano</p> 
        </div>
        <div className="flex justify-center flex-col items-center gap-1">
          <MdOutlineShoppingCart size={20} color="gray"/>
          <p className="text-gray-500">{0}</p>
        </div>
      </footer>
  )
}
