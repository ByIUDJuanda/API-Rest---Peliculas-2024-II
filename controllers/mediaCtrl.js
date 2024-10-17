const { request, response } = require('express');
const Media = require('../models/media');

const crearMedia = async (req = request, res = response) => {
    try {
        const { serial, titulo, sinopsis, url, imagen, anioEstreno, genero, director, productora, tipo } = req.body;
        const data = { serial, titulo, sinopsis, url, imagen, anioEstreno, genero, director, productora, tipo };
        const media = new Media(data);
        await media.save();
        return res.status(201).json(media);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ msj: e });
    }
};

const consultarMedia = async (req = request, res = response) => {
    try {
        const media = await Media.find();
        return res.json(media);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ msj: e });
    }
};

const consultarMediaPorID = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        const media = await Media.findById(id).populate('genero director productora tipo');
        return res.json(media);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ msj: e });
    }
};

const editarMediaPorID = async (req = request, res = response) => {
    try {
        const { serial, titulo, sinopsis, url, imagen, anioEstreno, genero, director, productora, tipo } = req.body;
        const id = req.params.id;
        const data = { serial, titulo, sinopsis, url, imagen, anioEstreno, genero, director, productora, tipo, fechaActualizacion: new Date() };
        const media = await Media.findByIdAndUpdate(id, data, { new: true });
        return res.status(201).json(media);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ msj: e });
    }
};

module.exports = {
    crearMedia,
    consultarMedia,
    consultarMediaPorID,
    editarMediaPorID
};
