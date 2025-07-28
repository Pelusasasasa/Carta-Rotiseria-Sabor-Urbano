'use client'

import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

const Buscador = () => {
    const [value, setValue] = useState<string>('');

return (
    <div className="my-5 flex bg-gray-600 gap-2 py-1  border-gray-400 border rounded-sm items-center px-2">
        <CiSearch size={20}/>
        <input type="text" className="w-full py-2" placeholder="Buscar Producto" value={value} onChange={(e) => setValue(e.target.value)}/>
    </div>
)
}

export default Buscador