var MotoristaService = require('../services/motorista.service');

_this = this;

exports.getMotoristas =  async function (req, res, next ) {

    var page = req.query.page ? req.query.page : 1;
    var limit = req.query.limit ? req.query.limit : 10;

    try {
        var motoristas = await MotoristaService.getMotoristas({}, page, limit)

        return res.status(200).json({status: 200, data: motoristas, message: "Motoristas Recebidos"});
    }catch(e){
        
        return res.status(400).json({status: 400, message: e.message});
        
    }
    
}

exports.createMotorista = async function( req, res, next ) {

    var motorista = {
        nome: req.body.nome, 
        dataNascimento: req.body.dataNascimento, 
        CPF: req.body.CPF,
        carroModelo: req.body.carroModelo,
        status: req.body.status,
        sexo: req.body.sexo
    }

    try{

        var motoristaCriado = await MotoristaService.createMotorista(motorista)
        return res.status(201).json( { status: 201, data: motoristaCriado, message: "Sucesso ao criar motorista"  })

    }catch(e){
        return res.status(400).json({status: 400, message: "Motorista Não Foi Criado"})
    }
}

exports.atualizarMotorista = async function(req, res, next ) {
    
    if( !req.body._id ) {
        return res.status(400).json( {status: 400, message: "Id Pode estar presente"})
    }

    var id = req.body._id;
    
    console.log(req.body)
    console.log("Id: ", id)

    var motorista = {
        id,
        nome: req.body.nome ? req.body.nome : null , 
        dataNascimento: req.body.dataNascimento ? req.body.dataNascimento : null, 
        CPF: req.body.CPF ? req.body.CPF : null,
        carroModelo: req.body.carroModelo ? req.body.carroModelo : null,
        status: req.body.status ? req.body.status : null,
        sexo: req.body.sexo ? req.body.sexo : null
    }
    //console.log("Objeto Moto: ", motorista)

    try{
        
     var motoristaAtualizado = await MotoristaService.atualizarMotorista(motorista)
     return res.status(200).json({status: 200, data: motoristaAtualizado, message: "Sucesso ao atualizar motorista"})   

    }catch(e) {
        return res.status(400).json({status: 400., message: e.message })
    }

}

exports.deletarMotorista = async function(req, res, next) {
    var id = req.params.id


    try {

        var deletado = await MotoristaService.deletarMotorista(id)

        return res.status(204).json({status:204, message: "Deletado com sucesso"})
    
    }catch(e) {

        return res.status(400).json({status: 400, message: e.message})
    }

}



