import { Producto } from "./Producto";

export interface Venta {
    cliente: string;
    listaProductos: Producto[];
    observaciones: string;
    idCliente: string;
    precio: number;
    descuento: number;
    tipo_venta: string;
    dispositivo: string;
    direccion: string;
    telefono: string;
    pasado: boolean;
    tipo_pago: string;
    envio: boolean;

}