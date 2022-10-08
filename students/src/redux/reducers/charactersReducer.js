import { charactersReducerTypes } from "./actionTypes";


const initialState = {
    items: {},
    error: null,
    loading: true
}

const charactersReducer = (state = initialState, action) => {
    switch(action.type){
        case charactersReducerTypes.ADD_CHARACTERS:
            return {
                ...state,
                items: action.data,
            }
        case charactersReducerTypes.ADD_MORE_CHARACTERS:
            return {
                ...state,
                items: {
                    info: action.data.info,
                    results: [
                        ...state.items.results,
                        ...action.data.results
                    ]
                },
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
