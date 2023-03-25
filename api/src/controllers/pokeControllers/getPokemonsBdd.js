const {Pokemon, Type } = require('../../db');

const getPokemonsBdd = async () => {
    try { 
     const pokeDb = await Pokemon.findAll({
        include: {
            model: Type,
            atrributes: ['name'],
            through: {
                types: [],
            },
        },
     });
     
     return pokeDb.map((pokemon) => {
        return{
            id: pokemon.id,
			name: pokemon.name,
			height: pokemon.height,
			weight: pokemon.weight,
			abilities: pokemon.abilities,
			hp: pokemon.hp,
			attack: pokemon.attack,
			defense: pokemon.defense,
			special_attack: pokemon.special_attack,
			special_defense: pokemon.special_defense,
			speed: pokemon.speed,
			image: pokemon.image,
			types: pokemon.Types.map((type) => type.name),
            created: pokemon.created,
        };
     }); 
     
    } catch (error) {
        throw new Error ('Error al traer Pokemons de la Base de Datos')        
    }
}

module.exports = {getPokemonsBdd}