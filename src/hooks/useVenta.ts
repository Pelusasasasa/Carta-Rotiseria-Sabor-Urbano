import { Venta } from "@/interface/Venta";
import { Cliente, useCarritoStore } from "@/store/useCarritoStore"
import axios from "axios";

export const useVenta = () => {
    const { cliente, productos, total, setCliente } = useCarritoStore();

    const startActivarCliente = (cliente: Cliente) => {
        setCliente(cliente)
    };

    const startCrearVenta = async() => {
        
        try {
            const venta: Venta  = {
                cliente: cliente.nombre,
                idCliente: '1',
                listaProductos: productos,
                precio: total(),
                descuento: 0,
                tipo_venta: 'Comprobante',
                dispositivo: 'WEB',
                direccion: cliente.direccion,
                telefono: cliente.telefono,
                pasado: false,
            };

            const { data } = await axios.post('/api/ventas', venta);

            if(data.ok){
                console.log(data)
            }
        } catch (error) {
            console.log(error);
        }

    };



    return {
        //Atributos
        cliente,
        productos,
        total,

        //Metodos
        startActivarCliente,
        startCrearVenta,
        
    }
}