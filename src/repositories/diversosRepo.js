const knex = require('../data/conection')

class DiversosRepo{

    async inserir_diversos(diversos){
        try{
            await knex.raw('call inserir_diversos(?, ?)',[diversos.iddoador,diversos.descricao])
            return {status: true}
        } catch (err){
            return {status: false, err: err}
        }
    }

    async diversos_detalhado(){
        try{
            let lista = await knex.select('*').from("view_diversos_detalhada")
            return {status: true, values: lista}
        } catch(err){
            return { status: false, err:err}
        }
    }

    async alterar_diversos(diversos){
        try{
            await knex.raw('call alterar_diversos(?, ?, ?)', [diversos.iddiversos, diversos.iddoador, diversos.descricao])
            return {status: true}
        } catch (err){
            return {status: false, err: err}
        }
    }

    async deletar_diversos(diversos){
        try{
            await knex.raw('call deletar_diversos(?)', [diversos.iddiversos])
            return {status: true}
        } catch(err){
            return {status: false, err:err}
        }
    }


}

module.exports = new DiversosRepo;