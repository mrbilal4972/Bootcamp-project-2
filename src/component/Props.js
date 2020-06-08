import React from 'react';


function Hi({name}){
  return <div>Hello {name}!!</div>
}

// function HiFullname(props){
//   return <div>Hello {props.fname} {props.lname}!!</div>
// }

// function HiFullname({fname, lname}){
//   return <div>Hello {fname} {lname}!!</div>
// }

// const HiFullname = ({fname, lname}) => (
//   <div>
//     <h1>Hello {fname} {lname}!!</h1>
//   </div>
// )

export default Hi;
// export default HiFullName;