import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Addnwteacher from './Addnwteacher'
import "./Allteacher.css"
const Allteacher = () => {
    const [data,setdata] = useState([])
    const [show,setshow] = useState(false)
    const getdata = () => {
        axios.get("http://localhost:8080/getalluser").
        then((res)=>{
            if(res.data)
            {
                console.log(res.data)
                let list = res.data.filter((ele)=>{
                    return ele.type=="teacher"
                })
                setdata(list)
            }
        }).catch((err)=>{
            console.log(err)
        })
    }

    


    useEffect(()=>{
      getdata()
    },[])
    console.log(data)
  return (<div className="allteacher">
    <button onClick={()=>{
        setshow(true)
    }}>Add New Teacher</button>
    <h1>All Teacher </h1>
    <div className="heading">
        <h2>Name</h2>
        <h2>Email</h2>
    </div>
    {
       data.map((ele)=>{
        return <div key={ele._id} className="list_teacher">
           <p>{ele.name}</p>
           <p>{ele.email}</p>
        </div>
       })
    }
    {
        (show)?<Addnwteacher/>:""
    }
  </div>
  )
}

export default Allteacher