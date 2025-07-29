import { useSeccionStore } from "@/store/useSeccionStore";
import axios from "axios";


export const useSecciones = () => {

    const { cargarSecciones, secciones } = useSeccionStore();
    
    const startObtenerSecciones = async() => {
        try {
            const { data } = await axios.get(`/api/secciones`);
            console.log(data);

            if(data.ok){
                cargarSecciones(data.secciones)
            }
        } catch (error) {
            console.log(error);
        }
    }

    return {
        //Atributos
        secciones,
        //Metodos
        startObtenerSecciones
    }
};