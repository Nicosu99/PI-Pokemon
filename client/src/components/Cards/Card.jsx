import style from "./Card.module.css"
import { Link } from "react-router-dom"

const Card = (props) => {
    return(
        <Link to={`/detail/${props.id}`} className={style.card}>
            <div >
            <h3>Id: {props.id}</h3>
            <h3>Name: {props.name}</h3>
            <img src={props.image} alt={`Imagen del Pokemon ${props.name}`}></img>
            <h3>Tipo: {props.types[0]} {props.types[1]}</h3>
        </div>
        </Link>

    )
}

export default Card
