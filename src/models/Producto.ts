import { model, models, Schema, Types } from "mongoose";

const ProductoSchema = new Schema({
    descripcion: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    img: {
        type: String,
    },
    seccion: {
        type: Types.ObjectId,
        ref: 'Seccion'
    }
});

export const Producto = models.Producto || model('Producto', ProductoSchema);