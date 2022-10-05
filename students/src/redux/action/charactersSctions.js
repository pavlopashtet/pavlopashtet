import { charactersReducerTypes } from "../reducers/actionTypes";

export const charactersActions = {
addCharacter: (data) => ({type: charactersReducerTypes.ADD_CHARACTERS, data}),
setLoading: (loading)=>({type: charactersReducerTypes.SET_LOADING, loading}),
// setError: ()=>(),
}