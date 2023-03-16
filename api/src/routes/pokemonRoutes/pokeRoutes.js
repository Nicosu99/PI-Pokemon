const { Router } = require ('express')
const pokeRoutes = Router();

pokeRoutes.get('/',(req, res)=> {
    res.status(200).send('Estoy en Pokemons')
});

pokeRoutes.get('/:id',(req, res) => {
    res.status(200).send('Estoy en Pokemons by id')
})

pokeRoutes.post ('/' ,(req,res) => {
    res.status(200).send('Estoy en post pokemon')
})

module.exports = pokeRoutes;