import { useSecciones } from '@/hooks/useSeccion'
import { Seccion } from '@/store/useSeccionStore';
import { useEffect } from 'react'


export const Rubros = () => {

    const {secciones, startObtenerSecciones, activarSeccion, seccionActive} = useSecciones();

    useEffect(() => {
        startObtenerSecciones();
    }, []);

    useEffect(() => {
        activarSeccion(secciones[0]);
    }, [secciones]);

    const handleSeccion = (seccion: Seccion) => {
        activarSeccion(seccion);
    };

  return (
    <div className='flex gap-5 w-full'>
        {
            secciones.map((seccion) => (
                <div onClick={() => handleSeccion(seccion)} key={seccion.nombre} className={`${seccionActive?.nombre === seccion.nombre ? 'bg-yellow-400 hover:bg-yellow-500' : 'bg-gray-400'} p-1 rounded-sm hover:bg-slate-500 cursor-pointer `}>
                    <p className='text-gray-700 text-xs font-bold hover:text-white'>{seccion.nombre}</p>
                </div>
            ))
        }
    </div>
    
  )
}
