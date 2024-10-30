require ('dotenv').config
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const administradoresRepo = require('../repositories/administradoresRepo')
const AdministradoresModel = require('../models/administradoresModel')

class LoginController {

    async login(req,res){
        let {email, senha} = req.body
        const administrador = new AdministradoresModel({email, senha})
        let adm = await administradoresRepo.buscar_email(administrador)
        if (!adm.status){
            adm.message === undefined
            ? res.status(404).json({success: adm.status, message: "Email inválido"})
            : res.status(404).json({success: adm.status, message: adm.err})
        } else{
            let isPassword = await bcrypt.compare(senha,adm.values.senha)

            if(!isPassword){
                res.status(404).json({success: user.status, message: "Senha incorreta"})
            } else {
                let token = jwt.sign({email: adm.values.email, role: adm.values.role}, process.env.JWT_SECRET, {expiresIn: 600})

                res.status(200).json({success: isPassword, token:token})
            }
        }
    }

    async novo_administrador(req,res){
        let {email,senha} = req.body
        const administrador = new AdministradoresModel({email, senha})
        let resultado = await administradoresRepo.inserir_novo_adm(administrador)
        resultado.status
        ? res.status(200).json({success: true, message: "Administrador cadastrado com sucesso!"})
        : res.status(404).json({success: false, message: resultado.err})

    }
//novo - listar adms
    async administradores(req,res){
        let administradores = await administradoresRepo.listar_administradores()
        administradores.status
        ? res.status(200).json({success: true, values: administradores.values})
        : res.status(404).json({success: false, message: administradores.err})
    }

    

}

module.exports = new LoginController