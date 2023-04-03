import Card from "../Cards/Card"
import style from "./CardsContainer.module.css"
import { useSelector } from "react-redux"
import { useState } from "react"
import Paginado from "../Paginado/paginado"

const CardsContainer = () =>{ 
        const pokemons = useSelector (state => state.pokemons) 
        console.log(pokemons)

    const [currentPage, setCurrentPage] = useState(1)
    const [pokesPerPage, setPokesPerPage] = useState(12)
    const indexLastPoke = currentPage * pokesPerPage 
    const indexFirstPoke = indexLastPoke - pokesPerPage
    const currentPokes = pokemons.slice(indexFirstPoke,indexLastPoke)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    

    return(
        <div className={style.container}>
            <Paginado 
            pokesPerPage={pokesPerPage}
            pokemons={pokemons.length}
            paginado={paginado}
            />

            {currentPokes.map(poke=>{
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