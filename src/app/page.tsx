import Buscador from "@/components/Buscador";
import rotiseria from "../../rotiseria.config";
import { Header } from "@/components/Header";
import { Rubros } from "@/components/Rubros";
import { Productos } from "@/components/Productos";


export default function Home() {
  return (
    <main className="min-h-screen min-w-screen" style={{backgroundColor: rotiseria.colorPrimario}}>
      <div className="pt-10 h-full w-full">
        <div className="mx-10">
          <Header/>

          <Buscador />

          <Rubros/>
        </div>

        <Productos/>
      </div>
    </main>
  )
}
