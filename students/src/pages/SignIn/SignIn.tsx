import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {ChangeEvent, useEffect, useState} from "react";
import {auth} from "../../firebase";
import {useNavigate} from "react-router-dom";
import {AppRoutes} from "../../common/Routes";
import {EnterTypes} from "../../common/Types";

interface Form {
    email: string,
    password: string
}
interface Props {
    page: EnterTypes
}


const SignUp = ({page}: Props) => {
    console.log(page);
    const [formValue, setFormValue] = useState<Form>({
        email: "",
        password: ""
    })
    const [success, setSuccess] = useState<boolean>(false)
    const navigate = useNavigate();

    const handleSignUp = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, formValue.email, formValue.password)
            setSuccess((prevState) => !prevState)
            setTimeout(()=>{
                setSuccess((prevState) => !prevState)
                setFormValue({
                    email: "",
                    password: ""
                })
                navigate(AppRoutes.LOGIN)
            }, 3000)
        } catch (e) {
            console.log(e)
        } finally {

        }
    }

    const handleSignIn = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, formValue.email, formValue.password)
            localStorage.setItem("user", JSON.stringify(user))
            setSuccess(true)
            setTimeout(()=>navigate(AppRoutes.LOGIN), 3000)
            setFormValue({
                email: "",
                password: ""
            })
            navigate(AppRoutes.Admin)
        } catch (e) {
            // console.log(e)
        } finally {

        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>, key: string) => {
        setFormValue({
            ...formValue,
            [key]: event.target.value
        })
    }

    return (
        <div>
            {!success
                ? <>
                    <form action="">
                        <label htmlFor=""> Email</label>
                        <input
                            type="email"
                            value={formValue.email}
                            onChange={(event) => handleChange(event, "email")}
                        />
                        <label htmlFor=""> Password</label>
                        <input
                            type="password"
                            value={formValue.password}
                            onChange={(event) => handleChange(event, "password")}
                        />
                    </form>
                    <button onClick={page === EnterTypes.SIGN_UP ? handleSignUp : handleSignIn}>{page}</button>
                </>
                : <h1>Success</h1>}
                </div>
                )
            };

            export default SignUp;