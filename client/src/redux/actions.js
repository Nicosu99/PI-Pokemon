import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKE = "GET_POKE";
export const RESET_STATE = "RESET_STATE";
export const GET_ALL_TYPES = "GET_ALL_TYPES";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const HANDLER_SOURCE = "HANDLER_SOURCE";
export const ORDER = "ORDER";
export const EMPTY = "EMPTY";
export const GET_NAME = "GET_NAME";

export const getPokemons = () => {
    return async function(dispatch){
        const apiData = await axios.get(
            "http://localhost:3001/pokemons"
        );
        const pokemons = apiData.data; 
        dispatch({ type: GET_POKEMONS, payload: pokemons});
    };
};

export const getPoke = (id) => {
    return async function(dispatch){
        let pokemon = await axios.get(
            `http://localhost:3001/pokemons/${id}`
        );
        return dispatch({
            type: GET_POKE,
            payload: pokemon.data
        })
    };
};

export const filterByType = (payload) => {
    console.log(payload)
    return {
        type: FILTER_BY_TYPE,
        payload
    }
}

export const getPokeByName = (name) => {
    return {
        type: GET_NAME,
        payload: name,
    }
} ;

export const resetState = () => {
    return {
        type: RESET_STATE
    }
}

export const order = (payload) => {
    return {
        type: ORDER,
        payload
    }
}

export const orderAtk = (payload) => {
    return {
        type: 'ORDER_BY_ATK',
        payload
    }
}

export const orderName = (payload) => {
    return {
        type: 'ORDER_BY_NAME',
        payload
    }
}

export const empty = () => {
    return {
        type: EMPTY
    }
}

export const newPoke = (payload) => {
    return async function(){
        const nuevo = await axios.post(`http://localhost:3001/pokemons`, payload);
        return nuevo
    }
}

export const getTypes = () => {
    return async function (dispatch){
        const types = await axios.get("http://localhost:3001/types");
        return dispatch({
            type: GET_ALL_TYPES,
            payload: types.data
        })
    }
}

export const filterBySource = (source) => {
    return {
        type: HANDLER_SOURCE,
        payload: source
    }
}