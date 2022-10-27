import React, {useEffect } from "react";
import styles from "../Axios/AxiosPageStyle.module.scss"
import {getCharacter} from "../api/apiCalls";
import {charactersActions, getCharactersThunk, getMoreCharactersThunk} from "./action/charactersActions";
import {useDispatch, useSelector} from "react-redux";

const SolsRedux = () => {
    const dispatch = useDispatch()
    const characters = useSelector((state) => state.characters.items?.results)
    const info = useSelector( (state) => state.characters.items?.info)
    const isLoading = useSelector( (state) => state.characters.loading)
    const error = useSelector( (state) => state.characters.error)
    const getCharactersRedux = () => dispatch(getCharactersThunk())
    const getMoreCharacters = (url) => dispatch(getMoreCharactersThunk(url))


    useEffect(() => {
        getCharactersRedux();
        dispatch(charactersActions.setLoading(true));
        getCharacter()
            .then((data ) =>{
                // setData(data.data)
                dispatch(charactersActions.addCharacter(data.data))
                // setError( null)
                // getAllData();
            })
            .catch((e) => console.log(e))
            .finally(()=> {
                dispatch(charactersActions.setLoading(false))
                console.log("Finally done")
            })
    },[]);


    return (
        <div className={styles.wrapper}>
            <h1>Redux</h1>
            <button className={styles.btnAxios} onClick = {() => getMoreCharacters(info.next)}>More Characters</button>
            {characters && !isLoading && characters?.map((item) => (
                <div key={item.id}>
                    <p>{item.name}</p>
                    <img src={item.image} alt=""/>
                </div>
            ))}


        </div>

    )
}



export default SolsRedux