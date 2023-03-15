const { Router } = require ('express')
const pokeRoutes = Router();

pokeRoutes.get('/',(req, res)=> {
    res.send('Estoy en Pokemons')
});

module.exports = pokeRoutes;