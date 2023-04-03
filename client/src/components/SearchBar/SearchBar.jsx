import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokeByName } from "../../redux/actions";
import style from './SearchBar.module.css';

 const SearchBar = () => {
    const dispatch = useDispatch();
    const [name,setName] = useState('');

    const handlerInput = (event) => {
        event.preventDefault();
        setName(event.target.value);
    }

    const handlerSubmit = (event) => {
        event.preventDefault();
        dispatch(getPokeByName(name));
    }

    return(
        <div className={style.container}>
            <input className={style.sBInp} type="text" placeholder="Search" onChange={(event) => handlerInput(event)} />
            <button className={style.sBtn} type="submit" onClick={(event) => handlerSubmit(event)} >Search</button>
        </div>
    )
}

export default SearchBar;