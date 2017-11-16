var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

var MotoristaSchema = new mongoose.Schema({
    nome: String, 
    dataNascimento: String, 
    CPF: Number,
    carroModelo: String,
    status: String,
    sexo: String
})

MotoristaSchema.plugin(mongoosePaginate)
const motorista = mongoose.model('Motorista', MotoristaSchema )

module.exports = motorista;