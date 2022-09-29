import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import "./About.css"
const About = () => {
    const [data,setdata] = useState({})
    const getdata = () => {
       axios.get("http://localhost:8080/getabout").then((res)=>{
        if(res.data)
        {
            console.log(res.data)
            setdata(res.data)
        }
       }).catch((err)=>{
        console.log(err)
       })
    }
    useEffect(()=>{
       getdata()
    },[])
  return (<div className="about">
     <h1>{data.name}</h1>
     <p>{data.body}</p>
  </div>
    
  )
}

export default About