import { Seccion } from "./Seccion";

export interface Producto{
    _id: string;
    img?: string;
    descripcion: string;
    precio: number;
    seccion: Seccion;
}