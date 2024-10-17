const { request, response } = require('express')
const Generos = require('../models/generos')

const crearGeneros = async (req = request, res = response) => {
    
    try {
        const { nombre, descripcion} = req.body
        let data = {
            nombre,
            descripcion
        }
        // se puede personalizar el error si el nombre ya existe
        const genero = new Generos(data)
        
        await genero.save()
    
        return res.status(201).json(genero)
    } catch(e) {
        console.log(e)
        return res.status(500).json({
            msj: e
        })
    }
}

const consultarGeneros = async (req = request, res = response) => {
    
    try {

        const genero = await Generos.find()
    
        return res.json(genero)

    } catch(e) {
        console.log(e)
        return res.status(500).json({
            msj: e
        })
    }
}

const consultarGenerosPorID = async (req = request, res = response) => {
    try {
        
        const id = req.params.id

        const genero = await Generos.findById(id)
    
        return res.json(genero)

    } catch(e) {
        console.log(e)
        return res.status(500).json({
            msj: e
        })
    }
}

const editarGenerosPorID = async (req = request, res = response) => {
    try {
        const { nombre, descripcion} = req.body
        const id = req.params.id
        let data = {
            nombre,
            descripcion
        }
        data.fechaActualizacion = new Date()
        // se puede personalizar el error si el nombre ya existe
        const genero = await Generos.findByIdAndUpdate(id, data, {new : true})
    
        return res.status(201).json(genero)
    } catch(e) {
        console.log(e)
        return res.status(500).json({
            msj: e
        })
    }
}

module.exports = {
    crearGeneros, 
    consultarGeneros,
    consultarGenerosPorID,
    editarGenerosPorID
}
