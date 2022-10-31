import s from './Axios.module.css'
import React, {useEffect, useState, } from "react";
import {loadInitialData, loadMoreCharactersData} from "./Api";

const Axios = () => {
    const [characters, setCharacters] = useState( {})

    useEffect(() => {
        loadInitialData()
            .then((data) => {
                setCharacters(data.data)
            })
            .catch((err) => console.log(err))
    },[]);

    useEffect( () => {
        characters.results && console.log(characters)
    }, [characters])

    const getMore = () => {
        loadMoreCharactersData(characters?.info?.next)
            .then((data) => {
                setCharacters((prevState) => {
                   return {
                        info: data.data.info,
                        results: [
                            ...prevState.results,
                            ...data.data.results
                        ]
                    }
                })
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <h1>Axios</h1>
            {characters?.results && characters?.results.map((character) => (
                <div key={character.id}>
                    <p>{character.name}</p>
                    <img src={character.image} alt=""/>
                </div>
            ))
            }
            {characters?.info?.next !== null
            &&
            <button className={s.button} onClick={getMore}>More Characters</button>
            }
        </div>

    )
}

export default Axios
