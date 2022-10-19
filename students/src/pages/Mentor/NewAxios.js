import { useEffect, useState } from "react";
import { Endpoints } from "../../api/Endpoints";
import {
    deleteCharacter,
    getCharacter, loadData,
    loadMoreData
} from "../../api/apiCalls";
import { getCharactersThunk, getMoreCharactersThunk } from "../../redux/action/charactersSctions";
import { useDispatch, useSelector } from "react-redux";

const btnStyle = {
    margin: "20px",
    backgroundColor: "blue",
    color: "yellow",
    padding: "10px",
}

const NewAxiosPage = () => {
    const [ characters, setCharacters ] = useState({})
    // const asyncFunc = async() => {
    //     const response = await loadInitialData();
    // }
    useEffect(() => {
        loadData()
            .then((data) => {
                // console.log(data.data)
                setCharacters(data.data)
            })
            .catch((err) => console.log(err))

    }, [])

    useEffect(()=>{
        characters.results && console.log(characters)
    }, [characters])

    const getMore = () => {
        loadData(characters?.info?.next)
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
            <h1> new Axios</h1>
            {characters?.results && characters?.results.map((character) => (
                    <div key={character.id}>
                        <p>{character.name}</p>
                        <img src={character.image} alt=""/>
                    </div>
                ))
            }
            {characters?.info?.next !== null
                && <button onClick={getMore}>Get More</button>}

        </div>
    )
}
export default NewAxiosPage;