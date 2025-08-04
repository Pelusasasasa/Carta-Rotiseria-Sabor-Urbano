import React from 'react'
import Image from 'next/image'
import { IoMdAdd } from 'react-icons/io'
import { Producto } from '@/interface/Producto'
import { useCarritoStore } from '@/store/useCarritoStore'
import { useCartaEmpanada } from '@/hooks/useCartaEmpanada'

const ProductoCard = ({_id, imgCloudinaryPath = '', precio, descripcion, seccion}: Producto) => {
    const { agregarProducto } = useCarritoStore();
    const { carta } = useCartaEmpanada();

    const addProducto = () => {
        agregarProducto({
            cantidad: 1,
            producto: {_id, precio, descripcion, seccion: seccion, imgCloudinaryPath },
            carta
        })
    };

    const addProductoPor6 = () => {
        console.log(carta);
        agregarProducto({
            cantidad: 6,
            producto: {_id, precio, descripcion, seccion: seccion, imgCloudinaryPath },
            carta
        })
    };

    const addProductoPor12 = () => {
        agregarProducto({
            cantidad: 12,
            producto: {_id, precio, descripcion, seccion: seccion , imgCloudinaryPath},
            carta
        })
    };

  return (
    <div className='h-[235px]'>
        <div className='flex flex-col items-center bg-slate-700 h-full rounded-sm py-3 my-2'>
            <div className='bg-white h-16 w-16 rounded-lg'>
                {<Image src={`${imgCloudinaryPath ? imgCloudinaryPath : '/images/icon.png'}`} alt={descripcion} className='h-16 w-16 object-contain rounded-sm' width={64} height={64}/>}
            </div>

            <div>
                <h2 className='font-bold mt-2 text-md text-center text-white'>{descripcion}</h2>

                <p className='text-center  text-gray-400'>{seccion?.nombre}</p>

                <p className='text-center text-yellow-400 text-xl font-bold'>${precio.toFixed(2)}</p>
            </div>

            {seccion?.nombre !== 'EMPANADAS' && <div onClick={addProducto} className='flex mt-auto bg-yellow-400 w-[90%] py-1 rounded-sm hover:bg-yellow-500 justify-center mx-10 items-center gap-5 cursor-pointer'>
                    <IoMdAdd color='black' size={20}/>
                    <button className='text-black'>Agregar</button>
                </div>
            }

            {
                seccion?.nombre === 'EMPANADAS' && (
                    <div className='flex w-full gap-5 px-2 mt-auto'>
                        <div onClick={addProducto} className='flex bg-yellow-400 w-[90%] py-1 rounded-sm hover:bg-yellow-500 justify-center items-center gap-5 cursor-pointer'>
                            <button className='text-black cursor-pointer w-full'>x1</button>
                        </div>
                        
                        <div onClick={addProductoPor6} className='flex bg-yellow-400 w-[90%] py-1 rounded-sm hover:bg-yellow-500 justify-center items-center gap-5 cursor-pointer'>
                            <button className='text-black cursor-pointer w-full'>x6</button>
                        </div>

                        <div onClick={addProductoPor12} className='flex bg-yellow-400 w-[90%] py-1 rounded-sm hover:bg-yellow-500 justify-center items-center gap-5 cursor-pointer'>
                            <button className='text-black cursor-pointer w-full'>x12</button>
                        </div>
                    </div>
                    
                )
            }
        </div>
    </div>
  )
}

export default ProductoCard