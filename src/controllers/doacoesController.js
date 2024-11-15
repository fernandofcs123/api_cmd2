const DiversosModel = require('../models/diversosModel')
const EntradaModel = require('../models/entradaModel')
const diversosRepo = require('../repositories/diversosRepo')
const EntradaRepo = require('../repositories/entradaRepo')

class DoacoesController{
    //OK
    async nova_doacao(req,res){
        let {iddoador, valor} = req.body
        const doacao = new EntradaModel({iddoador, valor})
        let resultado = await EntradaRepo.nova_doacao(doacao)
        resultado.status
        ? res.status(200).json({success: true, message: "Doação inserida com sucesso!"})
        : res.status(404).json({success: false, message: resultado.err})
    }
    //OK
    async alterar_entrada(req,res){
        let {identrada, iddoador, valor} = req.body
        const doacao = new EntradaModel({identrada, iddoador, valor})
        let resultado = await EntradaRepo.alterar_entrada(doacao)
        resultado.status
        ? res.status(200).json({success: true, message: "Entrada alterada com sucesso!"})
        : res.status(404).json({success: false, message: resultado.err})
    }
    //OK
    async historico_entrada(req,res){
        let resultado = await EntradaRepo.entrada_detalhada()
        resultado.status
        ? res.status(200).json({success: true, values: resultado})
        : res.status(404).json({success: false, message: resultado.err})
    }
    //OK
    async deletar_entrada(req,res){
        let {identrada} = req.body
        const entrada = new EntradaModel({identrada})
        let resultado = await EntradaRepo.deletar_entrada(entrada)
        resultado.status
        ? res.status(200).json({success: true, message: "Entrada deletada com sucesso!"})
        : res.status(404).json({success: false, message: resultado.err})
    }


    //////////////////////////////// DIVERSOS /////////////////////////////////

    //OK
    async doacao_diversos(req,res){
        let {iddoador, descricao} = req.body
        const diversos = new DiversosModel({iddoador, descricao})
        let resultado = await diversosRepo.inserir_diversos(diversos)
        resultado.status
        ? res.status(200).json({success: true, message: "Doação diversa inserida com sucesso!"})
        : res.status(404).json({success: false, message: resultado.err})
    }
    //OK
    async historico_diversos(req,res){
        let resultado = await diversosRepo.diversos_detalhado()
        resultado.status
        ? res.status(200).json({success:true, values: resultado})
        : res.status(404).json({success: false, message: resultado.err})
    }
    //OK
    async alterar_diversos(req,res){
        let {iddiversos, iddoador, descricao} = req.body
        const diversos = new DiversosModel({iddiversos, iddoador, descricao})
        let resultado = await diversosRepo.alterar_diversos(diversos)
        resultado.status
        ? res.status(200).json({success: true, message: "Diversos alterado com sucesso!"})
        : res.tatus(404).json({success: false, message: resultado.err})
    }
    //OK
    async deletar_diversos(req,res){
        let {iddiversos} = req.body
        const diversos = new DiversosModel({iddiversos})
        let resultado = await diversosRepo.deletar_diversos(diversos)
        resultado.status
        ? res.status(200).json({success: true, message: "Diversos deletado com sucesso!"})
        : res.status(404).json({success: false, message: resultado.err})
    }
}

module.exports = new DoacoesController