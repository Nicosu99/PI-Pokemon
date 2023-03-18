const { Router } = require ('express');
const { getTypesHandler } = require('../handlers/typesHandlers');
const typesRoutes = Router();

typesRoutes.get('/',getTypesHandler);

module.exports = typesRoutes;