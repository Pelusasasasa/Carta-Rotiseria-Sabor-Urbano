import React from 'react'
import ProductoCard from './ProductoCard'
import { Producto } from '@/interface/Producto'

const productos: Producto[] = [
    {
      _id: "1",
      descripcion: 'Producto 1',
      precio: 5000,
      seccion: {
        nombre: 'Tostados'
      }
    },
    {
      _id: "2",
      descripcion: 'Producto 2',
      precio: 15000,
      seccion: {
        nombre: 'Tostados 2'
      }
    }
]

export const Productos = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-15 my-10 bg-slate-800 h-[60vh] p-5'>
      {productos.map(elem => (
        <ProductoCard key={elem._id} {...elem}/>
      ))}
    </div>
  )
}
