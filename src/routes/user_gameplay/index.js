/**
 * Rotas com metódos a ser utilizados na rota gameplay
 * Os Metódos permitidos sao GET E POST
 */

const express = require('express').Router();
const UserController = require('../../controllers/UserController');

const router = express;

router.get('/teste',async(req,res)=>{
   return await UserController.teste(req,res);
});

router.post('/create',async(req,res)=>{
   return await UserController.createJogada(req,res);
});

router.get('/allJogadas',async(req,res)=>{
    return await UserController.getallJogadas(req,res);
 });


module.exports = router;