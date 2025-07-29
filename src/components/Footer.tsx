import { useCarritoStore } from '@/store/useCarritoStore'
import React from 'react'
import { CiHome } from 'react-icons/ci'
import { MdOutlineShoppingCart } from 'react-icons/md'

export const Footer = () => {

  const {productos, abierto, abrir} = useCarritoStore();

  return (
    <footer className="flex justify-center gap-15">
        <div className={`flex justify-center flex-col items-center gap-1 cursor-pointer`}>
          <CiHome size={20} className={`${!abierto ? 'text-yellow-400' : 'text-gray-500'}`}/>
          <p className={`${!abierto ? 'text-yellow-400' : 'text-gray-500'}`}>Sabor Urbano</p> 
        </div>
        <div className="flex justify-center flex-col items-center gap-1 cursor-pointer" onClick={abrir}>
          {productos.length > 0 && <p className='ml-5 p-1 text-black text-center bg-yellow-400 rounded-full'>{productos.length}</p>}
          <MdOutlineShoppingCart size={20} className={`${abierto ? 'text-yellow-400' : 'text-gray-500'}`}/>
          <p className={`${abierto ? 'text-yellow-400' : 'text-gray-500'}`}>{productos.length}</p>
        </div>
      </footer>
  )
}
