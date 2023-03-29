import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import validationBox from "../../components/Validations/validationBox"
import validationSubmit from "../../components/Validations/validationSubmit"
import { getPokemons, newPoke, getTypes } from "../../redux/actions";

const Form = ()=> {

    const dispatch = useDispatch();
	let allTypes = useSelector((state) => state.types).filter(
		(el) => el.name !== 'unknown',
    ) 
    const [form, setForm] = useState({
        name:"",
        image:"",
        hp:"",
        attack:"",
        defense:"",
        speed:"",
        height:"",
        weight:"",
        types:[],
    })

    const [errors, setErrors] = useState({
        name:"",
        image:"",
        hp:"",
        attack:"",
        defense:"",
        speed:"",
        height:"",
        weight:"",
        types:[],
    })

    const changeHandler = (event) => {
		setForm({
			...form,
			[event.target.name]: event.target.value,
		});

		setErrors(
			validationBox({ ...form, [event.target.name]: event.target.value }),
		);
    }


    const submitHandler = (event) => {
        event.preventDefault()
        dispatch(newPoke(form))
        .then(res=>alert(res))
        .catch(err=>alert(err))
    }

    return (
        <form onSubmit={(event) => submitHandler(event)}>
            <div>
                <label>Nombre: </label>
                <input 
                type="text" 
                placeholder="Nombre"
                value={form.name} 
                onChange={(event) => changeHandler(event)} 
                name="name" /> 
                <span>{errors.name}</span>
            </div>
            <div>
                <label>Imagen: </label>
                <input 
                type="text" 
                placeholder="URL de la imagen"
                value={form.image} 
                onChange={changeHandler} 
                name="image" />
                <span>{errors.image}</span>
            </div>
            <div>
                <label>Vida: </label>
                <input 
                type="text" 
                placeholder="Hp"
                value={form.hp} 
                onChange={changeHandler} 
                name="hp" />
                <span>{errors.hp}</span>
            </div>
            <div>
                <label>Ataque: </label>
                <input 
                type="text" 
                placeholder="Attack"
                value={form.attack} 
                onChange={changeHandler} 
                name="attack" />
                <span>{errors.attack}</span>
            </div>
            <div>
                <label>Defensa: </label>
                <input 
                type="text" 
                placeholder="Defense"
                value={form.defense} 
                onChange={changeHandler} 
                name="defense" />
                <span>{errors.defense}</span>
            </div>
            <div>
                <label>Velocidad: </label>
                <input 
                type="text" 
                placeholder="Speed"
                value={form.speed} 
                onChange={changeHandler} 
                name="speed" />
                <span>{errors.speed}</span>
            </div>
            <div>
                <label>Altura: </label>
                <input 
                type="text"
                placeholder="Height" 
                value={form.height} 
                onChange={changeHandler} 
                name="height" />
                <span>{errors.height}</span>
            </div>
            <div>
                <label>Peso: </label>
                <input 
                type="text"
                placeholder="Weight" 
                value={form.weight} 
                onChange={changeHandler} 
                name="weight" />
                <span>{errors.weight}</span>
            </div>
            <div>
                <label>Tipos: </label>
                <input 
                type="text"
                placeholder="Types"
                value={form.types} 
                onChange={changeHandler} 
                name="types" />
                <span>{errors.types}</span>
            </div>
            <div>
								<button id="button" type="submit">
									<span></span>
									Create Pokemon
								</button>
                                <Link to="/home">
                                <span></span>
									Back to home
                                </Link>
							</div>
        </form>
        
    )
}

export default Form