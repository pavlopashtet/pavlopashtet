import s from "../redux/ReduxComponent.module.scss"
import { useEffect } from "react";
import { nKoziarActions } from "../../../../redux/action/nKoziarAction/nKoziarAction"
import { useDispatch, useSelector } from "react-redux";
import { getDataOnInit, getMore, removeData } from "../../../../redux/action/nKoziarAction/nKoziarAction";


export const ThunkComponent = () => {
    const items = useSelector((state) => state.NataliaKoziar.items?.results)
    const nextPage = useSelector((state) => state.NataliaKoziar.items?.info?.next)
    const dispatch = useDispatch()
    const _getDataOnInit = () => dispatch(getDataOnInit())
    const _getMore = (page) => dispatch(getMore(page))
    const _removeData = (id)=>dispatch(removeData(id))

    useEffect(() => {
        _getDataOnInit()

    }, [])



    return (
        <div>
            <h2>Redux thunk component</h2>
            <div className={s.blocks}>
                {items && items?.map(el => <div className={s.block} key={el.id}>
                    <h5>{el.name}</h5>
                    <img width={'150px'} src={el.image} alt="avatar" />
                    <button onClick={() => _removeData(el.id)}>Delete</button>
                </div>
                )}

            </div>
            <button onClick={() => _getMore(nextPage)}>Get more</button>
        </div>
    )
}