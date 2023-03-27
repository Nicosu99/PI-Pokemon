import Card from "../Cards/Card"
import style from "./CardsContainer.module.css"

const CardsContainer = () =>{
    const pokes = [
        {
          "name": "bulbasaur",
          "id": 1,
          "height": 7,
          "weight": 69,
          "hp": 45,
          "attack": 49,
          "defense": 49,
          "speed": 45,
          "types": [
            "grass",
            "poison"
          ],
          "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
          "created": false
        },
        {
          "name": "ivysaur",
          "id": 2,
          "height": 10,
          "weight": 130,
          "hp": 60,
          "attack": 62,
          "defense": 63,
          "speed": 60,
          "types": [
            "grass",
            "poison"
          ],
          "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
          "created": false
        },
        {
          "name": "venusaur",
          "id": 3,
          "height": 20,
          "weight": 1000,
          "hp": 80,
          "attack": 82,
          "defense": 83,
          "speed": 80,
          "types": [
            "grass",
            "poison"
          ],
          "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
          "created": false
        },
        {
          "name": "charmander",
          "id": 4,
          "height": 6,
          "weight": 85,
          "hp": 39,
          "attack": 52,
          "defense": 43,
          "speed": 65,
          "types": [
            "fire"
          ],
          "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
          "created": false
        },
        {
          "name": "charmeleon",
          "id": 5,
          "height": 11,
          "weight": 190,
          "hp": 58,
          "attack": 64,
          "defense": 58,
          "speed": 80,
          "types": [
            "fire"
          ],
          "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
          "created": false
        }
        ]

    return(
        <div className={style.container}>
            {pokes.map(poke=>{
                return <Card 
                    id={poke.id}
                    name={poke.name}
                    image={poke.image}
                    types={poke.types}
                />
            })}
        </div>
    )
}

export default CardsContainer