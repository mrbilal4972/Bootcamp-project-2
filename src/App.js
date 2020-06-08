import React from 'react';
import logo from './logo.svg';
// import Hi from './component/Props';
// import MediaCard from './component/MediaCard';
// import Flip from './component/FlipColor';
// import LessText from './component/lessText';
// import Counter from './component/Counter';
// import AddNum from './component/AddNum';
// import Form from './component/form'
// import HookMouseEvent from './component/HookMouseEvent'
// import CallingAPIUsingAxios from './component/CallingAPIUsingAxios'
// import AxiosExamples  from './component/AxiosExamples'
import MediaCard from './component/Bootcamp2020Class3Assignment/MediaCard'
import Gate from './component/Bootcamp2020Class3Assignment/Gate'

function App() {
  return (
    <div className="App">

      {/* BootCamp2020 Class Assignments */}
      {/* body={<b>Lorem ipsum dolor</b>} */}
      {/*  */}
      <Gate isOpen={true} />
  <MediaCard title={'Hello World'} body={['Lorem ipsum dolor sit amet ', <b>consectetur adipisicing</b>, ' elit. Ex, repellendus.']} imageURL={require('./a.jpg')}/>

      {/* Practise Custom Tags */}

      {/* <Hi name='Bilal'/> */}
      {/* <MediaCard title='ABC News' body={['My name is Bilal. I am ', <b>Pakistani</b> ]} isOpen= {true} imageURL={require('./a.jpg')}/> */}
      {/* <Flip /> */}
      {/* <LessText text='The “magic” here is that React maintains an object behind the scenes for each component, and in this persistent object, there’s an array of “state cells.” When you call useState, React stores that state in the next available cell, and increments the pointer (the array index).' maxlength= {60}/> */}
      {/* <Counter /> */}
      {/* <AddNum /> */}
      {/* <Form /> */}
      {/* <HookMouseEvent /> */}
      {/* <CallingAPIUsingAxios /> */}
      {/* <AxiosExamples /> */}
    </div>
  );
}

export default App;
