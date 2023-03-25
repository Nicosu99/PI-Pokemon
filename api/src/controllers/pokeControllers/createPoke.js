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
    types,
) => {
    let findPoke = await Pokemon.findOne({where: {name: name}})
    if (findPoke) {throw new Error(`Ya existe un Pokemon con el nombre ${name}`)}

    const newPoke = await Pokemon.create({
        name: name,
        image: image ? image : 'https://w7.pngwing.com/pngs/248/960/png-transparent-pikachu-pokemon-go-silhouette-drawing-pikachu-dog-like-mammal-fictional-character-black.png',
        hp: hp,
        attack: attack,
        defense: defense,
        speed: speed,
        height: height,
        weight: weight,      
    });
    
    const pokeTypes = await Type.findAll({ where: {name: types} })
    await newPoke.addType(pokeTypes);

    return (newPoke)//`Felicidades! Se creo un Pokemon con el nombre: ${name}!`
};

module.exports = {createPoke}