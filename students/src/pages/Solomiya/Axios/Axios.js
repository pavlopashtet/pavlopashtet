import React, {useEffect, useState, } from "react";

import styles from "./AxiosPageStyle.module.scss";
import {getCharacter} from "../api/apiCalls";


const SolsAxios = (pageNumber) => {
    const [data, setData] = useState();
    const [error, setError ] = useState( null);

    useEffect(() => {
        getCharacter()
            .then((data ) =>{
                setData(data.data)
                setError( null)

    })
            .catch((e) => setError(e))
            .finally(()=> {
                console.log("Finally done")
    })
    },[]);


    return (
        <div className={styles.wrapper}>
            <h1>Axios</h1>
            {data && data?.results?.map((item) => (
                <div key={item.id}>
                    <p>{item.name}</p>
                    <img src={item.image} alt=""/>
                </div>
            ))}
            {error && <h1>{error.message}</h1>}

        </div>

    )
}

// const SolsAxios = () => {
//     useEffect( ()=>{
//         //api call
//     },[])
//     return (
//         <h1>{axios.get('https://rickandmortyapi.com/api/character/?page=2')}</h1>
//         <h1>{JSON.stringify(data)}</h1>
//     )
// }

export default SolsAxios