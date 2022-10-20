import { rickAndMortyActionTypes } from "../reducers/rickAndMorty";

export const rickAndMortyActions = {
    addCharactersOnInit: (data) => ({
        type: rickAndMortyActionTypes.ADD_CHARACTERS_ON_INIT,
        data
    }),
    addCharacters: (data) => ({
        type: rickAndMortyActionTypes.ADD_CHARACTERS,
        data
    }),
    addInfo: (info) => ({
        type: rickAndMortyActionTypes.ADD_INFO,
        info
    }),
    setLoading: (loading) => ({
        type: rickAndMortyActionTypes.LOADING,
        loading
    })
}