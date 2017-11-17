var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

var PassageiroSchema = new mongoose.Schema({
    nome: String,
    dataNascimento: String,
    CPF: String,
    sexo: String
})

PassageiroSchema.plugin(mongoosePaginate)
const passageiro = mongoose.model('Passageiro', PassageiroSchema)

module.exports = passageiro;

