import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Addnwteacher = () => {
  const [name,setname] = useState("")
  const [email,setemail] = useState("")
  const [password,setpassword] = useState("")
  const [token,settoken] = useState("")
  const addteachers = (body) => {
    const headers = {
      token:token
    }
    axios.post("http://localhost:8080/addteacher",body,{
   headers:headers
      
  })
    .then((res)=>{
      if(res.data)
      {
        console.log(res.data)
        alert("Teacher Added")
        window.location.reload()
      }
    }).catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    if(localStorage.getItem("token"))
    {
      settoken(localStorage.getItem("token"))
    }
  },[])
  console.log(token)
return (<div className="popup">
    <h1>Add Teacher</h1>
    <input type="text" value={name}
    placeholder=" Enter name"
    onChange={(e)=>{
      setname(e.target.value)
    }} />
    <input type="text" value={email}
    placeholder="Enter email"
    onChange={(e)=>{
      setemail(e.target.value)
    }} />
    <input type="password" value={password}
    placeholder="create Password"
    onChange={(e)=>{
      setpassword(e.target.value)
    }} />
    <button 
    onClick={()=>{
        let data = {
          name:name,
          email:email,
          password:password,
          type:"teacher"
        }
        addteachers(data)
    }}>Add</button>
  </div>
  )
}

export default Addnwteacher