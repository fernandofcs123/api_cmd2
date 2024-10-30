const express = require('express')
const router = express.Router()
const UsersController = require('../controllers/usersController')
const authToken = require('../middlewares/althToken')
const principalController = require('../controllers/principalController')
const loginController = require('../controllers/loginController')
const doacoesController = require('../controllers/doacoesController')
const compraController = require('../controllers/compraController')

// router.post('/novodoador',authToken,UsersController.novo_doador)
router.post('/novodoador',principalController.novo_doador)                  //ok
// router.post('/doacao',authToken,UsersController.nova_doacao)
router.post('/doacao',doacoesController.nova_doacao)                        //ok
// router.post('/compra',authToken,UsersController.nova_compra)
router.post('/compra',compraController.nova_compra)                         //ok
// router.post('/novodiversos',authToken,UsersController.doacao_diversos)
router.post('/novodiversos',doacoesController.doacao_diversos)              //ok

// router.get('/doadores',UsersController.buscar_doadores)                     
router.get('/doadores',principalController.listar_doadores)                     
// router.get('/entradas', UsersController.historico_entrada)
router.get('/entradas', doacoesController.historico_entrada)                //ok
// router.get('/saidas', UsersController.historico_saida)                      
router.get('/saidas', compraController.historico_saida)                     //ok
// router.get('/diversos',UsersController.historico_diversos)
router.get('/diversos',doacoesController.historico_diversos)                //ok
// router.get('/historico',UsersController.historico_detalhado)
router.get('/historico',principalController.historico_detalhado)           //ok
// router.get('/resultado', UsersController.resultado_detalhado)   //inutil 
router.get('/caixa',principalController.resumo_caixa)                      //ok

// router.put('/altdoador',authToken,UsersController.alterar_doador)
router.put('/altdoador',principalController.alterar_doador)                 //ok
// router.put('/altdiversos',authToken,UsersController.alterar_diversos)
router.put('/altdiversos',doacoesController.alterar_diversos)               //ok
// router.put('/altentrada',authToken,UsersController.alterar_entrada)
router.put('/altentrada',doacoesController.alterar_entrada)                 //ok
// router.put('/altsaida',authToken,UsersController.alterar_saida)
router.put('/altsaida',compraController.alterar_saida)                      //ok

// router.delete('/deldoador',authToken,UsersController.deletar_doador)
router.delete('/deldoador',principalController.deletar_doador)              //ok
// router.delete('/delentrada',authToken,UsersController.deletar_entrada)
router.delete('/delentrada',doacoesController.deletar_entrada)              //ok
// router.delete('/delsaida',authToken,UsersController.deletar_saida)
router.delete('/delsaida',compraController.deletar_saida)                   //ok
// router.delete('/deldiversos',authToken,UsersController.deletar_diversos)
router.delete('/deldiversos',doacoesController.deletar_diversos)            //ok

// router.get('/caixa',authToken,UsersController.resumo_caixa)


// router.post('/novoadm',authToken,UsersController.novo_administrador)
router.post('/novoadm',loginController.novo_administrador)                  //ok
// router.post('/login',UsersController.login)
router.post('/login',loginController.login)                                 //ok
router.get('/administradores',loginController.administradores)              //ok

router.post('/doador',principalController.buscar_por_id)                    //ok



module.exports = router