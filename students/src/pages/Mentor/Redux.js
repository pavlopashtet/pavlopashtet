import { useCallback, useEffect, useState } from "react";
import { Endpoints } from "../../api/Endpoints";
import {
    deleteCharacter,
    getCharacter, loadData,
    loadMoreData
} from "../../api/apiCalls";
import { getCharactersThunk, getMoreCharactersThunk } from "../../redux/action/charactersSctions";
import { useDispatch, useSelector } from "react-redux";
import { rickAndMortyActions } from "../../redux/action/actionsRickAndMorty";

const btnStyle = {
    margin: "20px",
    backgroundColor: "blue",
    color: "yellow",
    padding: "10px",
}

const Redux = () => {
const [range, setRange] = useState([])
const dispatch = useDispatch();
const characters = useSelector((state)=>state.rickAndMorty.characters)
const isLoading = useSelector((state)=>state.rickAndMorty.loading)
const info = useSelector((state)=>state.rickAndMorty.info)

    const calculateRange = useCallback((total) => {
        let pages =[];
        for(let i = 1; i<=total; i++){
            pages.push(i);
        }
        console.log("pages",pages)
        setRange(pages);
    }, [info?.pages])

    useEffect(()=> {
        calculateRange(info?.pages)
    },[info?.pages])



    useEffect(() => {
        dispatch(rickAndMortyActions.setLoading(true))
        setTimeout(() => {
            loadData()
                    .then((data) => {
                        // console.log(data.data)
                        dispatch(rickAndMortyActions.addCharactersOnInit(data.data.results))
                        dispatch(rickAndMortyActions.addInfo(data.data.info))
                    })
                    .catch((err) => console.log(err))
                    .finally(() => dispatch(rickAndMortyActions.setLoading(false)))
            }, 2000
        )

    }, [])

    console.log("characters", characters)

    // useEffect(()=>{
    //     characters.results && console.log(characters)
    // }, [characters])

    const getMore = () => {
        dispatch(rickAndMortyActions.setLoading(true))
        loadData(info?.next)
            .then((data) => {
                dispatch(rickAndMortyActions.addCharacters(data.data.results))
                dispatch(rickAndMortyActions.addInfo(data.data.info))
            })
            .catch((err) => console.log(err))
            .finally(() => dispatch(rickAndMortyActions.setLoading(false)))
    }

    return (
        <div>
            <h1>Redux</h1>
            {isLoading ?
                <h1>Loading ...</h1>
                : characters.length > 0 && !isLoading && characters?.map((character) => (
                    <div key={character.id}>
                        <p>{character.name}</p>
                        <img src={character.image} alt=""/>
                    </div>
                ))
            }
            {info?.next !== null
                && <button onClick={getMore}>Get More</button>}

        </div>
    )
}
export default Redux;