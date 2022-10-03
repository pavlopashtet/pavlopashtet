import { useEffect, useState } from "react";
import { getCharacter, postPostToPlaceholder } from "../../../api/apiCalls";

const initialData = {
    firstname: "Ihor",
    lastname: "Kurylov",
    age: "36",
    agree: true,
}

const Forms = () => {
    const [ formValues, setFormValues ] = useState({});
    const [ data, setData ] = useState();

    useEffect(() => {
        setFormValues(initialData);
    }, [])

    // useEffect(() => {
    //     console.log(formValues)
    // }, [formValues])

    const handleInputChange = (key, value) => {
        console.log(key, value)
        setFormValues({
            ...formValues,
            [key]: value
        })
    };

    const handleSubmit = async (e) => {
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
        </>
    )
}

export default Forms