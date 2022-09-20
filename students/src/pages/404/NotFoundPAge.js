import skull from "./../../assets/images/IMG_0171.JPG"
import { Route } from "react-router-dom";
const NotFoundPAge = () => (
    <div style={{height: "100vh", backgroundColor: "red", fontSize: "60px", textAlign: "center"}}>
        Page no found
        <img style={{width: "100%", backgroundRepeat: "no-repeat"}}
             src={skull} alt="photo"/>
    </div>
);

export default NotFoundPAge;