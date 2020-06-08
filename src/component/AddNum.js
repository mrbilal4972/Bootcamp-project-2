import React, {useState} from 'react'

function AddNum() {

    const [nums, setNums] = useState([]);

    function add(){      
            setNums(nums.concat(Math.random()*100))
        }
  return (
      
    <div>
        <button onClick={add}>Add Random Number</button>
      <ul>
        {nums.map(n => <li>{n}</li>)}
      </ul>
    </div>
  )
}

export default AddNum;
