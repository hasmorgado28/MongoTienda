import { Schema, model } from "mongoose";

const proveedorSchema = new Schema(
    {
        nombreEmpresa: {
            type: String,
            required: true
        },

        nombreContacto: {
            type: String,
            required: true
        },

        telefono: {
            type: String,
            required: true
        },

        correo: {
            type: String,
            required: true
        },

        direccion: {
            type: String,
            required: true
        },

        tipoProducto: {
            type: String,
            required: true
        },

        rfc: {
            type: String,
            required: true
        },

        opcion: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default model("Proveedores", proveedorSchema);