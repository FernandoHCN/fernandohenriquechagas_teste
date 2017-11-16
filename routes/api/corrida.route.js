const express = require('express')

const router = express.Router()

const CorridaController = require('../../controllers/corrida.controller')

router.get('/', CorridaController.getCorridas)

router.post('/', CorridaController.createCorrida)

router.put('/', CorridaController.atualizarCorrida)

router.delete('/:id', CorridaController.deletarCorrida)

module.exports = router;