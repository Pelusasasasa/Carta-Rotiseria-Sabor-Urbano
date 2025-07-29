import { Seccion } from "@/interface/Seccion";
import { create } from "zustand";

export interface Producto {
    _id: string;
    descripcion: string;
    precio: string;
    img: string;
    seccion: Seccion;
};

interface ProductoState {
    productos: Producto[];
    cargarProductos: (nuevos: Producto[]) => void;
    limpiarProductos: () => void;
};


export const useProductoStore = create<ProductoState>((set) => ({
    productos: [],
    cargarProductos: (nuevos) => set({ productos: nuevos }),
    limpiarProductos: () => set({ productos: [] })
}))