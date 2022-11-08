import { actionTypes } from "../../reducers/nKoziarReducer/actionTypes"
import { getData } from "../../../pages/NataliaKoziar/natalkaComponents/axios/apiCall";
import {Idata} from "../../reducers/nKoziarReducer/models"
import { Dispatch } from 'redux'
import { TypeOfAction } from "../../reducers/nKoziarReducer/actionTypes";
export const nKoziarActions = {
    addInit: (data:Idata)=>({type:actionTypes.ADD_INIT, data}),
    setLoading: (loading:boolean)=>({type:actionTypes.LOADING, loading}),
    addMore:(data:Idata)=>({type:actionTypes.ADD_MORE, data}),
    remove:(id:number)=>({type:actionTypes.REMOVE, id})
}




export const getDataOnInit = ()=>(dispatch:Dispatch)=>{
    dispatch(nKoziarActions.setLoading(true))
    getData()
        .then(response => {
            dispatch(nKoziarActions.addInit(response.data))
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(()=>dispatch(nKoziarActions.setLoading(false)))
}

export const getMore = (page:string)=>(dispatch:Dispatch)=>{
    getData(page)
    .then(response => {
        dispatch(nKoziarActions.addMore(response.data))
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(()=>dispatch(nKoziarActions.setLoading(false)))
}
export const removeData = (id:number)=>(dispatch:Dispatch)=>{
    dispatch(nKoziarActions.remove(id))
}