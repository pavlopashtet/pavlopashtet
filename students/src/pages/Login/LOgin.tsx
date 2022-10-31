import {ChangeEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase";
import {AppRoutes} from "../../common/Routes";

interface Form {
    email: string,
    password: string
}
const Login = () => {
    //  const signIn = async () => {
    //      await signInWithEmailAndPassword(auth, "kuryloff@gmail.com","passWord1@")
    //          .then((res: any) => console.log(res))
    //          .catch((e) =>console.log(e))
    //      console.log(auth.currentUser)
    //      setTimeout(()=> setRender(!render), 3000)
    //  }

    const [formValue, setFormValue] = useState<Form>({
        email: "",
        password: ""
    })
    const [success, setSuccess] = useState<boolean>(false)
    const navigate = useNavigate();
    const handleSignUp = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, formValue.email, formValue.password)
            localStorage.setItem("user", JSON.stringify(user))
            setSuccess(true)
            setTimeout(()=>navigate(AppRoutes.LOGIN), 3000)
        } catch (e) {
            console.log(e)
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
                    <button onClick={handleSignUp}>Login</button>
                </>
                : <h1>Success</h1>}
        </div>
    )
};
export default Login;