import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCharactersOnInit, getMoreCharacters} from "../../../../redux/action/AndrewActions";
import s from "../redux/Redux.module.css";

const ReduxThunk = () => {
    const dispatch = useDispatch();
    const characters = useSelector((state)=>state.Andrew.characters)
    const isLoading = useSelector((state)=>state.Andrew.loading)
    const info= useSelector((state)=>state.Andrew.info)
    const _getCharactersOnInit = () => dispatch(getCharactersOnInit())
    const _getMoreCharacters = (next) => dispatch(getMoreCharacters(next))

    useEffect(() => {
        _getCharactersOnInit();
    }, [])

    return (
        <div>
            <h1>Redux Thunk</h1>
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
                && <button className={s.button} onClick={()=>_getMoreCharacters(info?.next)}>More Characters</button>
            }
        </div>
    )
};

export default ReduxThunk;