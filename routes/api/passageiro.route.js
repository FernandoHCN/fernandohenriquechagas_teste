const express = require('express')

const router = express.Router()

const PassageiroController = require('../../controllers/passageiro.controller')

router.get('/', PassageiroController.getPassageiros)

router.post('/', PassageiroController.createPassageiro)

router.put('/', PassageiroController.atualizarPassageiro)

router.delete('/:id', PassageiroController.deletarPassageiro)

module.exports = router;