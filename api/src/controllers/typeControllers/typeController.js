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
                let url = await axios.get(type.url);
                delete type.url;
                type.id = url.data.id
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