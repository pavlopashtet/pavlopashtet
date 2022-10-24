import { useCallback, useEffect, useState } from "react";
import { Endpoints } from "../../api/Endpoints";
import {
    deleteCharacter,
    getCharacter, loadData,
    loadMoreData
} from "../../api/apiCalls";
import { getCharactersThunk, getMoreCharactersThunk } from "../../redux/action/charactersSctions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCharactersOnInit, getMoreCharacters, rickAndMortyActions } from "../../redux/action/actionsRickAndMorty";
import Button from "../../components/Btn/Button";
// import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../common/Routes";
import WrapperComp from "../../components/HOC/children/Wrapper";
import NotFoundPAge from "../404/NotFoundPAge";

const btnStyle = {
    margin: "20px",
    backgroundColor: "blue",
    color: "yellow",
    padding: "10px",
}

const Redux = () => {
const [range, setRange] = useState([])
const dispatch = useDispatch();
// const history = useHistory();
const characters = useSelector((state)=>state.rickAndMorty.characters)
const isLoading = useSelector((state)=>state.rickAndMorty.loading)
const info = useSelector((state)=>state.rickAndMorty.info)
const _getCharactersOnInit = (str) => dispatch(getCharactersOnInit(str))
const _getMoreCharacters = (next) => dispatch(getMoreCharacters(next))


    const calculateRange = useCallback((total) => {
        let pages =[];
        for(let i = 1; i<=total; i++){
            pages.push(i);
        }
        // console.log("pages",pages)
        setRange(pages);
    }, [info?.pages])

    useEffect(()=> {
        calculateRange(info?.pages)
    },[info?.pages])


    let navigate = useNavigate();

    useEffect(() => {
        _getCharactersOnInit("Hello");
// setTimeout(()=>   navigate(AppRoutes.NOT_FOUND),5000)
    }, [])
    //
    // console.log("characters", characters)

    // useEffect(()=>{
    //     characters.results && console.log(characters)
    // }, [characters])

    // const getMore = () => {
    //     dispatch(rickAndMortyActions.setLoading(true))
    //     loadData(info?.next)
    //         .then((data) => {
    //             dispatch(rickAndMortyActions.addCharacters(data.data.results))
    //             dispatch(rickAndMortyActions.addInfo(data.data.info))
    //         })
    //         .catch((err) => console.log(err))
    //         .finally(() => dispatch(rickAndMortyActions.setLoading(false)))
    // }

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
            {/*{info?.next !== null*/}
            {/*    && <button onClick={()=> _getMoreCharacters(info?.next)}>Get More</button>}*/}

            {info?.next !== null
                && <Button title="Get More" handleClick={()=>_getMoreCharacters(info?.next)}/>}

            <WrapperComp>
                <NotFoundPAge/>
                <h1>Hello</h1>
                <WrapperComp>
                    <NotFoundPAge/>
                    <h1>Hello</h1>
                    <NotFoundPAge/>
                </WrapperComp>
                <NotFoundPAge/>
            </WrapperComp>

        </div>
    )
}
export default Redux;