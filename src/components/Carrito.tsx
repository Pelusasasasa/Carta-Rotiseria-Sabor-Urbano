import React from 'react'
import { CgClose } from 'react-icons/cg'
import rotiseria from '../../rotiseria.config'
import { DatosCliente } from './DatosCliente'
import { useCarritoStore } from '@/store/useCarritoStore'

export const Carrito = () => {

    const { cerrar, total } = useCarritoStore();

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/80'>
        <div className={` p-6 rounded shadow-md text-center w-xl `} style={{backgroundColor: rotiseria.colorPrimario}}>
            
            <div className='flex  justify-between'>
                <h2 className='text-yellow-400 text-xl'>Carrito de Compras</h2>
                <CgClose size={20} className='text-gray-500 hover:text-white hover:cursor-pointer' onClick={cerrar}/>
            </div>


            <div className='flex justify-between mt-2'>
                <p className='text-xl font-bold'>Total: </p>
                <p className='text-xl font-bold text-yellow-400'>${total().toFixed(2)}</p>
            </div>

            <DatosCliente/>
        </div>
    </div>
  )
}
