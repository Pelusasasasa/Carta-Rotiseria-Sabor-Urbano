'use client'
import Buscador from "@/components/Buscador";
import rotiseria from "../../rotiseria.config";
import { Header } from "@/components/Header";
import { Rubros } from "@/components/Rubros";
import { Productos } from "@/components/Productos";
import { Footer } from "@/components/Footer";
import { Carrito } from "@/components/Carrito";
import { useCarritoStore } from "@/store/useCarritoStore";
import { useState } from "react";
import { Analytics } from "@vercel/analytics/next"


export default function Home() {
  const { abierto } = useCarritoStore();
  const [value, setValue] = useState<string>('');

  return (
    <main className="min-h-screen min-w-screen flex flex-col" style={{backgroundColor: rotiseria.colorPrimario}}>
      <Analytics/>
      <div className="pt-5 h-full w-full">
        <div className="mx-10">
          <Header/>

          <Buscador value={value} setValue={setValue} />

          <Rubros/>
        </div>

        <Productos value={value}/>
      </div>

      <Footer/>

      {abierto && <Carrito/>}
    </main>
  )
}
