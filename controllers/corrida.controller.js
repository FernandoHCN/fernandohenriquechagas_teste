var CorridaService = require('../services/Corrida.service');
var Motorista = require('../models/motorista.model');
var Passageiro = require('../models/passageiro.model');
// var Corrida = require('../models/corrida.model');

_this = this;

exports.getCorridas =  async function (req, res, next ) {

    var page = req.query.page ? req.query.page : 1;
    var limit = req.query.limit ? req.query.limit : 10;

    try {
        var Corridas = await CorridaService.getCorridas({}, page, limit)

        return res.status(200).json({status: 200, data: Corridas, message: "Corridas Recebidos"});
    }catch(e){
        
        return res.status(400).json({status: 400, message: e.message});
        
    }
    
}

exports.createCorrida = async function( req, res, next ) {

    /*
let motorista = new Motorista({
    _id: req.body.motorista._id,
    nome: req.body.motorista.nome, 
    dataNascimento: req.body.motorista.dataNascimento, 
    CPF: req.body.motorista.CPF,
    carroModelo: req.body.motorista.carroModelo,
    status: req.body.motorista.status,
    sexo: req.body.motorista.sexo
}); */
let queryNomeMotorista = { nome: req.body.motorista.nome}
let motorista = await Motorista.findOne(queryNomeMotorista)

let queryNomePassageiro = { nome: req.body.passageiro.nome}
let passageiro = await Passageiro.findOne(queryNomePassageiro)

/*let corrida = {
    motorista : req.body.motorista,
    passageiro: req.body.passageiro,
    valorCorrida: req.body.valorCorrida
}*/
    

    console.log("Valor variavel motorista", motorista)
    console.log("Valor variavel passageiro", passageiro)
    
    let corrida = {
        motorista : motorista,
        passageiro: passageiro,
        valorCorrida: req.body.valorCorrida
    }
        console.log("Valor variavel corrida", corrida)
    try{

        var corridaCriado = await CorridaService.createCorrida(corrida)
        return res.status(201).json( { status: 201, data: corridaCriado, message: "Sucesso ao criar Corrida"  })

    }catch(e){
        console.log("Erro No Corrida.Controller")
        return res.status(400).json({status: 400, message: "Corrida Não Foi Criado"})
        
    }
}

exports.atualizarCorrida = async function(req, res, next ) {
    
    if( !req.body._id ) {
        return res.status(400).json( {status: 400, message: "Id Pode estar presente"})
    }

    var id = req.body._id;
    
    console.log(req.body)
    console.log("Id: ", id)

    var corrida = {
        id,
        motorista: req.body.motorista ? req.body.motorista : null,
        passageiro: req.body.passageiro ? req.body.passageiro : null,
        valorCorrida: req.body.passageiro ? req.body.passageiro : null 
        
    }
    console.log("Objeto Moto: ", corrida)

    try{
        
     var corridaAtualizado = await CorridaService.atualizarCorrida(corrida)
     return res.status(200).json({status: 200, data: corridaAtualizado, message: "Sucesso ao atualizar Corrida"})   

    }catch(e) {
        return res.status(400).json({status: 400., message: e.message })
    }

}

exports.deletarCorrida = async function(req, res, next) {
    var id = req.params.id


    try {

        var deletado = await CorridaService.deletarCorrida(id)

        return res.status(204).json({status:204, message: "Deletado com sucesso"})
    
    }catch(e) {

        return res.status(400).json({status: 400, message: e.message})
    }

}



