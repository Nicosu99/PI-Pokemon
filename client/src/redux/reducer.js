import { GET_POKE, GET_POKEMONS, RESET_STATE, GET_ALL_TYPES, GET_NAME, FILTER_BY_TYPE, HANDLER_SOURCE, ORDER, EMPTY } from "./actions";

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

        case FILTER_BY_TYPE:
            const type =
                action.payload === 'All'
                    ? state.pokes
                    : state.pokes?.filter((el) => el.types === action.payload)
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

        
            case 'ORDER_BY_NAME':
                let order = action.payload === 'asc' ?
                    state.pokemons.sort((a,b) => {
                        if(a.name > b.name) return 1;
                        if(b.name > a.name) return -1;
                        return 0;
                    }) :
                    state.pokemons.sort((a,b) => {
                        if(a.name > b.name) return -1;
                        if(b.name > a.name) return 1;
                        return 0;
                    })
                return{
                    ...state,
                    pokemons: order
                };
    
            case 'ORDER_BY_ATK':
                let atkOrder = action.payload === '-ATK' ?
                    state.pokemons.sort((a,b) => {
                        if(a.attack > b.attack) return 1;
                        if(b.attack > a.attack) return -1;
                        return 0;
                    }) :
                    state.pokemons.sort((a,b) => {
                        if(a.attack > b.attack) return -1;
                        if(b.attack > a.attack) return 1;
                        return 0;
                    })
                return{
                    ...state,
                    allPokemons: atkOrder
                 };



        default:
            return{...state};
    }
};

export default rootReducer