const { Schema, model } = require('mongoose')

const MediaSchema = Schema({
    serial : {
        type : String,
        unique : [true, 'Serial ya existe'],
        required: [true, 'Serial es requerido']
    },
    titulo : {
        type : String,
        required: [true, 'Nombre requerido']
    },
    sinopsis: {
        type: String
    },
    url: {
        type: String,
        unique: [true, 'La URL ya existe'],
        required: [true, 'La URL es requerida']
    },
    imagen: {
        type: String
    },
    anioEstreno: {
        type: Number
    },
    genero: {
        type: Schema.Types.ObjectId,
        ref: 'Generos',
        required: true
    },
    director: {
        type: Schema.Types.ObjectId,
        ref: 'Directores',
        required: true
    },
    productora: {
        type: Schema.Types.ObjectId,
        ref: 'Productoras',
        required: true
    },
    tipo: {
        type: Schema.Types.ObjectId,
        ref: 'Tipos',
        required: true
    },
    estado: {
        type: Boolean,
        default: true
    },
    // colocar el resto de atributos
    fechaCreacion : {
        type : Date,
        default : new Date()
    },
    fechaActualizacion : {
        type : Date
    }
    // el resto de modelos
})

module.exports = model('Media', MediaSchema)