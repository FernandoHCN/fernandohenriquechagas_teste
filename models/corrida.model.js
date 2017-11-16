var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')
var Motorista = require('../models/motorista.model');

var CorridaSchema = new mongoose.Schema({
    motorista: Object,
    passageiro: Object,
    valorCorrida: Number
})

CorridaSchema.plugin(mongoosePaginate)
const corrida = mongoose.model('Corrida', CorridaSchema)

module.exports = corrida;