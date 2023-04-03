import CardsContainer from "../../components/CardsContainer/CardsContainer"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getPokemons } from "../../redux/actions"

const Home = ()=> {
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPokemons());
        // eslint-disable-next-line
    },[dispatch])

    return (
        <>
            <h1>Estos son los Pokemones</h1>
            <CardsContainer />
        </>
    )
}

export default Home