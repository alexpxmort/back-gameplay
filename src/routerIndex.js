/**
 * Arquivo com array de rotas paar ser usada na classe app,no registro das rotas
 */

const gameplay = require('../src/routes/user_gameplay/index')

module.exports = [
    {
        nome:'gameplay',
        path:gameplay
    }
]