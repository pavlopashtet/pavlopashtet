//@ts-ignore
import s from "../redux/ReduxComponent.module.scss"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDataOnInit, getMore, removeData } from "../../../../redux/action/nKoziarAction/nKoziarAction";
import { useTypedSelector } from "../../../../components/hooks/useTypedSelector";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

export const ThunkComponent: React.FC = () => {
    // const items = useSelector((state) => state.NataliaKoziar.items?.results)
    // const nextPage = useSelector((state) => state.NataliaKoziar.items?.info?.next)
    const items = useTypedSelector(state=> state.NataliaKoziar.items?.results)
    const nextPage = useTypedSelector(state=> state.NataliaKoziar.items?.info?.next)
    const dispatch:ThunkDispatch<{}, void, AnyAction> = useDispatch()
    const _getDataOnInit = () => dispatch(getDataOnInit())
    const _getMore = (page:string) => dispatch(getMore(page))
    const _removeData = (id:number) => dispatch(removeData(id))

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
            <button onClick={() =>nextPage && _getMore(nextPage)}>Get more</button>
        </div>
    )
}