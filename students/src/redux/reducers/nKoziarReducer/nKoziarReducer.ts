import { actionTypes, TypeOfAction } from "./actionTypes"
import { Item, Istate } from "./models"

const initialState: Istate = {
    items: {},
    error: null,
    loading: false
}
export const nKoziarReducer = (state = initialState, action: TypeOfAction): Istate => {
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
                items: {
                    info: action.data.info,
                    results: [...(state.items.results !== undefined ? state.items.results : []),
                    ...(action.data.results !== undefined ? action.data.results : [])]
                }
            };
        case actionTypes.REMOVE:
            return {
                ...state,
                items: {
                    ...state.items,

                    results: (state.items.results !== undefined ?
                        state.items.results.filter((el: Item) => el.id !== action.id) : [])
                }


            };

        default:
            return state;

    }
}