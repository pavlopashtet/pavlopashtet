import
{useEffect, useState} from "react";
import {getCharacter, postPostToPlaceholder} from "../../../api/apiCalls";
import {Link} from "react-router-dom";
import {RedirectRoutes} from "../../../common/Routes";
import {Character, Info} from "../Redux";
import db, {storage} from "../../../firebase";
import {collection, addDoc, onSnapshot, doc, deleteDoc, setDoc} from "firebase/firestore";
import {ref, uploadBytesResumable, getDownloadURL, deleteObject} from "firebase/storage";
import {useDispatch, useSelector} from "react-redux";
import rickAndMorty, {rickAndMortyActionTypes} from "../../../redux/reducers/rickAndMorty";
import {rickAndMortyActions} from "../../../redux/action/actionsRickAndMorty";
import compNata from "../../Natalia/DumbCompNata/CompNata";

interface InitialData {
    firstname: string,
    lastname: string,
    age: string,
    agree: boolean,
    image?: string | null,
    imageName?: string | null
}

interface User {
    age: string
    agree: boolean
    firstname: string
    id: string
    lastname: string
    image?: string | null
    imageName?: string | null
}

const Forms = () => {
    const collectionRef = collection(db, "users")
    const [editID, setEditID] = useState<string>("")
    const [isDisabled, setIsDisabled] = useState<boolean>(false)
    const [formValues, setFormValues] = useState<InitialData>({
        firstname: "",
        lastname: "",
        age: "",
        agree: false,
        image: null,
        imageName: null
    });
    const [editFormValues, setEditFormValues] = useState<InitialData>({
        firstname: "",
        lastname: "",
        age: "",
        agree: false,
        image: null,
        imageName: null
    });
    // const [ data, setData ] = useState<{info: Info, results: Character[]}>();
    // const [users, setUsers] = useState<User[]>([]);
    // @ts-ignore
    const users: User[] = useSelector(state => state.rickAndMorty.users)
    const dispatch = useDispatch();
    const handleInputChange = (key: string, value: string) => {
        setFormValues({
            ...formValues,
            [key]: value
        })
    };
    const addInfo = async () => {
        try {
            const docRef = await addDoc(collectionRef, formValues)
            console.log(docRef)
        } catch (e) {
            console.log(e)
        }
    }
    const getInfo = () => {
        onSnapshot(collectionRef, (snapshot) => {
            // @ts-ignore
            // dispatch(rickAndMortyActions.setUsers(snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))))
            dispatch({
                type: rickAndMortyActionTypes.SET_USERS,
                users: snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
            });
        })
    }
    const deleteUser = async (userId: string) => {
        const docRef = doc(db, "users", userId)
        try {
            await deleteDoc(docRef);
        } catch (e) {
            console.log(e)
        }
    }

    const editUser = async (user: User) => {
        const docRef = doc(db, "users", user.id)
        try {
            await setDoc(docRef, {
                firstname: user.firstname,
                lastname: user.lastname,
                age: user.age,
                agree: user.agree,
                image: user.image,
                imageName: user.imageName,
            });
        } catch (e) {
            console.log(e)
        }
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        addInfo();
    }

    useEffect(() => {
        getInfo();
    }, [])

    useEffect(() => {
        users?.length > 0 && console.log(users)
    }, [users])

    const handleUpload = (e: any) => {
        setIsDisabled((prevState) => !prevState)
        const storageRef = ref(storage, `/images/${e.target.files[0].name}`)
        const uploadData = uploadBytesResumable(storageRef, e.target.files[0])

        uploadData.on("state_changed", (snapshot)=>{
            const prog = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            console.log(prog)
        }, (err)=> console.log(err), ()=>{
            getDownloadURL(uploadData.snapshot.ref)
                .then(url => {
                    setEditFormValues({
                        ...editFormValues,
                        image: url,
                        imageName: e.target.files[0].name
                    })
                    setIsDisabled((prevState) => !prevState)
                })
        })

    }


    const handleEdit = (user: User) => {
        if (user.id === editID) {
            //@ts-ignore
            editUser(editFormValues)
            setEditID("")
        } else {
            setEditID(user.id)
            setEditFormValues(user)
        }
    }

    const handleDeleteImage = (item: User) => {
        const imageRef = ref(storage, `images/${item.imageName}`);
// Delete the file
        deleteObject(imageRef).then(() => {
            editUser({
                ...item,
                imageName: null,
                image: null
            })
        }).catch((error) => {
            // Uh-oh, an error occurred!
        });
    }

    // @ts-ignore
    // @ts-ignore
    return (
        <>
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<input type="file" onChange={handleUpload}/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
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
            {users?.length > 0 && users?.map((item) => (
                    <div key={item.id}>
                        {editID !== item.id ? <>
                        <h3>{item.firstname} {item.lastname}</h3>
                                {item?.image && <>
                                    <img style={{width: "200px"}} src={item.image} alt=""/>
                                    {/*// @ts-ignore*/}
                                    <button onClick={() => handleDeleteImage(item)}>Delete Image</button>
                                    </>}
                        </>
                            : <>
                                {/*// @ts-ignore*/}
                                <input type="file" onChange={handleUpload}/>
                                <input
                                    type="text"
                                    value={editFormValues.firstname}
                                    onChange={(e) => setEditFormValues({
                                        ...editFormValues,
                                        firstname: e.target.value
                                    })}/>
                                <input
                                    type="text"
                                    value={editFormValues.lastname}
                                    onChange={(e) => setEditFormValues({
                                        ...editFormValues,
                                        lastname: e.target.value
                                    })}/>
                            </>}
                        {/*<img src={item.image} alt=""/>*/}
                        <button onClick={() => deleteUser(item.id)}>Delete</button>
                        <button disabled={editID === item.id && isDisabled} onClick={() => handleEdit(item)}>{editID !== item.id ? "Edit" : "Save"}</button>
                    </div>
                )
            )}
            {/*<button onClick={loadMore}>More</button>*/}
            {/*<Link to={RedirectRoutes.Iryna}>*/}
            {/*    <span style={{fontSize: "20px"}}>IRYNA</span>*/}
            {/*</Link>*/}
        </>
    )
}


export default Forms