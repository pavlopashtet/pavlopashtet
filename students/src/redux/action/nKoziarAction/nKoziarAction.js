import { actionTypes } from "../../reducers/nKoziarReducer/actionTypes"
import { getData } from "../../../pages/NataliaKoziar/natalkaComponents/axios/apiCall";



export const nKoziarActions = {
    addInit: (data)=>({type:actionTypes.ADD_INIT, data}),
    setLoading: (loading)=>({type:actionTypes.LOADING, loading}),
    addMore:(data)=>({type:actionTypes.ADD_MORE, data}),
    remove:(id)=>({type:actionTypes.REMOVE, id})
}




export const getDataOnInit = ()=>(dispatch)=>{
    dispatch(nKoziarActions.setLoading(true))
    getData()
        .then(response => {
            dispatch(nKoziarActions.addInit(response.data))
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(dispatch(nKoziarActions.setLoading(false)))
}

export const getMore = (page)=>(dispatch)=>{
    getData(page)
    .then(response => {
        dispatch(nKoziarActions.addMore(response.data))
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(dispatch(nKoziarActions.setLoading(false)))
}
export const removeData = (id)=>(dispatch)=>{
    dispatch(nKoziarActions.remove(id))
}