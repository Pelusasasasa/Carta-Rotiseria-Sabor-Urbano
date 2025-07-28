'use client'
import Buscador from "@/components/Buscador";
import rotiseria from "../../rotiseria.config";
import { Header } from "@/components/Header";
import { Rubros } from "@/components/Rubros";
import { Productos } from "@/components/Productos";
import { Footer } from "@/components/Footer";
import { Carrito } from "@/components/Carrito";
import { useCarritoStore } from "@/store/useCarritoStore";


export default function Home() {
  const { abierto } = useCarritoStore();
  return (
    <main className="min-h-screen min-w-screen flex flex-col" style={{backgroundColor: rotiseria.colorPrimario}}>
      <div className="pt-5 h-full w-full">
        <div className="mx-10">
          <Header/>

          <Buscador />

          <Rubros/>
        </div>

        <Productos/>
      </div>

      <Footer/>

      {abierto && <Carrito/>}
    </main>
  )
}
