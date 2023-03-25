const {Type} = require("../../db");
const axios = require ('axios');

const pokeType = async () => {
    try {
        let types = await Type.findAll({
            attributes: ['id', 'name']
        });
        if(!types.length){
            let getTypes = await axios.get('https://pokeapi.co/api/v2/type');
            types = getTypes.data.results;

            for(let type of types){
                let info = await axios.get(type.info);
                delete type.info;
                type.id = info.data.id
            }

            await Type.bulkCreate(types)
        }
        return types
    } catch (error) {
        console.log(error)
        throw new Error (" No hay tipos en la base de datos ")
        
    }
}

module.exports = {pokeType}