const knex = require('../data/conection')

class HistoricoRepo {

    async saldo_caixa(){
        try{
            let saldo = await knex.select ("*").from("view_resultado")
            return {status: true, values: saldo}
        } catch(err){
            return {status: false, err: err}
        }
    }

    async historico_detalhado(){
        try{
            let lista = await knex.select('*').from("view_historico_detalhado")
            return {status: true, values: lista}
        } catch( err){
            return {status: false, err:err}
        }
    }

    
}

module.exports = new HistoricoRepo;