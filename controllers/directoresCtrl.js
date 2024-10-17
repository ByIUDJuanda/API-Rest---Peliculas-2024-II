const { request, response } = require('express');
const Director = require('../models/directores');

const crearDirector = async (req = request, res = response) => {
    try {
        const { nombre } = req.body;
        const data = { nombre };
        const director = new Director(data);
        await director.save();
        return res.status(201).json(director);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ msj: e });
    }
};

const consultarDirectores = async (req = request, res = response) => {
    try {
        const director = await Director.find();
        return res.json(director);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ msj: e });
    }
};

const consultarDirectoresPorID = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        const director = await Director.findById(id);
        return res.json(director);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ msj: e });
    }
};

const editarDirectoresPorID = async (req = request, res = response) => {
    try {
        const { nombre } = req.body;
        const id = req.params.id;
        const data = { nombre, fechaActualizacion: new Date() };
        const director = await Director.findByIdAndUpdate(id, data, { new: true });
        return res.status(201).json(director);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ msj: e });
    }
};

module.exports = {
    crearDirector,
    consultarDirectores,
    consultarDirectoresPorID,
    editarDirectoresPorID
};
