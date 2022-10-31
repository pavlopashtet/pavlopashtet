import {AndrewReducerTypes} from "./AndrewReducerTypes";

const initialState = {
    characters: [],
    error: null,
    loading: true
}

const AndrewReducer = (state= initialState, action) => {
    switch(action.type){
        case AndrewReducerTypes.ADD_CHARACTERS_ON_INIT:{
            return {
                ...state,
                characters: action.data
            }
        }
        case AndrewReducerTypes.ADD_CHARACTERS:{
            return {
                ...state,
                characters: [
                    ...state.characters,
                    ...action.data
                ]
            }
        }
        case AndrewReducerTypes.ADD_INFO:{
            return {
                ...state,
                info: action.info,
            }
        }
        case AndrewReducerTypes.LOADING:{
            return {
                ...state,
                loading: action.loading,
            }
        }
        default:
            return state
    }
}

export default AndrewReducer;
