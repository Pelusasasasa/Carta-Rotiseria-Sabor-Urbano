import { Producto } from "./Producto";

export interface Venta {
    cliente: string;
    listaProductos: Producto[];
    idCliente: string;
    precio: number;
    descuento: number;
    tipo_venta: string;
    dispositivo: string;
    direccion: string;
    telefono: string;
    pasado: boolean

}