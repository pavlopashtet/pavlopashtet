import
{useEffect, useState} from "react";
import { getCharacter, postPostToPlaceholder } from "../../../api/apiCalls";
import { Link } from "react-router-dom";
import { RedirectRoutes } from "../../../common/Routes";
import {Character, Info} from "../Redux";

interface InitialData {
    firstname: string,
    lastname: string,
    age: string,
    agree: boolean,
}


const Forms = () => {
    const [ formValues, setFormValues ] = useState<InitialData>({
        firstname: "",
        lastname: "",
        age: "",
        agree: false,
    });
    const [ data, setData ] = useState<{info: Info, results: Character[]}>();

    // useEffect(() => {
    //     setFormValues(initialData);
    // }, [])

    // useEffect(() => {
    //     console.log(formValues)
    // }, [formValues])

    // useEffect(() => {
    //     console.log(formValues)
    // }, [formValues])

    const handleInputChange = (key: string, value: string) => {
        console.log(key, value)
        setFormValues({
            ...formValues,
            [key]: value
        })
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const data = await postPostToPlaceholder({
                title: formValues.firstname,
                body: formValues.lastname,
                userId: formValues.age,
            })
            console.log(data)
            if (data.status === 201) {
                try {
                    const character = await getCharacter()
                    console.log(character)
                    character && setData(character.data)
                } catch (solomiyaError) {
                    console.warn(solomiyaError)
                } finally {
                    console.log("finally")
                }
            }
        } catch (e) {
            console.log(e)
        }
    }

    // {
    //     id: 1,
    //         title: '...',
    //     body: '...',
    //     userId: 1
    // }

    const loadMore = () => {
        // https://rickandmortyapi.com/api/character/?page=2
        // https://rickandmortyapi.com/api/character/?page=3
        // https://rickandmortyapi.com/api/character/?page=4
        // https://rickandmortyapi.com/api/character/?page=5

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Firstname
                    <input
                        name="firstname"
                        type="text"
                        value={formValues.firstname}
                        onChange={(e) => handleInputChange("firstname", e.target.value)}
                    />
                </label>
                <br/>
                <label>
                    Lastname:
                    <input
                        name="lastname"
                        type="text"
                        value={formValues.lastname}
                        onChange={(e) => handleInputChange("lastname", e.target.value)}
                    />
                </label>
                <br/>
                <label>
                    Age
                    <input
                        name="age"
                        type="number"
                        value={formValues.age}
                        onChange={(e) => handleInputChange("age", e.target.value)}
                    />
                </label>
                <label>
                    Agree
                    <input
                        name="agree"
                        type="checkbox"
                        checked={formValues.agree}
                        //@ts-ignore
                        onChange={(e) => handleInputChange("agree", e.target.checked)}
                    />
                </label>
                <input type="submit" value="Submit"/>
            </form>

            {data && data?.results?.map((item) => (
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <img src={item.image} alt=""/>
                        {/*<button>Delete</button>*/}
                    </div>
                )
            )}
            <button onClick={loadMore}>More</button>
            <Link to={RedirectRoutes.Iryna}>
                <span style={{fontSize: "20px"}}>IRYNA</span>
            </Link>
        </>
    )
}


export default Forms