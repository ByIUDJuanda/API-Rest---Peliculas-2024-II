const { request, response } = require('express');
const Tipo = require('../models/tipos');

const crearTipo = async (req = request, res = response) => {
    try {
        const { nombre, descripcion } = req.body;
        const data = { nombre, descripcion };
        const tipo = new Tipo(data);
        await tipo.save();
        return res.status(201).json(tipo);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ msj: e });
    }
};

const consultarTipos = async (req = request, res = response) => {
    try {
        const tipos = await Tipo.find();
        return res.json(tipos);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ msj: e });
    }
};

const consultarTiposPorID = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        const tipo = await Tipo.findById(id);
        return res.json(tipo);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ msj: e });
    }
};

const editarTiposPorID = async (req = request, res = response) => {
    try {
        const { nombre, descripcion } = req.body;
        const id = req.params.id;
        const data = { nombre, descripcion, fechaActualizacion: new Date() };
        const tipo = await Tipo.findByIdAndUpdate(id, data, { new: true });
        return res.status(201).json(tipo);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ msj: e });
    }
};

module.exports = {
    crearTipo,
    consultarTipos,
    consultarTiposPorID,
    editarTiposPorID
};
