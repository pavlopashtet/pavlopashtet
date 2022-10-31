import {AndrewReducerTypes} from "../reducers/AndrewReducerTypes";
import { loadData } from "../../api/apiCalls";

export const AndrewActions = {
    addCharactersOnInit: (data) => ({
        type: AndrewReducerTypes.ADD_CHARACTERS_ON_INIT,
        data
    }),
    addCharacters: (data) => ({
        type: AndrewReducerTypes.ADD_CHARACTERS,
        data
    }),
    addInfo: (info) => ({
        type: AndrewReducerTypes.ADD_INFO,
        info
    }),
    setLoading: (loading) => ({
        type: AndrewReducerTypes.LOADING,
        loading
    })
}

export const getCharactersOnInit = () => (dispatch) => {
    dispatch(AndrewActions.setLoading(true))
    setTimeout(() => {
        loadData()
            .then((data) => {
                dispatch(AndrewActions.addCharactersOnInit(data.data.results))
                dispatch(AndrewActions.addInfo(data.data.info))
            })
            .catch((err) => console.log(err))
            .finally(() => dispatch(AndrewActions.setLoading(false)))
    }, 1000)
}

export const getMoreCharacters = (next) => (dispatch) => {
    loadData(next)
        .then((data) => {
            dispatch(AndrewActions.addCharacters(data.data.results))
            dispatch(AndrewActions.addInfo(data.data.info))
        })
        .catch((err) => console.log(err))
}