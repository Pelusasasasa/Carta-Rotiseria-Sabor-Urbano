import React from 'react'

const rubros = [
    {
        nombre: 'TODOS',
    },
    {
        nombre: 'EMPANADAS',
    },
    {
        nombre: 'PIZZAS',
    },
]

export const Rubros = () => {
  return (

    <div className='flex gap-5 w-full'>
        {
            rubros.map((rubro) => (
                <div key={rubro.nombre} className='bg-gray-400 p-1 rounded-sm hover:bg-amber-500 cursor-pointer'>
                    <p className='text-gray-700 text-xs font-bold hover:text-white'>{rubro.nombre}</p>
                </div>
            ))
        }
    </div>
    
  )
}
