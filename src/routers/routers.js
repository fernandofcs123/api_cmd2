const express = require('express')
const router = express.Router()
const principalController = require('../controllers/principalController')
const loginController = require('../controllers/loginController')
const doacoesController = require('../controllers/doacoesController')
const compraController = require('../controllers/compraController')
const authtoken = require("../middlewares/althToken")

router.post('/novodoador',authtoken,principalController.novo_doador)                  //ok
router.post('/doacao',doacoesController.nova_doacao)                        //ok
router.post('/compra',compraController.nova_compra)                         //ok
router.post('/novodiversos',doacoesController.doacao_diversos)              //ok

router.get('/doadores',principalController.listar_doadores)                     
router.get('/entradas', doacoesController.historico_entrada)                //ok
router.get('/saidas', compraController.historico_saida)                     //ok
router.get('/diversos',doacoesController.historico_diversos)                //ok
router.get('/historico',principalController.historico_detalhado)            //ok
router.get('/caixa',principalController.resumo_caixa)                       //ok

router.put('/altdoador',principalController.alterar_doador)                 //ok
router.put('/altdiversos',doacoesController.alterar_diversos)               //ok
router.put('/altentrada',doacoesController.alterar_entrada)                 //ok
router.put('/altsaida',compraController.alterar_saida)                      //ok

router.delete('/deldoador',principalController.deletar_doador)              //ok
router.delete('/delentrada',doacoesController.deletar_entrada)              //ok
router.delete('/delsaida',compraController.deletar_saida)                   //ok
router.delete('/deldiversos',doacoesController.deletar_diversos)            //ok

router.post('/novoadm',loginController.novo_administrador)                  //ok
router.post('/login',loginController.login)                                 //ok
router.get('/administradores',loginController.administradores)              //ok

router.post('/doador',principalController.buscar_por_id)                    //ok

module.exports = router