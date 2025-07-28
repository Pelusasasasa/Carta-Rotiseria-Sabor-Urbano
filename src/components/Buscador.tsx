'use client'

import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { Input } from './Input';

const Buscador = () => {
    const [value, setValue] = useState<string>('');

return (
    
    <Input type='text' Icon={CiSearch} placeholder='Buscar Producto' value={value} onChange={(e) => setValue(e.target.value)}/>
)
}

export default Buscador