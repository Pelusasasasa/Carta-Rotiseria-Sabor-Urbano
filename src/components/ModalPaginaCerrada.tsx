import React from 'react'
import rotiseria from '../../rotiseria.config'
import { FiClock } from 'react-icons/fi'

export const ModalPaginaCerrada = () => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/80'>
      <div className='border border-gray-500 text-center w-3xl pb-15' style={{backgroundColor: rotiseria.colorPrimario}}>

        <div className='flex justify-center flex-col items-center my-2'>
          <FiClock className='text-red-400 mb-2' size={50}/> 
          <h3 className='text-3xl text-red-400'>Local Cerrado</h3>

          <p className='text-bold text-xl mt-2'>Lo sentimos, por el día de hoy nuestro local se encuentra cerrado.</p>
          <p className='text-gray-400 my-1'>Vuelve mañana para realizar tu pedido. ¡Te esperamos!</p>

          <div className='border-t border-gray-300 w-full mt-5 px-10'>

            <p className='mt-2 text-yellow-400 text-bold'>Horarios Habituales</p>
            <p>Lunes a Sabado: 19:30 - 00:00</p>

          </div>

        </div>

      </div>
    </div>
  )
}
