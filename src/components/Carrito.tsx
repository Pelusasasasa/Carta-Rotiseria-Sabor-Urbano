import React from 'react'
import { CgClose } from 'react-icons/cg'
import rotiseria from '../../rotiseria.config'
import { DatosCliente } from './DatosCliente'
import { useCarritoStore } from '@/store/useCarritoStore'
import ResumenPedido from './ResumenPedido'

export const Carrito = () => {

    const { cerrar} = useCarritoStore();

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/80'>

      <div style={{backgroundColor: rotiseria.colorPrimario}} className='border border-gray-500 text-center'>
            <div className='flex justify-center relative items-center my-5'>
              <h3 className='text-yellow-400 text-xl'>Finalizar Pedido</h3>
              <button className='absolute right-0 mx-2 hover:cursor-pointer'>
                <CgClose className='hover:text-white text-gray-500' onClick={cerrar} size={25}/>
              </button>
            </div>
          
          <div className={` w-3xl p-5 rounded-sm grid grid-cols-1 md:grid-cols-2  gap-6 `}>    
              <DatosCliente/>

              <ResumenPedido/>
          </div>
      </div>
    </div>
  )
}
