require('dotenv').config()
const jwt = require('jsonwebtoken')

module.exports = function(req,res,next){
    const authToken = req.headers['authorization']

    if (authToken != undefined){
        const bearer = authToken.split(' ')
        const token = bearer[1]

        try {
            let decoded = jwt.verify(token, process.env.JWT_SECRET)

            return decoded.role ===1
                ? next()
                : res.status(403).json({success: false, message: "Usuário sem permissão de acesso"})
        } catch(err){
            res.status(403).json({success: false, message: "Usuário não autenticado"})
        }
    } else{
        res.status(403).json({success: false, message: "Usuário não autenticado"})
    }
}