import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCharactersOnInit, getMoreCharacters } from "../../redux/action/actionsRickAndMorty";
import Button from "../../components/Btn/Button";
import useValuesHook from "../../components/hooks/useValues";
import {AppStateType} from "../../redux/store";

const btnStyle = {
    margin: "20px",
    backgroundColor: "blue",
    color: "yellow",
    padding: "10px",
}

export interface Character {
    id: number
    name:string
    status: string
    species:string
    type:string
    gender:string
    origin: {
        name:string
        url:string
    },
    location:{
        name:string
        url:string
    },
    image:string,
    episode: string[]
    url:string,
    created:string
}

export interface Info {
    count: number
    pages: number,
    next: string,
    prev: null | string
}

const Redux = () => {
const [range, setRange] = useState<number[]>([])
const [values, setValues] = useState<number>(1)
const dispatch = useDispatch();
// const history = useHistory();

// @ts-ignore
const characters: Character[] = useSelector((state)=>state.rickAndMorty.characters)
const isLoading = useSelector((state: any)=>state.rickAndMorty.loading)
const info: Info = useSelector((state: any)=>state.rickAndMorty.info)
// @ts-ignore
    const _getCharactersOnInit = (str: string) => dispatch(getCharactersOnInit(str))
// @ts-ignore
    const _getMoreCharacters = (next: string) => dispatch(getMoreCharacters(next))
    //
    // const memoizedValue = useMemo(() => values+1, [values])
    // const memoizedFunction = useCallback(() => values+1, [values])


    // const res = useValuesHook(values);
    // console.log("calculate", res)

    const calculateRange: (total: number) => void = useCallback((total) => {
        console.log("function exec")
        let pages =[];
        for(let i = 1; i<=total; i++){
            pages.push(i);
        }
        // console.log("pages",pages)
        setRange(pages);
    }, [info?.next])

    // useEffect(()=> {
    //     calculateRange(info?.pages)
    // },[info])

    useEffect(()=> {
        range.length > 0 && console.log("range", range)
    },[range])

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
            <button onClick={()=>setValues((prevState) => prevState+1)}>Get More</button>
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

            {/*<WrapperComp>*/}
            {/*    <NotFoundPAge/>*/}
            {/*    <h1>Hello</h1>*/}
            {/*    <NotFoundPAge/>*/}
            {/*</WrapperComp>*/}

        </div>
    )
}
export default Redux;