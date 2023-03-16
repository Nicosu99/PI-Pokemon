const { Router } = require ('express')
const typesRoutes = Router();

typesRoutes.get('/',(req, res)=> {
    res.send('Estoy en Types')
});

module.exports = typesRoutes;