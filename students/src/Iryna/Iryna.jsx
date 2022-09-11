import React, { useState} from 'react';
function Iryna() { 
  const [action, setAction] = useState("true"); 
  return (
    <div>      
      <button onClick={() => setAction(!action)}> {action ? 'Iryna' : 'My name is Iryna, at the moment I am interested in web development. In addition to frontend, I like sports, namely football and modern dance.'}      
      </button>
    </div>
  );
}
export default Iryna;