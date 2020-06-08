import React, {useState} from 'react';

function LessText({text, maxlength}){
    const [hidden, setHidden] = useState(true);

    function expandCollaspe(){
        setHidden(!hidden)
    }

    if(text.length <= maxlength){
        return <div>{text}</div>
    }

    return(
        <div>
            {hidden ? `${text.substr(0, maxlength)}...` : text}
            <br />
            {hidden ? <button onClick={expandCollaspe}>Show More</button> :
                        <button onClick={expandCollaspe}>Show less</button>
            }
        </div>
    )
}

export default LessText;