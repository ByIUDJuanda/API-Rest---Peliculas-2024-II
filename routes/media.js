const { Router } = require('express');
const {
    crearMedia,
    consultarMedia,
    consultarMediaPorID,
    editarMediaPorID
} = require('../controllers/mediaCtrl');

const router = Router();

// Crear una nueva media
router.post('/', crearMedia);

// Consultar todas las medias
router.get('/', consultarMedia);

// Consultar una media por ID
router.get('/:id', consultarMediaPorID);

// Editar una media por ID
router.put('/:id', editarMediaPorID);

module.exports = router;
