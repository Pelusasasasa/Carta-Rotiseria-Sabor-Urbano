import { Seccion } from '@/interface/Seccion';
import { create } from 'zustand';

export interface Producto {
    _id: string;
    descripcion: string;
    precio: number;
    cantidad: number;
    seccion: Seccion;
};

export interface Cliente {
    nombre: string;
    direccion: string;
    observaciones?: string;
    telefono: string;
    envio?: string;
    tipo_pago?: string;

};

interface CarritoState {
    abierto: boolean;
    productos: Producto[];
    cliente:Cliente;
    abrir: () => void;
    cerrar: () => void;
    agregarProducto: (producto: Producto) => void;
    quitarProducto: (id: string) => void;
    vaciarCarrito: () => void;
    setCliente: (cliente: Cliente) => void;
    total: () => number;
};

export const useCarritoStore = create<CarritoState>((set, get) => ({
    abierto: false,
    productos: [],
    cliente: {nombre: '', telefono: '', direccion: '', observaciones: ''},
    envio: false,
    tipo_pago: 'EFECTIVO',
    abrir: () => set({abierto: true}),
    cerrar: () => set({abierto: false}),

    agregarProducto: (producto) => {
        set((state) => {
            const existe = state.productos.find(prod => prod._id === producto._id);

            if (existe){
                return {
                    productos: state.productos.map((prod) => prod._id === producto._id ? {...prod, cantidad: prod.cantidad + producto.cantidad} : prod),
                };
            };
            return { productos: [...state.productos, {...producto, cantidad: 1}]}
        })
    },

    quitarProducto: (id) => {
        set((state) => {
            const existe = state.productos.find(prod => prod._id === id);
            if(existe && existe?.cantidad > 1){
                return {
                    productos: state.productos.map((prod) => prod._id === id ? {...prod, cantidad: prod.cantidad - 1}: prod)
                };
            };
            return {productos: [...state.productos.filter(prod => prod._id !== id)]}
        })
    },
    
    vaciarCarrito: () => {
        set({productos: []})
    },
    setCliente: (cliente) => set({cliente}),
    total: () => {
        const sum = get().productos.reduce(
             (acc, prod) => acc + prod.precio * prod.cantidad,
            0
        );
        
        return sum;
    },
}))