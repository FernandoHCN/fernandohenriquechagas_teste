var express = require('express')

var router = express.Router()
var motoristas = require('./api/motorista.route')
var passageiros = require('./api/passageiro.route')
var corridas = require('./api/corrida.route')


router.use('/motoristas', motoristas)
router.use('/passageiros', passageiros)
router.use('/corridas', corridas)


module.exports = router