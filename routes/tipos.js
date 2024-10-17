const { Router } = require('express');
const {
    crearTipo,
    consultarTipos,
    consultarTiposPorID,
    editarTiposPorID
} = require('../controllers/tiposCtrl');

const router = Router();

// Crear un nuevo tipo
router.post('/', crearTipo);

// Consultar todos los tipos
router.get('/', consultarTipos);

// Consultar un tipo por ID
router.get('/:id', consultarTiposPorID);

// Editar un tipo por ID
router.put('/:id', editarTiposPorID);

module.exports = router;
