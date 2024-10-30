const knex = require('../data/conection')

class SaidaRepo{
    //OK
    async nova_compra(compra){
        try {
            await knex.raw('call inserir_saida(?, ?)',[compra.descricao,compra.valor])
            return {status: true}
        } catch (err){
            return {status: false, err: err}
        }
    }
    //OK
    async saida_detalhada(){
        try{
            let lista = await knex.select('*').from("view_saida_detalhada")
            return {status: true, values: lista}
        } catch (err){
            return {status: false, err: err}
        }
    }
    //OK
    async alterar_saida(saida){
        try {
            await knex.raw('call alterar_saida(?, ?, ?)', [saida.idsaida, saida.descricao, saida.valor])
            return {status: true}
        } catch (err){
            return {status: false, err:err}
        }
    }
    //OK
    async deletar_saida(saida){
        try{
            await knex.raw('call deletar_saida(?)', [saida.idsaida])
            return {status: true}
        } catch(err){
            return {status: false, err:err}
        }
    }

}

module.exports = new SaidaRepo;