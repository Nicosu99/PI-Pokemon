const axios = require("axios")
const {Pokemon, Type } = require('../../db');

const getPokeById = async (id, source) => {

    try {
        if (source === 'bdd'){
            const idBdd = await Pokemon.findOne({
                where: {id: id}
            })
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
                    created: false,
                }
                return pokeId
            }
        }
    } catch (error) {throw new Error("Algo no funco" )}

}
module.exports = {getPokeById}