const { createPoke } = require ('../controllers/pokeControllers/createPoke') 
const { getPokeById } = require ('../controllers/pokeControllers/getPokeById'); 
const { getPokeByName } = require ('../controllers/pokeControllers/getPokeByName');
const { getPokemonsApi } = require('../controllers/pokeControllers/getPokemonsApi');
const { getPokemonsBdd } = require('../controllers/pokeControllers/getPokemonsBdd');
const { getAllPokes } = require ('../controllers/pokeControllers/getAllPokes')

const getPokeHandler = async (req, res) => {
     const {name} = req.query;

     try {
		if (name) {
			let pokemonName = await getPokeByName(name.toLowerCase());

			if (pokemonName.error) {
				throw new Error(pokemonName.error);
			} else {
				res.status(200).json(pokemonName);
			}
		} else {
			let allPokemons = await allPokeData();

			if (allPokemons.error) {
				throw new Error(allPokemons.error);
			} else {
				res.status(200).json(allPokemons);
			}
		}
	} catch (error) {
		res.status(400).json({ error: error.message });
	}






    // try {
    //     const results = name ? await getPokeByName : await getAllPokes();
    //     res.status(200).json(results)
    // } catch (error) {
        
    // }






    // try {
    //     if (name) {
    //         res.status(200).send (`Quiero traer todos los que se llamen ${name}`);
    //     } else {
    //         res.status(200).json ( 'Holi')
    //     }
    // } catch (error) {
    //     res.status(400).json({error: error.message})
    // }
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
        res.status(200).json(pokeById)
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
