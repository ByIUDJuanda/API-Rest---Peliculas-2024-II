const { Router } = require('express');
const {
    crearProductora,
    consultarProductoras,
    consultarProductorasPorID,
    editarProductorasPorID
} = require('../controllers/productorasCtrl');

const router = Router();

// Crear una nueva productora
router.post('/', crearProductora);

// Consultar todas las productoras
router.get('/', consultarProductoras);

// Consultar una productora por ID
router.get('/:id', consultarProductorasPorID);

// Editar una productora por ID
router.put('/:id', editarProductorasPorID);

module.exports = router;
