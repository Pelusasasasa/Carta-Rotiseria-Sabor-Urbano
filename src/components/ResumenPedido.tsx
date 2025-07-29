
import React from 'react'
import { ProductoItemCarrito } from './ProductoItemCarrito'
import { useCarritoStore } from '@/store/useCarritoStore'

const ResumenPedido = () => {
    const { total, productos } = useCarritoStore();
  return (
    <div className='space-y-4'>

        <h3 className='text-yellow-400 text-xl text-center'>Resumen del Pedido</h3>
        <hr className='text-gray-700 '/>

        <div className='overflow-y-auto max-h-[350px]'>
            {
                productos.map(producto => (
                    <ProductoItemCarrito {...producto} key={producto._id}/>
                ))
            }
        </div>

        <hr className='text-gray-700 '/>

        <div>
            <div className='flex justify-between my-2'>
                <p className='text-sm'>Cantidad de Productos: </p>
                <p>{productos.length} Items</p>
            </div>

            <hr className='text-gray-700 '/>

            <div className='flex justify-between my-2'>
                <p className='text-md'>Subtotal: </p>
                <p className='text-yellow-400 font-bold text-xl'>${total().toFixed(2)}</p>
            </div>
        </div>

    </div>
  )
}

export default ResumenPedido