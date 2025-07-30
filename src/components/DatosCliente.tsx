'use client'
import React, { useEffect, useState } from 'react'
import { BsPerson } from 'react-icons/bs'
import { Input } from './Input'
import { useForm } from '@/hooks/Useform';
import { CiLocationOn, CiPhone } from 'react-icons/ci';
import { useVenta } from '@/hooks/useVenta';
import Swal from 'sweetalert2';
import { FiMessageSquare } from 'react-icons/fi';

const initialForm = {
    nombre: '',
    direccion: '',
    telefono: '',
}

export const DatosCliente = () => {

    const {nombre, direccion, telefono, observaciones, onInputChange, formState} = useForm(initialForm);
    const { startActivarCliente, startCrearVenta, cerrar  } = useVenta();
    const [validForm, setValidForm] = useState<boolean>(false);

    useEffect(() => {
        if(!nombre || nombre === '') return setValidForm(false);
        if(!direccion || direccion === '') return setValidForm(false);
        if(!telefono || telefono === '') return setValidForm(false);

        setValidForm(true);
        startActivarCliente(formState)
    }, [formState]);

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        const ok = await startCrearVenta();

        if(ok){
            const { isConfirmed } = await Swal.fire({
                title: 'Pedido Cargado con exito',
                text: 'Enviar Confirmacion por WhatsApp Por Favor',
                icon: 'success',
                confirmButtonText: 'Enviar'
            });

            if(isConfirmed){
                cerrar()
            }
        }else{

        }
    }

  return (
    <div className='flex flex-col items-starts space-y-4'>
        <h3 className='text-yellow-400 text-xl'>Datos de entregar (Obligatorio)</h3>
        <hr className='text-gray-700'/>
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

            <div className='mt-2'>
                <div className='flex gap-5 items-center'>
                    <FiMessageSquare />
                    <label htmlFor="observaciones">Observaciones (Opcional)</label>
                </div>

                <textarea name="observaciones" id="observaciones" value={observaciones} onChange={onInputChange} className='my-2 flex bg-gray-600 w-full gap-2 border-gray-400 border rounded-sm items-center px-2'></textarea>
            </div>
            
            <div className='mt-5'>
                <button className={`py-2 px-2 border border-gray-500 rounded-sm font-bold cursor-pointer w-full ${validForm ? 'bg-yellow-400 text-black hover:bg-yellow-500' : 'bg-gray-700 text-gray-500'}`}>{validForm ? 'Confirmar Pedido' : 'Complete todos los datos para continuar'}</button>
            </div>
        </form>

    </div>
  )
}
