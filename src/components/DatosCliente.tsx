'use client'
import React, { useEffect, useState } from 'react'
import { BsPerson } from 'react-icons/bs'
import { Input } from './Input'
import { useForm } from '@/hooks/Useform';
import { CiLocationOn, CiPhone } from 'react-icons/ci';

const initialForm = {
    nombre: '',
    direccion: '',
    telefono: '',
}

export const DatosCliente = () => {

    const {nombre, direccion, telefono, onInputChange, formState} = useForm(initialForm);

    const [validForm, setValidForm] = useState<boolean>(false);

    useEffect(() => {
        if(!nombre || nombre === '') return setValidForm(false);
        if(!direccion || direccion === '') return setValidForm(false);
        if(!telefono || telefono === '') return setValidForm(false);

        setValidForm(true);
    }, [formState]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState)
    }

  return (
    <div className='flex flex-col items-start mt-5'>
        <h3 className='text-yellow-400'>Datos de entregar (Obligatorio)</h3>

        <form className='w-full mt-5' onSubmit={handleSubmit}>
            <div className='mt-5'>
                <div className='flex gap-5 items-center'>
                    <BsPerson/>
                    <label htmlFor="">Nombre *</label>
                </div>

                <Input type='text' placeholder='Ingrese su nombre' name='nombre' value={nombre} onChange={onInputChange}/>
            </div>

            <div className='mt-5'>
                <div className='flex gap-5 items-center'>
                    <CiLocationOn />
                    <label htmlFor="direccion">Direccion *</label>
                </div>

                <Input type='text' placeholder='Ingrese su direccion' name='direccion' value={direccion} onChange={onInputChange}/>
            </div>

            <div className='mt-5'>
                <div className='flex gap-5 items-center'>
                    <CiPhone />
                    <label htmlFor="telefono">Telefono *</label>
                </div>

                <Input type='text' placeholder='Ingrese su direccion' name='telefono' value={telefono} onChange={onInputChange}/>
            </div>
            
            <div className='mt-5'>
                <button className={`py-2 px-2 border border-gray-500 rounded-sm font-bold cursor-pointer w-full ${validForm ? 'bg-yellow-400 text-black hover:bg-yellow-500' : 'bg-gray-500 text-gray-400'}`}>{validForm ? 'Confirmar Pedido' : 'Complete todos los datos para continuar'}</button>
            </div>
        </form>

    </div>
  )
}
