import React, { useEffect } from "react";
import {loadData} from "../../../../api/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import {rickAndMortyActions} from "../../../../redux/action/actionsRickAndMorty";
import s from "./Redux.module.css"

const Redux = () => {
    const dispatch = useDispatch();
    const characters = useSelector((state)=>state.rickAndMorty.characters)
    const isLoading = useSelector((state)=>state.rickAndMorty.loading)
    const info = useSelector((state)=>state.rickAndMorty.info)

    useEffect(() => {
        dispatch(rickAndMortyActions.setLoading(true))
        setTimeout(() => {
            loadData()
                .then((data) => {
                    dispatch(rickAndMortyActions.addCharactersOnInit(data.data.results))
                    dispatch(rickAndMortyActions.addInfo(data.data.info))
                })
                .catch((err) => console.log(err))
                .finally(() => dispatch(rickAndMortyActions.setLoading(false)))
            }, 1000)
    }, [])

    console.log("characters", characters)

    const getMore = () => {
        loadData(info?.next)
            .then((data) => {
                dispatch(rickAndMortyActions.addCharacters(data.data.results))
                dispatch(rickAndMortyActions.addInfo(data.data.info))
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