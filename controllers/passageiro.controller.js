const PassageiroService = require('../services/passageiro.service')

_this = this

exports.getPassageiros = async (req, res, next) => {

    let page = req.query.page ? req.query.page : 1
    let limit = req.query.limit ? req.query.limit : 10
    
    try {
        let passageiros = await PassageiroService.getPassageiros({}, page, limit)

        return res.status(200).json({status: 200, data: passageiros, message: "Passageiros recebidos" })

    }catch( e ) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createPassageiro = async (req, res, next ) => {

    let passageiro = {
        nome: req.body.nome,
        dataNascimento: req.body.dataNascimento,
        CPF: req.body.CPF,
        sexo: req.body.sexo
    }

    try {
        let passageiroCriado = await PassageiroService.createPassageiro(passageiro)
        return res.status(201).json( { status: 201, data: passageiroCriado, message: "Sucesso ao criar passageiro"  })
        
    }catch(e){
        return res.status(400).json({status: 400, message: "Passageiro Não Foi Criado"})
    }
}

exports.atualizarPassageiro = async (req, res, next) => {

    if( !req.body._id ) {
        return res.status(400).json( {status: 400, message: "Id Pode estar presente"})
    }

    var id = req.body._id 

    console.log(req.body)
    console.log("Id: ", id)

    var passageiro = {
        id,
        nome: req.body.nome ? req.body.nome : null,
        dataNascimento: req.body.dataNascimento ? req.body.dataNascimento : null,
        CPF: req.body.CPF ? req.body.CPF : null,
        sexo: req.body.sexo ? req.body.sexo : null
    }

    try {
        var passageiroAtulizado = await PassageiroService.atualizarPassageiro(passageiro)
        return res.status(200).json({status: 200, data: passageiroAtulizado, message: "Sucesso ao atualizar passsageiro"})   
        
    }catch(e) {
        return res.status(400).json({status: 400., message: e.message })
    }
}

exports.deletarPassageiro = async (req, res, next) => {
    var id = req.params.id


    try {

        var deletado = await PassageiroService.deletarPassageiro(id)

        return res.status(204).json({status:204, message: "Deletado com sucesso"})
    
    }catch(e) {

        return res.status(400).json({status: 400, message: e.message})
    }

}