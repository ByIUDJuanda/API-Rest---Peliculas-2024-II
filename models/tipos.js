const { Schema, model } = require('mongoose');

const TiposSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido'],
        unique: [true, 'El nombre ya existe']
    },
    descripcion: {
        type: String
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date
    }
});

module.exports = model('Tipos', TiposSchema);
