import { useEffect, useState } from "react";
import { Endpoints } from "../../api/Endpoints";
import { deleteCharacter, getCharacter } from "../../api/apiCalls";

const AxiosPage = () => {
    const [ data, setData ] = useState();

    useEffect(() => {
        getCharacter()
            .then((data) => setData(data.data))
    }, [])

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
            {data && data?.results.map((item) => (
                    <div key={item.id}>
                            <p>{item.name}</p>
                        <img src={item.image} alt=""/>
                        {/*<button>Delete</button>*/}
                    </div>
                )
            )}
            )
        </div>
    )
}
export default AxiosPage;