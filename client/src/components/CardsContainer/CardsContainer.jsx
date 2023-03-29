import Card from "../Cards/Card"
import style from "./CardsContainer.module.css"
import { useSelector } from "react-redux"

const CardsContainer = () =>{ 
        const pokemons = useSelector (state => state.pokemons) 
        console.log(pokemons)
    return(
        <div className={style.container}>
            {pokemons.map(poke=>{
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