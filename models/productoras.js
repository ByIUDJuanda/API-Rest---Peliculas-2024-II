const { Schema, model } = require('mongoose');

const ProductorasSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido'],
        unique: [true, 'El nombre ya existe']
    },
    slogan: {
        type: String
    },
    descripcion: {
        type: String
    },
    estado: {
        type: Boolean,
        default: true
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date
    }
});

module.exports = model('Productoras', ProductorasSchema);
