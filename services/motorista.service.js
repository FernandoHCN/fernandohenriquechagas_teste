var Motorista = require('../models/motorista.model')

_this = this

exports.getMotoristas = async function (query, page, limit) {

    var options = {
        page,
        limit
    }

    try {
        let todosMotorista = await Motorista.paginate(query, options)

        return todosMotorista;

    } catch (e) {

        throw Error(' Ocorreu um erro enquanto pagina todos motoristas')

    }


}

exports.createMotorista = async function (motorista) {

    var novoMotorista = new Motorista({
        nome: motorista.nome,
        dataNascimento: motorista.dataNascimento,
        CPF: motorista.CPF,
        carroModelo: motorista.carroModelo,
        status: motorista.status,
        sexo: motorista.sexo
    })

    try {

        var salvaMotorista = await novoMotorista.save()

        return salvaMotorista;

    } catch (e) {

        throw Error("Erro ao Criar Motorista")
    }
}

exports.atualizarMotorista = async function (motorista) {

    var id = motorista.id

    var motoristaAntigo = null
    try {
        motoristaAntigo = await Motorista.findById(id)
    } catch (e) {
        throw Error("Erro, não encontrou motorista")
    }

    if (!motoristaAntigo) {
        return false;
    }

    console.log("Motorista Antes da Atualização: ", motoristaAntigo)

    motoristaAntigo.nome = motorista.nome
    motoristaAntigo.dataNascimento = motorista.dataNascimento
    motoristaAntigo.CPF = motorista.CPF
    motoristaAntigo.carroModelo = motorista.carroModelo
    motoristaAntigo.status = motorista.status
    motoristaAntigo.sexo = motorista.sexo

    console.log(motoristaAntigo)

    try {
        var salvaMotorista = await motoristaAntigo.save()
        return salvaMotorista;
    } catch (e) {
        throw Error("Erro ao atualizar Motorista")
    }
}

exports.deletarMotorista = async function (id) {

    try {
        var deletado = await Motorista.remove({ _id: id })
        if (deletado.result.n === 0) {
            throw Error("Nada foi deletado")
        }
        return deletado
    } catch (e) {
        throw Error("Ocorreu um erro ao deletar motorista")
    }
}