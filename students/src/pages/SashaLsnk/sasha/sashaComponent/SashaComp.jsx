import React from "react";
import { useState } from "react";
import MainSashaHeader from "../sashaHeader/SashaHeader";

const SashaComp = () => {
 
    const[isActive, setIsActive] = useState("true"); 

    const handleClick = () => {
        setIsActive(current => !current);
    };  

    return(
        <div>
            {/*<MainSashaHeader />*/}
        <div 
        style={{
            backgroundColor: isActive ? "pink" : "",
            color: isActive ? "AliceBlue" : "",
        }}
        >
        
        <h1>Sasha's Component</h1>
        <button onClick={handleClick}> 
        
        {isActive ? "Where is Sasha?" : "Sasha is here"}

        </button>
        </div>

    </div>
    
  );
};

export default SashaComp;
