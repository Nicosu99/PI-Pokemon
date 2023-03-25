const axios = require ("axios");

const getPokemonsApi = async () => {
    try {
        const resultApi = await axios.get(`https://pokeapi.co/api/v2/pokemon`);                                
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
            pokemon.speed = url.data.stats[5].base_stat;
            pokemon.types = url.data.types.map((t) => t.type.name);
            pokemon.image = url.data.sprites.other['official-artwork'].front_default;
            pokemon.created = false;
            // FALTA TRAER IMAGEN EN MOVIMIENTO PARA LAS ESTADISTICAS DEL POKE
        }
        return allPokeApi;
    } catch (error) {
        console.log(error);
        throw new Error("Error al traer pokemons de la API")
    }   
};

module.exports = {getPokemonsApi};