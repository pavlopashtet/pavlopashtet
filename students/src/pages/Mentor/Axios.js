import { useEffect, useState } from "react";
import { Endpoints } from "../../api/Endpoints";
import { deleteCharacter, getCharacter } from "../../api/apiCalls";
import { charactersActions } from "../../redux/action/charactersSctions";
import { useDispatch, useSelector } from "react-redux";

const AxiosPage = () => {
    const dispatch = useDispatch()
    const characters = useSelector((state) => state.characters.items?.data?.results)
    // const [ data, setData ] = useState();
    const [ error, setError ] = useState(null);

    useEffect(() => {
        dispatch(charactersActions.setLoading(true))
        getCharacter()
            .then((data) => {
                // setData(data.data)
                dispatch(charactersActions.addCharacter(data))
                setError(null)
            })
            .catch((e) => setError(e))
                .finally(()=> {
                    dispatch(charactersActions.setLoading(false))
                    console.log(" Finally done")
                })

        // getData()
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

    useEffect(() => {
        console.log("characters", characters)
    }, [ characters ])

    return (
        <div>
            <h1>Axios</h1>
            {/*{error && <span>{error.response.message}</span>}*/}


            {characters && characters?.map((item) => (
                    <div key={item.id}>
                            <p>{item.name}</p>
                        <img src={item.image} alt=""/>
                        {/*<button>Delete</button>*/}
                    </div>
                )
            )}
            {error && <h1>{error.message}</h1>}
            )
        </div>
    )
}
export default AxiosPage;