const axios = require ("axios");
const type = require("../../db");

const getPokemonsApi = async (url = `https://pokeapi.com/api/v2/pokemon`) => {
    try {
        const resultApi = await axios.get(url);                                
        const nextApi = await axios.get(resultApi.data.next);
        const allPokeApi = [...resultApi.data.results, ...nextApi.data.results];
        /* HASTA ACA TRAIGO TODOS LOS DATOS DE LA POKE-API*/
        
        for (const pokemon of allPokeApi){
            const url = await axios.get(pokemon.url);
            delete pokemon.url

            pokemon.id = url.data.id;
            pokemon.height = url.data.height;
            pokemon.weight = url.data.weight;
            pokemon.hp = url.data.stats[0].base_stat;
            pokemon.attack = url.data.stats[1].base_stat;
            pokemon.defense = url.data.stats[2].base_stat;
            pokemon.speed = url.data.stasts[5].base_stat;
            pokemon.types = url.data.types.map((el) => el.type.name);
            pokemon.image = url.data.sprites.other['official-artwork'].front_default;
            pokemon.created = false;
            console.log('No se que paso aki');
            // FALTA TRAER IMAGEN EN MOVIMIENTO PARA LAS ESTADISTICAS DEL POKE
        }
        return allPokeApi;
    } catch (error) {throw new Error("Error al traer pokemons de la API")}   
};

module.exports = getPokemonsApi;