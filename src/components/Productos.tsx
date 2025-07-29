import React, { useEffect, useState } from 'react'
import ProductoCard from './ProductoCard'
import { useProductos } from '@/hooks/useProducto'
import { Producto } from '@/store/useProductoStore'

interface Props {
  value: string
}

export const Productos = ({ value }: Props) => {

  const { startObtenerProductos, productos } = useProductos();
  const [productosFiltrados, setProductosFiltras] = useState<Producto[]>(productos);

  useEffect(() => {
    startObtenerProductos()
  }, []);

  useEffect(() => {
    if(value !== ''){
      setProductosFiltras(productos.filter(producto => producto.descripcion.toLowerCase().startsWith(value.toLowerCase())));
    }else{
      setProductosFiltras(productos);
    }
  }, [value || productos]);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-15 my-5 bg-slate-800 h-[60vh] px-5 overflow-y-scroll py-4'>
      {productosFiltrados.map(elem => (
        <ProductoCard key={elem._id} {...elem}/>
      ))}
    </div>
  )
}
