const express = require('express')

const router = express.Router()

const MotoristaController = require('../../controllers/motorista.controller')

router.get('/', MotoristaController.getMotoristas)

router.post('/', MotoristaController.createMotorista)

router.put('/', MotoristaController.atualizarMotorista)

router.delete('/:id', MotoristaController.deletarMotorista)

module.exports = router;