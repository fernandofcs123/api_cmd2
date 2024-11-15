require ('dotenv').config
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const administradoresRepo = require('../repositories/administradoresRepo')
const AdministradoresModel = require('../models/administradoresModel')

class LoginController {

    async login(req,res){
        let {email, senha} = req.body
        if (!email || !senha) {
            return res.status(400).json({ success: false, message: "Email e senha são obrigatorios"});

        }
        const administrador = new AdministradoresModel({email, senha})
        try{
            let adm = await administradoresRepo.buscar_email(administrador)

            if (!adm || !adm.status) {
                const errorMessage = adm?.message || adm?.err || "Erro desconhecido";
                return res.status(404).json({ success: false, message: errorMessage });
            }
            let isPassword = await bcrypt.compare(senha,adm.values.senha)

            if(!isPassword){
                res.status(404).json({success: user.status, message: "Senha incorreta"})
            }

            let token = jwt.sign({email: adm.values.email, role: adm.values.role}, process.env.JWT_SECRET, {expiresIn: 600})

            return res.status(200).json({success: true, token:token});
        

        
        } catch (err){
            console.error("Erro no login:", err);
            return res.status(500).json({ success: false, message: "Erro ao tentar realizar o login" });
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