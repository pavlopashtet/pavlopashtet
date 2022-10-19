import React from "react";
import { useState } from "react";

const SashaComp = () => {
 
    const[isActive, setIsActive] = useState("true"); 

    const handleClick = () => {
        setIsActive(current => !current);
    };  

    return(
        <div> 
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
