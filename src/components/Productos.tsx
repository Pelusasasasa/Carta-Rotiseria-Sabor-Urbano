import React, { useEffect, useState } from 'react'
import ProductoCard from './ProductoCard'
import { useProductos } from '@/hooks/useProducto'
import { Producto } from '@/store/useProductoStore'
import { useSecciones } from '@/hooks/useSeccion'

interface Props {
  value: string
}

export const Productos = ({ value }: Props) => {

  const { startObtenerProductos, productos } = useProductos();
  const { seccionActive } = useSecciones();
  const [productosFiltrados, setProductosFiltrados] = useState<Producto[]>(productos);

  useEffect(() => {
    startObtenerProductos()
  }, []);

  useEffect(() => {

    if(value !== ''){
      setProductosFiltrados(productos.filter(producto => producto.descripcion.toLowerCase().startsWith(value.toLowerCase())));
    }else{
        if(seccionActive?.nombre !== 'TODOS'){
          setProductosFiltrados(productos.filter(producto => producto.seccion._id === seccionActive?._id))
        }else{
          setProductosFiltrados(productos);
        }
    }
  }, [value || productos]);

  useEffect(() => {
    if(seccionActive?.nombre !== 'TODOS'){
      setProductosFiltrados(productos.filter(producto => producto.seccion._id === seccionActive?._id))
    }else{
      setProductosFiltrados(productos);
    }
  }, [seccionActive])

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-15 my-5 bg-slate-800 h-[60vh] px-5 overflow-y-scroll py-4'>
      {productosFiltrados.map(elem => (
        <ProductoCard key={elem._id} {...elem}/>
      ))}
    </div>
  )
}
