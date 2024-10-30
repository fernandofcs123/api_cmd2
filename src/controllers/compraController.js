const SaidaModel = require('../models/saidaModel')
const saidaRepo = require('../repositories/saidaRepo')

class CompraController{
    //OK
    async nova_compra(req,res){
        let {descricao, valor} = req.body
        const compra = new SaidaModel({descricao, valor});
        let resultado = await saidaRepo.nova_compra(compra)
        resultado.status
        ? res.status(200).json({success: true, message: "Compra inserida com sucesso!"})
        : res.status(404).json({success: false, message: resultado.err})
    }
    //OK
    async historico_saida(req,res){
        let resultado = await saidaRepo.saida_detalhada()
        resultado.status
        ? res.status(200).json({success: true, values: resultado})
        : res.status(404).json({success: false, message: resultado.err})
    }
    //OK
    async alterar_saida(req,res){
        let {idsaida, descricao, valor} = req.body
        const saida = new SaidaModel({idsaida, descricao, valor})
        let resultado = await saidaRepo.alterar_saida(saida)
        resultado.status
        ? res.status(200).json({success: true, message: "Saida alterada com sucesso!"})
        : res.status(404).json({success: false, message: resultado.err})
    }
    //OK
    async deletar_saida(req,res){
        let {idsaida} = req.body
        const saida = new SaidaModel({idsaida})
        let resultado = await saidaRepo.deletar_saida(saida)
        resultado.status
        ? res.status(200).json({success: true, message: "Saida deletada com sucesso!"})
        : res.status(404).json({success: false, message: resultado.err})
    }

}

module.exports = new CompraController