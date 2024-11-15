const doadoresRepo = require('../repositories/doadoresRepo')
const DoadoresModel = require('../models/doadoresModel')
const historicoRepo = require('../repositories/historicoRepo')

class PrincipalController{

    //////////////////////////////// DOADORES ////////////////////////////////

    async novo_doador(req,res){
        let {nome, telefone} = req.body
        const novo_doador = new DoadoresModel({nome,telefone})
        
        let resultado = await doadoresRepo.inserir_doador(novo_doador)
        resultado.status
        ? res.status(200).json({success: true, message:"Doador cadastrado com sucesso!"})
        : res.status(400).json({success:false, message: resultado.err})
    }

    async buscar_por_id(req,res){
        let {iddoadores } = req.body
        if (!iddoadores){
            return res.status(400).json({success: false, message: "ID do doador não fornecido"})
        }
        let doador = await doadoresRepo.buscarPorID(iddoadores)
        doador.status
        ? res.status(200).json({success: true, values: doador.values})
        : res.status(404).json({success: false, message: doador.err})
    }

    async listar_doadores(req,res){
        let doadores = await doadoresRepo.listar_doadores()
        doadores.status
        ? res.status(200).json({success: true, values: doadores.values})
        : res.status(404).json({success: false, message: doadores.err})
    }

    async alterar_doador(req,res){
        let {iddoador, nome, telefone} = req.body
        const doador = new DoadoresModel({iddoador, nome, telefone})
        let resultado = await doadoresRepo.alterar_doador(doador)
        resultado.status
        ? res.status(200).json({success: true, message: "Doador alterado com sucesso!"})
        : res.status(404).json({success: false, message: resultado.err})
    }
    
    async deletar_doador(req,res){
        let {iddoador} = req.body
        const doador = new DoadoresModel({iddoador})
        let resultado = await doadoresRepo.deletar_doador(doador)
        resultado.status
        ? res.status(200).json({success: true, message: "Doador deletado com sucesso!"})
        : res.status(404).json({success: false, message: resultado.err})
    }

    
    ///////////////////////////// HISTORICO DE ENTRADA/SAIDA /////////////////////////////


    //OK
    async resumo_caixa(req,res){
        let resultado = await historicoRepo.saldo_caixa()
        resultado.status
        ? res.status(200).json({success: true, values: resultado})
        : res.status(404).json({success: false, message: resultado.err})
    }
    //OK
    async historico_detalhado(req,res){
        let resultado = await historicoRepo.historico_detalhado()
        resultado.status
        ? res.status(200).json({success: true, values: resultado})
        : res.status(404).json({success: false, message: resultado.err})
    }

    
}


module.exports = new PrincipalController;