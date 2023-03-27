import style from "./Card.module.css"

const Card = (props) => {
    return(
        <div className={style.card}>
            <h3>Id: {props.id}</h3>
            <h3>Name: {props.name}</h3>
            <img src={props.image} alt={`Imagen del Pokemon ${props.name}`}></img>
            <h3>Tipo: {props.types[0]} {props.types[1]}</h3>
        </div>
    )
}

export default Card
