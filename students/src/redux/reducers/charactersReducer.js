import { charactersReducerTypes } from "./actionTypes";


const initialState = {
    items: {},
    error: null,
    loading: false
}

const charactersReducer = (state = initialState, action) => {
    switch(action.type){
        case charactersReducerTypes.ADD_CHARACTERS:
            return {
                ...state,
                items: action.data
            }
        case charactersReducerTypes.SET_LOADING:
            return {
                ...state,
                loading: action.loading
            }
        case charactersReducerTypes.SET_ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
};

export default charactersReducer;
