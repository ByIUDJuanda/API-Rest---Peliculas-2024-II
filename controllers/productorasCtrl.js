const { request, response } = require('express');
const Productora = require('../models/productoras');

const crearProductora = async (req = request, res = response) => {
    try {
        const { nombre, slogan, descripcion } = req.body;
        const data = { nombre, slogan, descripcion };
        const productora = new Productora(data);
        await productora.save();
        return res.status(201).json(productora);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ msj: e });
    }
};

const consultarProductoras = async (req = request, res = response) => {
    try {
        const productoras = await Productora.find();
        return res.json(productoras);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ msj: e });
    }
};

const consultarProductorasPorID = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        const productora = await Productora.findById(id);
        return res.json(productora);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ msj: e });
    }
};

const editarProductorasPorID = async (req = request, res = response) => {
    try {
        const { nombre, slogan, descripcion } = req.body;
        const id = req.params.id;
        const data = { nombre, slogan, descripcion, fechaActualizacion: new Date() };
        const productora = await Productora.findByIdAndUpdate(id, data, { new: true });
        return res.status(201).json(productora);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ msj: e });
    }
};

module.exports = {
    crearProductora,
    consultarProductoras,
    consultarProductorasPorID,
    editarProductorasPorID
};
