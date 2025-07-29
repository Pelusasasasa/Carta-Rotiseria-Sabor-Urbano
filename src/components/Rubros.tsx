import { useSecciones } from '@/hooks/useSeccion'
import React, { useEffect } from 'react'


export const Rubros = () => {

    const {secciones, startObtenerSecciones} = useSecciones();

    useEffect(() => {
        startObtenerSecciones()
    }, []);

  return (
    <div className='flex gap-5 w-full'>
        {
            secciones.map((seccion) => (
                <div key={seccion.nombre} className='bg-gray-400 p-1 rounded-sm hover:bg-amber-500 cursor-pointer'>
                    <p className='text-gray-700 text-xs font-bold hover:text-white'>{seccion.nombre}</p>
                </div>
            ))
        }
    </div>
    
  )
}
