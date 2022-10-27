import { rickAndMortyActionTypes } from "../reducers/rickAndMorty";
import { loadData } from "../../api/apiCalls";

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



export const getCharactersOnInit = (str) => (dispatch) => {
    dispatch(rickAndMortyActions.setLoading(true))
            loadData()
                .then((data) => {
                    // console.log(data.data)
                    dispatch(rickAndMortyActions.addCharactersOnInit(data.data.results))
                    dispatch(rickAndMortyActions.addInfo(data.data.info))
                })
                .catch((err) => console.log(err))
                .finally(() => dispatch(rickAndMortyActions.setLoading(false)))
}

export const getMoreCharacters = (next) => (dispatch) => {
    dispatch(rickAndMortyActions.setLoading(true))
    loadData(next)
        .then((data) => {
            dispatch(rickAndMortyActions.addCharacters(data.data.results))
            dispatch(rickAndMortyActions.addInfo(data.data.info))
        })
        .catch((err) => console.log(err))
        .finally(() => dispatch(rickAndMortyActions.setLoading(false)))
}
