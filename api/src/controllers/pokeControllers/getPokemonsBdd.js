const {Pokemon, Type } = require('../../db');

const getPokemonsBdd = async () => {
    try { 
     const pokeDb = await Pokemon.findAll({
        include: {
            model: Type,
            atrributes: ['name']
        }
     }) 
    } catch (error) {
        
    }
}

module.exports = {getPokemonsBdd}