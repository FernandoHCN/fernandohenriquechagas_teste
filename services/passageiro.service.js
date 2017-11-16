const Passageiro = require('../models/passageiro.model')

_this = this

exports.getPassageiros = async (query, page, limit) => {

    var options = {
        page,
        limit
    }

    try {
        let todosPassageiros = await Passageiro.paginate(query, options)
        return todosPassageiros
    } catch (e) {

        throw Error("Ocorreu um erro enquanto pagina todos os passageiros ")

    }
}
//usando Arrow Function
exports.createPassageiro = async (passageiro) => {

    let novoPassageiro = new Passageiro({
        nome: passageiro.nome,
        dataNascimento: passageiro.dataNascimento,
        CPF: passageiro.CPF,
        sexo: passageiro.sexo
    })

    try {
        let salvarPassageiro = await novoPassageiro.save()
        return salvarPassageiro
    } catch (e) {
        throw Error("Erro ao Criar Passageiro")
    }
}

exports.atualizarPassageiro = async (passageiro) => {

    var id = passageiro.id

    var passageiroAntigo = null
    try {
        passageiroAntigo = await Passageiro.findById(id)
    } catch (e) {
        throw Error("Erro, não econtrou passageiro")
    }

    if (!passageiroAntigo) {
        return false
    }

    console.log("Passageiro Antes da Atualização: ", passageiroAntigo)

    passageiroAntigo.nome = passageiro.nome
    passageiroAntigo.dataNascimento = passageiro.dataNascimento
    passageiroAntigo.CPF = passageiro.CPF
    passageiroAntigo.sexo = passageiro.sexo

    console.log(passageiroAntigo)

    try {
        var salvaPassageiro = await passageiroAntigo.save()
        return salvaPassageiro;
    } catch (e) {
        throw Error("Erro ao atualizar Passageiro")
    }
}

exports.deletarPassageiro = async (id) => {

    try {
        let deletado = await Passageiro.remove({ _id: id })
        if (deletado.result.n === 0) {
            throw Error("Nada foi deletado")
        }
        return deletado
    } catch (e) {
        throw Error("Ocorreu um erro ao deletar passageiro")
    }
}