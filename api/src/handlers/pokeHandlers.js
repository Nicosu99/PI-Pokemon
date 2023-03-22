const { createPoke } = require ('../controllers/pokeControllers/createPoke') 
const { getPokeById } = require ('../controllers/pokeControllers/getPokeById'); 
const getPokemonsApi = require('../controllers/pokeControllers/getPokemonsApi');

const getPokeHandler = (req, res) => {
    const {name} = req.query;
    if(name) res.send (`Quiero traer todos los que se llamen ${name}`);
    else res.status(200).json(getPokemonsApi)
}

const getPokeByIdHandler = async (req, res) => {
    const {id} = req.params
    const source = isNaN(id) ? 'bdd' : 'api' ;
    /* VERIFICO QUE TIPO DE ID ME ESTA LLEGANDO
    Si el id es Nan, significa que viene de la bdd, pues es un UUIDv4
    Si el id es un numero, tengo que buscar en la api, pues tienen id por numerito
    Jorge, si tengo el agrado de que estes viendo esto, TE AMO <3 */
   try {
        const pokeById = await getPokeById(id, source);
        res.status(200).json(getPokeById)
   } catch (error) {
    res.status(400).json({error: error.message})   
}
}

const createPokeHandler = async (req, res) => {
    const {
        name,
        image,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        types, //?
    }  = req.body; 
    /* ME TRAIGO LA INFO DE REQ.BODY */
    try {
        if(
            !name ||
            !hp ||
            !attack ||
            !defense ||
            !speed ||
            !height ||
            !weight ||
            !types 
         ) {
            throw new Error ('Faltan llenar datos')
         }
         const nuevoPoke = await createPoke (
            name,
            image,
            hp,
            attack,
            defense,
            speed,
            height,
            weight,
            types,
         )
         res.status(200).json(nuevoPoke)
         /* LLAMO A UNA FUNCION QUE CREE AL POKE Y NO SE HACE ACA POR UN TEMA DE RESPONSABILIDADES */
    } catch (error) {
        res.status(400).json({error: error.message})
        
    }
}
module.exports = {
    getPokeHandler,
    getPokeByIdHandler,
    createPokeHandler,
}
