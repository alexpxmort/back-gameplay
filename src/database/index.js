const Sequelize = require('sequelize');
const DbConfig = require('../config/database');
const Jogada = require('../models/jogada');
const UsergamePlay  = require('../models/user_gameplay');



const connection = new Sequelize(DbConfig);

UsergamePlay.init(connection);
Jogada.init(connection);

Jogada.associate(connection.models);


module.exports = connection;
