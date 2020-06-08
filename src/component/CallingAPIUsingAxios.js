import React, {useState, useEffect} from 'react'
import axios from 'axios';


function CallingAPIUsingAxios() {

    const [employee, setEmployee] = useState([]);
    const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:3000/employees')
    //     .then(res => res.json())
    //     .then(data => setEmployee(data))
    // }, []);

    useEffect(() => {
        axios.get(`http://localhost:3000/employees`)
          .then(res => {
              console.log(res);
              setPosts(res.data)
          })

      }, []);
      

  return (
    <div>
      <ul>
      {/* {employee.map((i,index) => (
          <li key={index+1}>
            {i.first_name} {i.last_name}
          </li>
        ))
        } */}
        {posts.map((i,index) => (
          <li key={index+1}>
            {i.first_name} {i.last_name}
          </li>
        ))
        }
      </ul>
    </div>
  )
}

export default CallingAPIUsingAxios
