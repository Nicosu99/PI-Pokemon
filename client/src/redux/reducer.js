import { GET_POKE, GET_POKEMONS, RESET_STATE, GET_ALL_TYPES, GET_NAME, HANDLER_TYPES, HANDLER_SOURCE, ORDER, EMPTY } from "./actions";

const initialState ={
    pokemons: [],
    pokes: [],
    types: [],
    detail: {},    
}

const rootReducer = (state= initialState, action)=> {
    switch(action.type){
        case GET_POKEMONS:
            return {
                ...state, 
                pokemons: action.payload
            };

        case GET_POKE:
            return {
                ...state,
                detail: action.payload
            };

        case GET_ALL_TYPES:
            return {
                ...state,
                types: action.payload
            };

        case RESET_STATE:
            return {
                ...state,
                detail: {}
            };

        case GET_NAME:
            const name = 
                action.payload === ''
                    ? state.pokes
                    : state.pokemons.filter((el) => 
                    el.name.toLowerCase().includes(action.payload.toLowerCase()));
            return{
                ...state,
                pokemons: name
            };

        case HANDLER_TYPES:
            const type =
                action.payload === 'all'
                    ? state.pokes
                    : state.pokes?.filter((el) => el.types?.includes(action.payload))
            return{
                ...state,
                pokemons: type
            };

        case HANDLER_SOURCE:
            let actPokes = state.pokes;
            const source = action.payload

            if (source === 'all') return {
                ...state,
                pokemons: actPokes
            }
            if (source === 'bdd')
                actPokes = actPokes.filter((el) => el.created === true)
            return{
                ...state,
                pokemons: actPokes
            };

        case EMPTY:
            return{
                ...state,
                pokemons: [],
                pokes: [],
                types: [],
                detail: {}
            };

        
        case ORDER:
            let sort = action.payload;
            let newOrder = state.pokemons;

            if (sort === 'ascendente' || sort === 'descendente') {
                sort === 'ascendente'
                    ? newOrder.sort((a, b) => a.id2 - b.id2)
                    : newOrder.sort((a, b) => b.id2 - a.id2);
            } else if(sort === 'a_z' || sort === "z_a") {
                sort === 'a_z'
                    ? newOrder.sort((a, b) => a.name.localeCompare(b.name))
					: newOrder.sort((a, b) => b.name.localeCompare(a.name));
			} else if (sort === 'major_attack' || sort === 'minor_attack') {
				sort === 'major_attack'
					? newOrder.sort((a, b) => a.attack - b.attack)
					: newOrder.sort((a, b) => b.attack - a.attack);
            }

            return{
                ...state,
                pokemons: newOrder
            };

        default:
            return{...state};
    }
};

export default rootReducer