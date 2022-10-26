import { memo } from "react";
const Button = ({title, handleClick}) =>{
    console.log("button render")
    return(
        <button onClick={handleClick}>
            {title}
        </button>
    )
}

export default memo(Button);