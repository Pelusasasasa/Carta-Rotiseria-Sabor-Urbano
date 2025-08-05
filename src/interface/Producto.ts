import { Seccion } from "./Seccion";

export interface Producto{
    _id: string;
    imgCloudinaryPath?: string;
    descripcion: string;
    precio: number;
    seccion: Seccion;
    sinStock?: boolean;
}