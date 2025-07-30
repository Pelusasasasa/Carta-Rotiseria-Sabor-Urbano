import { Venta } from "@/interface/Venta";
import rotiseria from "../../rotiseria.config";

export const enviarMensajeWhatsApp = (venta: Venta) => {
    const mensaje = encodeURIComponent(`Hola, Realice un pedido desde al carta online, ¿Podrian Confirmarlo?`);
    const url = `https://wa.me/${rotiseria.whatsapp}?text=${mensaje}`;
    console.log(venta)
    window.open(url, '_blank');
};