const { Pokemon , Type } = require ("../../db")

const createPoke = async (
    name,
    image,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
) => {
    const newPoke = await Pokemon.create({
        name: name,
        image: image ? image : 'https://w7.pngwing.com/pngs/248/960/png-transparent-pikachu-pokemon-go-silhouette-drawing-pikachu-dog-like-mammal-fictional-character-black.png',
        hp: hp,
        attack: attack,
        defense: defense,
        speed: speed,
        height: height,
        weight: weight,      
    })
};

module.exports = {createPoke}