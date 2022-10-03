import { useEffect, useState } from "react";
import { Endpoints } from "../../api/Endpoints";
import { deleteCharacter, getCharacter } from "../../api/apiCalls";

const AxiosPage = () => {
    const [ data, setData ] = useState();
    const [ error, setError ] = useState(null);

    useEffect(() => {
        getCharacter()
            .then((data) => {
                setData(data.data)
                setError(null)
            })
            .catch((e) => setError(e))
                .finally(()=> console.log(" Finally done"))

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
        console.log("data", data)
    }, [ data ])

    return (
        <div>
            <h1>Axios</h1>
            {/*{error && <span>{error.response.message}</span>}*/}


            {data && data?.results?.map((item) => (
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