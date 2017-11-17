var Corrida = require('../models/corrida.model')
var Motorista = require('../models/motorista.model')
var Passageiro = require('../models/passageiro.model')

_this = this

exports.getCorridas = async function (query, page, limit) {

    var options = {
        page,
        limit
    }

    try {
        let todasCorrida = await Corrida.paginate(query, options)

        return todasCorrida;

    } catch (e) {

        throw Error(' Ocorreu um erro enquanto pagina todos Corridas')

    }


}



exports.createCorrida = async function (corrida) {

    /*
    let queryNomeMotorista = { nome: corrida.motorista.nome }
    let motorista = await Motorista.findOne(queryNomeMotorista.nome)

    let queryNomePassageiro = { nome: corrida.passageiro}
    let passageiro = await Passageiro.findOne(queryNomePassageiro)

    //console.log("Buscou Motorista",motorista)

    
    var novaCorrida = new Corrida({
        motorista: motorista,
        passageiro: passageiro,
        valorCorrida: corrida.valorCorrida

    })
*/
var novaCorrida = new Corrida({
    motorista: corrida.motorista,
    passageiro: corrida.passageiro,
    valorCorrida: corrida.valorCorrida

})
    try {
        console.log("NovaCorrida: ",novaCorrida)
        var salvaCorrida = await novaCorrida.save()

        return salvaCorrida;

    } catch (e) {

        throw Error("Erro ao Criar Corrida")
    }
}

exports.atualizarCorrida = async function (corrida) {

    var id = corrida.id

    var corridaAntigo = null
    try {
        corridaAntigo = await Corrida.findById(id)
    } catch (e) {
        throw Error("Erro, não encontrou Corrida")
    }

    if (!corridaAntigo) {
        return false;
    }

    console.log("Corrida Antes da Atualização: ", corridaAntigo)

    /*
    corridaAntigo.motorista = corrida.motorista
    corridaAntigo.passageiro = corrida.passageiro
    corridaAntigo.valorCorrida = corrida.valorCorrida*/

    console.log(corridaAntigo)

    try {
        var salvaCorrida = await corridaAntigo.save()
        return salvaCorrida;
    } catch (e) {
        throw Error("Erro ao atualizar Corrida")
    }
}

exports.deletarCorrida = async function (id) {

    try {
        var deletado = await Corrida.remove({ _id: id })
        if (deletado.result.n === 0) {
            throw Error("Nada foi deletado")
        }
        return deletado
    } catch (e) {
        throw Error("Ocorreu um erro ao deletar Corrida")
    }
}