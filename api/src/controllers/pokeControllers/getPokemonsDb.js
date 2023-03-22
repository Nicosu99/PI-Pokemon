const {Pokemon, Type } = require('../../db');

const getPokemonsDb = async () => {
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