import { createUserWithEmailAndPassword } from "firebase/auth";
import { MyRoutes, MyRedirectRoutes } from "../MyRoutes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RedirectRoutes } from "../../../common/Routes";
import { auth } from "./firebase";
const Login = () => {  
    const [formValue, setFormValue] = useState("email", "password");
    const [success, setSuccess] = useState (false)
    const navigate = useNavigate();
    const handleSignUp = async () => {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          formValue.email,
          formValue.password
        );
        localStorage.setItem("user", JSON.stringify(user));
        setSuccess(true)
        setTimeout (()=>navigate(`${RedirectRoutes.Iryna}${MyRedirectRoutes.FIREBASE}${MyRoutes.LOGIN}`), 3000)
      } catch (e) {
          console.log(e)
      } finally {
      }
    };
    const handleChange = (event, key) => {
      setFormValue({
        ...formValue,
        [key]: event.target.value,
      });
    };  
    console.log(formValue);
    return (
      <div>
          {!success ? 
          <>
        <form action="">
          <label point="">Email</label>
          <input
            type="email"
            value={formValue.email}
            onChange={(event) => handleChange(event, "email")}
          />
          <label point="">Password</label>
          <input
            type="password"
            value={formValue.password}
            onChange={(event) => handleChange(event, "password")}
          />
        </form>
        <br />
        <button onClick={handleSignUp}>Login</button>
        </>
        :<h1>SUCCESS</h1>}
      </div>
    ); 
  
};
export default Login;
