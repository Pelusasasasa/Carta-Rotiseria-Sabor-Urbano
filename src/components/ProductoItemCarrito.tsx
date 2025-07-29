import { Producto, useCarritoStore } from '@/store/useCarritoStore'
import Image from 'next/image'
import React from 'react'



export const ProductoItemCarrito = ({_id, cantidad, descripcion, precio, seccion}: Producto) => {

    const { agregarProducto, quitarProducto } = useCarritoStore()

    const restarProducto = () => {
        quitarProducto(_id)
    };

    const sumarProducto = () => {
        agregarProducto({_id, cantidad: 1, descripcion, precio, seccion})
    };

  return (
    <div className='flex bg-slate-800 my-5 p-2 rounded-sm gap-2'>
        
        <div className='bg-white h-10 w-10 rounded-sm'>
                {/* <Image src={`${ip}/${_id}.png`} alt={descripcion} width={20} height={20}/> */}
        </div>

        <div className='flex flex-col w-[230px]'>
            <h3 className='text-sm'>{descripcion}</h3>
            <p className='text-xs text-gray-400'>{seccion.nombre}</p>
            <p className='text-md text-yellow-400 font-bold'>${precio}</p>
        </div>

        <div className='ml-auto'>
            <div className='flex gap-1'>
                <button onClick={restarProducto} className='border rounded-sm h-7 text-xl w-7 flex items-center justify-center cursor-pointer border-gray-500 bg-white text-yellow-600 p-1 hover:bg-yellow-500 hover:text-black'>-</button>
                <p>{cantidad}</p>
                <button onClick={sumarProducto}
                className='border rounded-sm h-7 text-xl w-7 flex items-center justify-center cursor-pointer  border-gray-500 bg-white text-yellow-600 p-1 hover:bg-yellow-500 hover:text-black'>
                +</button>
            </div>

            <div>
                <p>${precio.toFixed(2)}</p>
            </div>
        </div>
    </div>
  )
}
