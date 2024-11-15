const knex = require('../data/conection')

class EntradaRepo{

    async nova_doacao(doacao){
        try {
            await knex.raw('call inserir_entrada(?, ?)',[doacao.iddoador,doacao.valor])
            return {status: true}
        } catch(err){
            return {status: false, err: err}
        }
    }

    async alterar_entrada(doacao){
        try{
            await knex.raw('call alterar_entrada(?, ?, ?)',[doacao.identrada, doacao.iddoador, doacao.valor])
            return {status: true}
        } catch (err){
            return {status: false, err:err}
        }
    }

    async entrada_detalhada(){
        try{
            let lista = await knex.select('*').from ("view_entrada_detalhada")
            return {status: true, values: lista}
        } catch(err){
            return {status: false, err: err}
        }
    }

    async deletar_entrada(entrada){
        try{
            await knex.raw('call deletar_entrada(?)', [entrada.identrada])
            return {status: true}
        } catch(err){
            return {status: false, err:err}
        }
    }
}

module.exports = new EntradaRepo