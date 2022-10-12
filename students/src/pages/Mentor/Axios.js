import { useEffect, useState } from "react";
import { Endpoints } from "../../api/Endpoints";
import { deleteCharacter, getCharacter } from "../../api/apiCalls";
import { getCharactersThunk, getMoreCharactersThunk } from "../../redux/action/charactersSctions";
import { useDispatch, useSelector } from "react-redux";

const btnStyle = {
    margin: "20px",
   backgroundColor: "blue",
    color: "yellow",
    padding: "10px",
}

const AxiosPage = () => {
    const dispatch = useDispatch()
    const characters = useSelector((state) => state.characters.items?.results)
    const info = useSelector((state) => state.characters.items?.info)
    const isLoading = useSelector((state) => state.characters.loading)
    const error = useSelector((state) => state.characters.error)
    const getCharacters = () => dispatch(getCharactersThunk())
    const getMoreCharacters = (url) => dispatch(getMoreCharactersThunk(url))

    useEffect(() => {
        getCharacters();
    }, [])

    // const getData = async () => {
    //      await fetch('https://rickandmortyapi.com/api/character')
    //         .then((data) => data.json())
    //         .then((data) => setData(data))
    //         .catch((e) => console.warn(e))
    //         .finally(()=> console.log(" Finally done"))

    // }

    // const deleteUser = async (id) =>{
    //     setLoading(true)
    //     await deleteCharacter(id)
    //         .then(data=> {
    //         if(data.status === 200){
    //             getCharacter()
    //                 .then((data) => setData(data.data))
    //         }
    //     } )
    //         .catch((err) => setError())
    //         .finally(()=> setLoading(false))
    // }

    // useEffect(() => {
    //     console.log("characters", characters)
    // }, [ characters ])

    return (
        <div>
            <h1>Axios</h1>
            {/*{error && <span>{error.response.message}</span>}*/}

            {isLoading && <h1>Loading ... </h1>}
            {characters && !isLoading && characters?.map((item) => (
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <img src={item.image} alt=""/>
                        {/*<button>Delete</button>*/}
                    </div>
                )
            )}
            {error && <h1>{error.message}</h1>}
            )
            <button style={btnStyle} onClick={() => getMoreCharacters(info.next)}> Get more</button>
        </div>
    )
}
export default AxiosPage;