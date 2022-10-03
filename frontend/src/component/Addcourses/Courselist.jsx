import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import Singlecourse from './Singlecourse'

const Courselist = () => {
    const [data,setdata] = useState([])
    const [type,settype] = useState("")
    const navigate= useNavigate()
    const getdata = () => {
        axios.get("http://localhost:8080/getcourses").then((res)=>{
            if(res.data)
            {
                setdata(res.data)
            }
        }).catch((er)=>{
            console.log(er)
        })
    }

    const getuser = (token) => {

      axios.get(`http://localhost:8080/isLoggedIn`,{

          headers:{

              token:token
         
            }
      }).then((res)=>{

          console.log(res.data)

          if(res.data)
          {
              settype(res.data.type)
              
          }

      }).catch((err)=>{
          console.log(err)
      })
     }

    useEffect(()=>{

      if(localStorage.getItem("token")){

        getuser(localStorage.getItem('token'));

      }
      getdata()
    },[])
    console.log(data)
  return (<>
  {
    (type == "teacher" || type == "admin")?<button className='addnew' onClick={()=>{
      navigate(("/addcourse"))
    }}>ADD NEW COURSE</button> : ""
  }
  <div className="courselist">
    {
      data.map((ele)=>{
        return <Singlecourse type={type} ele= {ele} ></Singlecourse>
      })
    }
  </div>
   </>
  )
}

export default Courselist