import React, { useState } from 'react'

function Form() {

    const [form, setForm] = useState({
        uname: '',
        pass: ''
    })
    // const [uname, setName] = useState('');
    // const [pass, setPass] = useState('');

    // function setUname(e){
    //     console.log(e.target.value);
    //     setForm(uname: e.target.value)
    // }
    // function setUname(e){
    //     console.log(e.target.value);
    //     setForm(uname: e.target.value)
    // }

    function updatename(e){
      setForm({
        ...form,
        uname: e.target.value,
      })
      console.log(form);
    }
    function updatepass(e){
      setForm({
        ...form,
        pass: e.target.value,
      })
      console.log(form);
  }


   

    function printValues(e){
        e.preventDefault()
        console.log(form.uname, form.pass)
    }

  return (
    <div>
        <form onSubmit={printValues}>
        <label>
            Username:
      {/* <input onChange={setUname} type='text'></input> */}
      <input onChange={updatename} name='uname' type='text'></input>
        </label>
        <br />
        <label>
            Password:
      {/* <input type='password' onChange={setpassword}></input> */}
      <input name='pass' type='password' onChange={updatepass}></input>
        </label>
        <button>Submit</button>
        </form>
    </div>
  )
}

export default Form;
