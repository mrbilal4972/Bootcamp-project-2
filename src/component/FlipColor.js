import React, {useState} from 'react';

function Flip(){
    const[Lit, setLit] = useState(true);
  
    function toggles(){
      setLit(!Lit);
    }
  
    return(
      <div className={`room ${Lit ? 'Lit' : 'dark'}`}>
        <p>This room is {Lit ? 'Lit' : 'dark'}</p>
        <button onClick={toggles}>flip</button>
      </div>
    )
  }

  export default Flip;
