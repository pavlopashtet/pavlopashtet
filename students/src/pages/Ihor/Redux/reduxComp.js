import {useEffect, useState} from "react";
import {loadData
} from "../Axios/ApiCalls";
import {rickAndMortyActions} from "../../../redux/action/actionsRickAndMorty";
import {useDispatch, useSelector} from "react-redux";


const ReduxPg = () => {
const dispatch = useDispatch();
const characters = useSelector((state)=>state.rickAndMorty.characters)
    const info = useSelector((state)=>state.rickAndMorty.info)
    useEffect(() => {
        loadData()
            .then((data) => {
              dispatch(rickAndMortyActions.addCharactersOnInit(data.data.results))
              dispatch(rickAndMortyActions.addInfo(data.data.info))
            })
            .catch((err) => console.log(err))

    }, [])

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
            {
                characters.length> 0 && characters?.map((character) =>(
                    <div key={character.id}>
                        <p>{character.name}</p>
                        <img src={character.image}/>
                    </div>
                ))
            }
            {info?.next !== null
                && <button onClick={getMore}>Get More</button>}

        </div>
    )
}

export default ReduxPg;