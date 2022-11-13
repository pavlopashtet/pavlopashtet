import React, { useEffect } from "react";
import {loadData} from "../../../../api/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import {AndrewActions} from "../../../../redux/action/AndrewActions";
import s from "./Redux.module.css"

const Redux = () => {
    const dispatch = useDispatch();
    const characters = useSelector((state)=>state.Andrew.characters)
    const isLoading = useSelector((state)=>state.Andrew.loading)
    const info = useSelector((state)=>state.Andrew.info)

    useEffect(() => {
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
    }, [])

    console.log("characters", characters)

    const getMore = () => {
        loadData(info?.next)
            .then((data) => {
                dispatch(AndrewActions.addCharacters(data.data.results))
                dispatch(AndrewActions.addInfo(data.data.info))
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <h1>Redux</h1>
            {isLoading ?
                <h1>Loading ...</h1>
                : characters.length > 0 && !isLoading && characters?.map((character) => (
                    <div key={character.id}>
                        <p>{character.name}</p>
                        <img src={character.image} alt="img"/>
                    </div>
                ))
            }
            {info?.next !== null
                && <button className={s.button} onClick={getMore}>More Characters</button>
            }
        </div>
    )
}
export default Redux;