import { Producto } from "@/store/useCarritoStore"

export const totalProductos = (productos: Producto[]) => {
    return productos.reduce((acc, prod) => acc + prod.cantidad, 0);
}