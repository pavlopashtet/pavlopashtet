import {useEffect, useState} from "react";
import {LoadData} from "./apiCall";

const AxiosNataComp = () => {
    const [ characters, setCharacters ] = useState({})
    useEffect(() => {
        LoadData()
            .then((data) =>{
                // console.log(data),
        setCharacters(data.data)
    })
            .catch((err) => console.log(err))

     },[])


    return (
        <div>
            <h1> my Axios</h1>
</div>
    )
}

export default AxiosNataComp;