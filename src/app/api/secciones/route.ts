import { dbConnect } from "@/lib/dbConnect";
import { Seccion } from "@/models/Seccion";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await dbConnect();
        const secciones = await Seccion.find().lean();
        return NextResponse.json({
            ok: true,
            secciones
        })
    } catch (error) {
        return NextResponse.json(
            {error: 'Error al obtener Secciones ' + error},
            { status: 500}
        ) 
    }
}