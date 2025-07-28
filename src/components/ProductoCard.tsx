import React from 'react'
import Image from 'next/image'
import { IoMdAdd } from 'react-icons/io'
import { Producto } from '@/interface/Producto'
import { useCarritoStore } from '@/store/useCarritoStore'



const ProductoCard = ({_id, img, precio, descripcion, seccion}: Producto) => {

    const { agregarProducto } = useCarritoStore();

    const addProducto = () => {
        agregarProducto({
            _id,
            precio,
            descripcion,
            cantidad: 1,
            
        })
    }

  return (
    <div className='container mx-auto'>
        <div className='flex flex-col items-center bg-slate-700 rounded-sm py-5'>
            <div className='bg-white h-20 w-20 rounded-sm'>
                <Image src={img ?? ''} alt={descripcion}/>
            </div>

            <div>
                <h2 className='font-bold mt-2 text-2xl text-center'>{descripcion}</h2>

                <p className='text-center  text-gray-400'>{seccion.nombre}</p>

                <p className='text-center text-yellow-400 text-xl font-bold'>${precio.toFixed(2)}</p>
            </div>

            <div onClick={addProducto} className='flex bg-yellow-400 w-[90%] py-1 rounded-sm hover:bg-yellow-500 mt-5 justify-center mx-10 items-center gap-5 cursor-pointer'>
                <IoMdAdd color='black' size={20}/>
                <button className='text-black'>Agregar</button>
            </div>
        </div>
    </div>
  )
}

export default ProductoCard