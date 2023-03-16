const { Router } = require ('express')
const pokeRoutes = Router();

pokeRoutes.get('/',(req, res)=> {
    res.status(200).send('NIY: Esta ruta trae la info de todos los pokemones y busqueda por name')
});

pokeRoutes.get('/:id',(req, res) => {
    res.status(200).send('Estoy en Pokemons by id')
})

pokeRoutes.post ('/' ,(req,res) => {
    res.status(200).send('Estoy en post pokemon')
})

module.exports = pokeRoutes;