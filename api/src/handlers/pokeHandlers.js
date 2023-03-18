const getPokeHandler = (req, res) => {
    const {name} = req.query;
    if(name) res.send (`Quiero traer todos los que se llamen ${name}`);
    else res.send ('Quiero traer todos los usuarios')
}

const getPokeByIdHandler = (req, res) => {
    const {id} = req.params
    res.send (`NIY: Esta ruta trae la info del pokemon buscado por params.id con el id "${id}"`);
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
         const nuevoPoke = await newPoke (
            name,
            hp,
            image,
            attack,
            defense,
            speed,
            height,
            weight,
         )
         res.status(200).json(nuevoPoke)
         
    } catch (error) {
        res.status(400).json({error: error.message})
        
    }
}
module.exports = {
    getPokeHandler,
    getPokeByIdHandler,
    createPokeHandler,
}