
import { useProductoStore } from "@/store/useProductoStore"
import axios from "axios";

export const useProductos = () => {

    const { productos, cargarProductos } = useProductoStore();

    const startObtenerProductos = async() => {
        try {
            const { data } = await axios.get(`/api/productos`);
            if(data.ok){
                cargarProductos(data.productos);
                return data.ok;
            }
        } catch (error) {
            console.log(error);
            
        }
    }

    return {
        //Atributos
        productos,


        //Metodos
        startObtenerProductos
    }
}