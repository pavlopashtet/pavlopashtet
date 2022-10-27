import { actionTypes } from "../../reducers/nKoziarReducer/actionTypes"

export const nKoziarActions = {
    addInit: (data)=>({type:actionTypes.ADD_INIT, data}),
    setLoading: (loading)=>({type:actionTypes.LOADING, loading}),
    addMore:(data)=>({type:actionTypes.ADD_MORE, data}),
    remove:(id)=>({type:actionTypes.REMOVE, id})
}