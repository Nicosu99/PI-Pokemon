const { Router } = require ('express');
const { createPokeHandler, getPokeByIdHandler, getPokeHandler } = require('../handlers/pokeHandlers');

const pokeRoutes = Router();

pokeRoutes.get('/', getPokeHandler);

pokeRoutes.get('/:id',getPokeByIdHandler);

pokeRoutes.post ('/' , createPokeHandler);

module.exports = pokeRoutes;