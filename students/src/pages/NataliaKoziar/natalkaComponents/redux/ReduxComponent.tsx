//@ts-ignore
import s from "./ReduxComponent.module.scss"
import { getData } from "../axios/apiCall";
import { useEffect } from "react";
import { nKoziarActions } from "../../../../redux/action/nKoziarAction/nKoziarAction"
import { useDispatch, useSelector } from "react-redux";
import { Istate } from "../../../../redux/reducers/nKoziarReducer/models";
import { Dispatch } from 'redux'
import { useTypedSelector } from "../../../../components/hooks/useTypedSelector";
import { TypeOfAction } from "../../../../redux/reducers/nKoziarReducer/actionTypes";


export const ReduxComponent:React.FC = () => {
    //   const items:Istate = useSelector((state) => state.NataliaKoziar.items?.results)
    // const nextPage:string = useSelector((state) => state.NataliaKoziar.items?.info?.next)
    const items = useTypedSelector(state=> state.NataliaKoziar.items?.results)
    const nextPage = useTypedSelector(state=> state.NataliaKoziar.items?.info?.next)
    const dispatch:Dispatch = useDispatch()
  
    
    useEffect(() => {
        dispatch(nKoziarActions.setLoading(true))
        getData()
            .then(response => {
                dispatch(nKoziarActions.addInit(response.data))
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(()=>dispatch(nKoziarActions.setLoading(false)))
    }, [])

    const getMore = () => {
        dispatch(nKoziarActions.setLoading(true))
        getData(nextPage)
            .then(response => {
                dispatch(nKoziarActions.addMore(response.data))
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(()=>dispatch(nKoziarActions.setLoading(false)))
    }





    return (
        <div>
            <div className={s.blocks}>
                {items && items?.map(el => <div className={s.block} key={el.id}>
                    <h5>{el.name}</h5>
                    <img width={'150px'} src={el.image} alt="avatar" />
                    <button onClick={() => dispatch(nKoziarActions.remove(el.id))}>Delete</button>
                </div>
                )}

            </div>
            <button onClick={getMore}>Get more</button>
        </div>
    )
}