const axios = require("axios")
const {Pokemon, Type } = require('../../db');

const getPokeById = async (id, source) => {

    try {
        if (source === 'bdd'){
            const idBdd = await Pokemon.findOne({
                where: {id: id},
                include: {
                    model: Type,
                    attributes: ['name'],
                    through: {
                        types: [], 
                    },
                },
            });
            if (idBdd) {
                return {
                    id: idBdd.id,
                    name: idBdd.name,
                    hp: idBdd.hp,
                    attack: idBdd.attack,
                    defense: idBdd.defense,
                    speed: idBdd.speed,
                    height: idBdd.height,
                    weight: idBdd.weight,
                    image: idBdd.image,
                    types: idBdd.Types.map((type) => type.name),
                    created: idBdd.created,
                }
            }  
        } else {
            const idApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            if (idApi.data){
                const pokemon = idApi.data
                const pokeId = {
                    name: pokemon.name,
					id: id,
					height: pokemon.height,
					weight: pokemon.weight,
					hp: pokemon.stats[0].base_stat,
					attack: pokemon.stats[1].base_stat,
					defense: pokemon.stats[2].base_stat,
					speed: pokemon.stats[5].base_stat,
					image: pokemon.sprites.other['official-artwork'].front_default,
                    types: pokemon.types.map((t) => t.type.name),
                    created: false,
                }
                return pokeId
            }
        }
    } catch (error) {throw new Error("Pokemon no encontrado")}

}
module.exports = {getPokeById}