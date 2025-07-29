import { create } from "zustand";

export interface Seccion {
    _id: string;
    codigo: number;
    nombre: string;
};

interface SeccionState {
    secciones: Seccion[];
    cargarSecciones: (nuevos: Seccion[]) => void;
    limpiarSecciones: () => void;
};


export const useSeccionStore = create<SeccionState>((set) => ({
    secciones: [],
    cargarSecciones: (nuevos) => set({ secciones: nuevos}),
    limpiarSecciones: () => set({ secciones: [] })
}));