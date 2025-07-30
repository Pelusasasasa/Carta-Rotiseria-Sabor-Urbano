'use Client'
import Image from 'next/image'
import React from 'react'
import rotiseria from '../../rotiseria.config'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { useCarritoStore } from '@/store/useCarritoStore'
import { totalProductos } from '../helpers/totalProductos'

export const Header = () => {

    const { abrir, productos } = useCarritoStore()

return (
    <header className="mx-5">
        <div className="flex gap-5 items-center justify-between">
            <div className='flex gap-5 items-center'>
                <Image src="/images/icon.png" alt={rotiseria.nombre} width={50} height={50}/>
                <h1 className="text-xl md:text-2xl font-bold">{rotiseria.nombre}</h1>
            </div>

            <div className='cursor-pointer hover:bg-white/20 p-2 hover:rounded-full' onClick={abrir}>
                <p className='ml-5 p-1 text-black text-center bg-yellow-400 rounded-full'>{totalProductos(productos)}</p>
                <MdOutlineShoppingCart size={20} className='text-yellow-400'/>
                
            </div>
        </div>
        <p className="text-white mt-2">{rotiseria.direccion}</p>
    </header>
)
}
