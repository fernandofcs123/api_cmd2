const knex = require('../data/conection')

class DoadoresRepo {
    async inserir_doador(doador){
        try {
            await knex.raw('call inserir_doador(?, ?)',[doador.nome,doador.telefone]) 
            return {status: true}
        } catch(err) {
            return{ status: false, err: err.message}
        }
    } 

    async buscarPorID(iddoadores){
        try {
            let dadosDoador = await knex('doadores').select('*').where({iddoadores}).first();
            if (!dadosDoador){
                return {status: false, err: "Doador não encontrado"};
            } else {
                return {status: true, values: dadosDoador}
            }
            
        } catch(err){
            return {status:false, err: err}
        }
    }

    async listar_doadores(){
        try {
            let doadores = await knex.select(["iddoadores","nome","telefone"]).table("doadores")
            return {status: true, values: doadores}
        } catch (err){
            return {status:false, err: err}
        }
    }

    async alterar_doador(doador){
        try{
            await knex.raw('call alterar_doador(?, ?, ?)',[doador.iddoador,doador.nome, doador.telefone])
            return {status: true}
        } catch (err){
            return {status: false, err: err}
        }
    }

    async deletar_doador(doador){
        try{
            await knex.raw('call deletar_doador(?)', [doador.iddoador])
            return {status: true}
        } catch(err){
            return {status: false, err:err}
        }
    }


}


module.exports = new DoadoresRepo;



