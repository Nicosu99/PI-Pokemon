const axios = require ('axios')
const {getPokemonsApi} = require ("./getPokemonsApi")
const {getPokemonsBdd} = require ("./getPokemonsBdd")

const getAllPokes = async () => {
    // TIENE QUE BUSCAR EN LA BDD
const bddPokes = await getPokemonsBdd();

// TIENE QUE BUSCAR EN LA API
const apiPokes = await getPokemonsApi("https://pokeapi.co/api/v2/pokemon")

// UNIFICAR
return [...bddPokes,...apiPokes]

}

module.exports = {getAllPokes}