import React from 'react'
import {  IconType } from 'react-icons';

interface Props {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    Icon?: IconType;
    name?: string;
}

export const Input = ({type, placeholder, value, onChange, Icon, name}: Props) => {
  return (
    <div className="my-2 flex bg-gray-600 gap-2 py-1  border-gray-400 border rounded-sm items-center px-2">
        {Icon && <Icon size={20}/>}
        <input name={name} type={type} className="w-full py-2" placeholder={placeholder} value={value} onChange={onChange}/>
    </div>
  )
}
