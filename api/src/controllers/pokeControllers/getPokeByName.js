const axios = require("axios")
const {Pokemon, Type } = require('../../db');

const getPokeByName = async (name) => {
    try {
        const bddPoke = await Pokemon.findOne({
            where: {
                name: name
            },
            include: {
                model: Type,
                attributes: ['name'],
                through: { types:[] },
            },
        });

        if(bddPoke) {
            return {
                id: bddPoke.id,
                name: bddPoke.name,
                hp: bddPoke.hp,
                attack: bddPoke.attack,
                defense: bddPoke.defense,
                speed: bddPoke.speed,
                height: bddPoke.height,
                weight: bddPoke.weight,
                image: bddPoke.image,
                types: bddPoke.Types.map((type) => type.name),
                created: bddPoke.created,
            }
        }
        const apiPoke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        if (apiPoke.data){
            const pokemon = apiPoke.data;
			const pokeName = {
				name: name,
				id: pokemon.id,
				height: pokemon.height,
				weight: pokemon.weight,
				hp: pokemon.stats[0].base_stat,
				attack: pokemon.stats[1].base_stat,
				defense: pokemon.stats[2].base_stat,
				speed: pokemon.stats[5].base_stat,
				types: pokemon.types.map((t) => t.type.name),
				image: pokemon.sprites.other['official-artwork'].front_default,
				created: false,
			};

			return pokeName;
        }
    } catch (error) {
        throw new Error("No se pudo encontrar el pokemon por name")
    }
}
module.exports = {getPokeByName}