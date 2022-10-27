import { actionTypes } from "./actionTypes"


const initialState = {
    items: {},
    error: null,
    loading: false
}
export const nKoziarReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case actionTypes.ADD_INIT:
            return {
                ...state,
                items: action.data
              
            };
        case actionTypes.LOADING:
            return {
                ...state,
                loading: action.loading

            };
        case actionTypes.ADD_MORE:
            return {
                ...state,
               items:{
                info:action.data.info,
                results:[...state.items.results, ...action.data.results]
               }
            };
        case actionTypes.REMOVE:
            return {
                ...state,
              items:{...state.items,
             
              results:state.items.results.filter(el=>el.id !== action.id)
              }              


            };

        default:
            return state;

    }
}