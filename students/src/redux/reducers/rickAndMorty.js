import charactersReducer from "./charactersReducer";

const initialState = {
    characters: [],
    error: null,
    loading: true
}

export const rickAndMortyActionTypes = {
    ADD_CHARACTERS_ON_INIT: "ADD_CHARACTERS_ON_INIT",
    ADD_CHARACTERS: "ADD_CHARACTERS",
    ADD_INFO: "ADD_INFO",
    LOADING: "LOADING"
}

const rickAndMorty = (state= initialState, action) => { //Reducer function
    switch(action.type){
        case rickAndMortyActionTypes.ADD_CHARACTERS_ON_INIT:{
            return {
                ...state,
                characters: action.data
            }
        }
        case rickAndMortyActionTypes.ADD_CHARACTERS:{
            return {
                ...state,
                characters: [
                    ...state.characters,
                    ...action.data
                    ]
            }
        }
        case rickAndMortyActionTypes.ADD_INFO:{
            return {
                ...state,
                info: action.info,
            }
        }
        case rickAndMortyActionTypes.LOADING:{
            return {
                ...state,
                loading: action.loading,
            }
        }
        default:
            return state
    }
}

export default rickAndMorty;