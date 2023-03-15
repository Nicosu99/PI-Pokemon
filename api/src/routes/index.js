const { Router } = require('express');
const pokeRoutes = require ('./pokemonRoutes/pokeRoutes');
const typesRoutes = require ('./typesRoutes');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/pokemons', pokeRoutes);
router.use('/types', typesRoutes);

module.exports = router;
