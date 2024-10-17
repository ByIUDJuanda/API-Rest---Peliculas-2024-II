const { Router } = require('express')

const {
    crearGeneros, 
    consultarGeneros,
    consultarGenerosPorID,
    editarGenerosPorID } = require('../controllers/generosCtrl')

const router = Router()

// endpoint Crear un nuevo género
router.post('/', crearGeneros)

// endpoint Consultar todos los géneros
router.get('/', consultarGeneros)

// endpoint Consultar un género por ID
router.get('/:id', consultarGenerosPorID)

// endpoint Editar un género por ID
router.put('/:id', editarGenerosPorID)

module.exports = router