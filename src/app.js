/***
 * Classe uqe inicia com os middlewares e rotas para ser usada ao startar o servidor
 */

const express = require('express')
const cors = require('cors')
const routesIndex  = require('./routerIndex')
const bodyParser = require('body-parser');


class App {
    constructor(){
        this.app = express()
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(express.json())
        this.app.use(cors())
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
    }

    routes(){
        let routes = routesIndex;

        routes.forEach((val)=>{
            this.app.use(`/${val.nome}`,val.path);
        })
    }
}

module.exports  = new App().app