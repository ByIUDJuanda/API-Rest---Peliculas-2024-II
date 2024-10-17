const { Router } = require('express');
const {
    crearDirector,
    consultarDirectores,
    consultarDirectoresPorID,
    editarDirectoresPorID
} = require('../controllers/directoresCtrl');

const router = Router();

// Crear un nuevo director
router.post('/', crearDirector);

// Consultar todos los directores
router.get('/', consultarDirectores);

// Consultar un director por ID
router.get('/:id', consultarDirectoresPorID);

// Editar un director por ID
router.put('/:id', editarDirectoresPorID);

module.exports = router;
