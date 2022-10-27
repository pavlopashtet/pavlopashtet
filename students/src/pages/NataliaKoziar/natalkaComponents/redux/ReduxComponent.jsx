import axios from "axios"
import s from "./ReduxComponent.module.scss"
import { Endpoints } from "../../../../api/Endpoints";
import { useState } from "react";
import { useEffect } from "react";
import { nKoziarActions } from "../../../../redux/action/nKoziarAction/nKoziarAction"
import { useDispatch, useSelector } from "react-redux";
const { REACT_APP_API_BASEURL } = process.env;


const instance = axios.create({
    baseURL: REACT_APP_API_BASEURL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const ReduxComponent = () => {
      const items = useSelector((state) => state.NataliaKoziar.items?.results)
    const nextPage = useSelector((state) => state.NataliaKoziar.items?.info?.next)
    const dispatch = useDispatch()
  
    const getData = (url = Endpoints.CHARACTER) => {
        return instance.get(url)
    }
    useEffect(() => {
        dispatch(nKoziarActions.setLoading(true))
        getData()
            .then(response => {
                dispatch(nKoziarActions.addInit(response.data))
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(dispatch(nKoziarActions.setLoading(false)))
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
            .finally(dispatch(nKoziarActions.setLoading(false)))
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