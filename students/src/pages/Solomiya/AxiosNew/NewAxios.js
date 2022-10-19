import React, {useEffect, useState, } from "react";
import styles from "../Axios/AxiosPageStyle.module.scss";
import {loadInitialData, loadMoreCharactersData} from "../api/apiCalls";
// import {logDOM} from "@testing-library/react";
// import * as url from "url";


const NewAxios = (pageNumber) => {
    const [characters, setCharacters] = useState( {})
    // const  asyncFunc = async() => {
    //     const response = await loadInitialData();
    // }

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
        <div className={styles.wrapper}>
            <h1>New Axios</h1>
            {/*{isLoading && <h1>Loading...</h1>}*/}
            {characters?.results && characters?.results.map((character) => (
                    <div key={character.id}>
                       <p>{character.name}</p>
                       <img src={character.image} alt=""/>
                    </div>
                ))
            }
            {characters?.info?.next !== null
            &&
            <button className={styles.btnAxios} onClick={getMore}>More Characters</button>
            }
        </div>

    )
}

export default NewAxios
