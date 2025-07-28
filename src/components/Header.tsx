import Image from 'next/image'
import React from 'react'
import rotiseria from '../../rotiseria.config'

export const Header = () => {
return (
    <header className="mx-5">
        <div className="flex gap-5 items-center">
            <Image src="/images/icon.png" alt={rotiseria.nombre} width={50} height={50}/>
            <h1 className="text-3xl font-bold">{rotiseria.nombre}</h1>
        </div>
        <p className="text-white mt-2">{rotiseria.direccion}</p>
    </header>
)
}
