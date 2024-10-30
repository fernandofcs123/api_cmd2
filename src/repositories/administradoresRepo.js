const knex = require('../data/conection')
const bcrypt = require('bcryptjs')

class AdministradoresRepo{

    async buscar_email(administrador){
        try{
            let adm = await knex.select('idadministrador','email','senha','role').where({email:administrador.email}).table("administradores").first()
            if (adm){
                return {status: true, values: adm}
            } else{
                return {status: false, message: "Usuário não encontrado"}
            }
        } catch(err){
            return {status: false, err: "Erro ao buscar usuário no banco de dados"}
        }
    }

    async inserir_novo_adm(administrador){
        let salt = bcrypt.genSaltSync(10)
        let pass = bcrypt.hashSync(administrador.senha,salt)
        try {
            await knex.raw("call novo_administrador(?, ?)",[administrador.email,pass])
            return {status: true}
        } catch(err){
            return {status: false, err: err}
        }
    }

    async listar_administradores(){
        try {
            let administradores = await knex.select(["idadministrador","email"]).table("administradores")
            return {status: true, values: administradores}
        } catch (err){
            return {status:false, err: err}
        }
    }
}

module.exports = new AdministradoresRepo;