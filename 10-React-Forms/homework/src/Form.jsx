import React from 'react';

export function validate(input){
  let error = {}
  if(!input.username){
    error.username = "Username is required"
  } else if(!/\S+@\S+\.\S+/.test(input.username)){
    error.username = "Username must be an email"
  }


  if(!input.password){
    error.password = "Password is required"
  }else if(!/(?=.-*[0-9])/.test(input.password)){
    error.password = "Password must have at least 1 number"
  }
  return error
}

export default function  Form() {


  const [input, setInput] = React.useState({username : "", password: ""})

  let handleInputChange = (e) =>{
    setInput(prev => ({
      ...prev,
      [e.target.name] : [e.target.value]
    }))

    let objError= validate({...input, [e.target.name] : e.target.value})
    errorSet(objError)

  }

  let [error, errorSet] = React.useState({})



  return (
      <form>
        <div>
          <label>Username</label>
          <input 
          type="text"
          value={input.username}
          onChange={handleInputChange}
          name = "username"
          className={error.username && "danger"}
          />
        </div>
        {error.username && (<p>{error.username}</p>)}
        <div>
          <label>Password</label>
          <input 
          type="password"
          value={input.password}
          onChange={handleInputChange}
          name = "password"
          className={error.password && "danger"}
          />
        </div>
        {error.password && (<p>{error.password}</p>)}
        
        <input type={"submit"} value="Ingresar"/>
      </form>
  )
}
