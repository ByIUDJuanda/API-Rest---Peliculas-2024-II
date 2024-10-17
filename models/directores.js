const { Schema, model } = require('mongoose');

const DirectoresSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido'],
        unique: [true, 'El nombre ya existe']
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

module.exports = model('Directores', DirectoresSchema);
