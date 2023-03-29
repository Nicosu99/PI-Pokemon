import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKE = "GET_POKE";
export const RESET_STATE = "RESET_STATE";
export const GET_ALL_TYPES = "GET_ALL_TYPES";
export const HANDLER_TYPES = "HANDLER_TYPES";
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
        const apiData = await axios.get(
            `http://localhost:3001/pokemons/${id}`
        );
        const pokemon = apiData.data;
        dispatch({type: GET_POKE, payload: pokemon});
    };
};

export const getByName = (name) => {
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

export const order = (order) => {
    return {
        type: ORDER,
        payload: order
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

export const handlerTypes = (type) => {
    return {
        type: HANDLER_TYPES,
        payload: type
    }
}

export const handlerSource = (source) => {
    return {
        type: HANDLER_SOURCE,
        payload: source
    }
}