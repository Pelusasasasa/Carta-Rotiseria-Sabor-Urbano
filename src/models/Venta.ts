import { model, models, Schema } from "mongoose";

const VentaSchema = new Schema({
    fecha: {
        type: Date,
        default: Date.now
    },
    cliente: {
        type: String,
        default: 'Consumidor Final'
    },
    idCliente: {
        type: String,
        default: '1'
    },
    telefono: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    listaProductos: {
        type: [],
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    descuento: {
        type: Number,
        required: true
    },
    tipo_venta: {
        type: String,
        default: 'CD'
    },
    tipo_comp: {
        type: String,
        default: ''
    },
    dispositivo: {
        type: String,
        default: 'WEB'
    },
    pasado: {
        type: String,
        default: false
    }
});


export const Venta = models.Venta || model('Venta', VentaSchema)
