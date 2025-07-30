import { Venta } from "@/interface/Venta";
import { Cliente, useCarritoStore } from "@/store/useCarritoStore"
import axios from "axios";

export const useVenta = () => {
    const { cliente, productos, total, setCliente, cerrar, vaciarCarrito, envio, tipo_pago, setEnvio, setTipoPago } = useCarritoStore();

    const startActivarCliente = (cliente: Cliente) => {
        setCliente(cliente)
    };

    const startCrearVenta = async() => {
        
        try {
            const venta: Venta  = {
                cliente: cliente.nombre,
                idCliente: '1',
                listaProductos: productos,
                observaciones: cliente.observaciones || '',
                precio: total(),
                descuento: 0,
                tipo_venta: 'Comprobante',
                dispositivo: 'WEB',
                direccion: cliente.direccion,
                telefono: cliente.telefono,
                pasado: false,
                envio,
                tipo_pago
            };
            console.log(venta.observaciones);
            const { data } = await axios.post('/api/ventas', venta);

            if(data.ok){
                setCliente({} as Cliente);
                vaciarCarrito();
                return data.ok;
            }
        } catch (error) {
            console.log(error);
        }

    };



    return {
        //Atributos
        cliente,
        cerrar,
        productos,
        total,

        //Metodos
        startActivarCliente,
        startCrearVenta,
        
    }
}