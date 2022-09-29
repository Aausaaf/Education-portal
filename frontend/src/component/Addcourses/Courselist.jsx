import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import Singlecourse from './Singlecourse'

const Courselist = () => {
    const [data,setdata] = useState([])
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
    useEffect(()=>{
      getdata()
    },[])
    console.log(data)
  return (<>
  <button className='addnew' onClick={()=>{
    navigate(("/addcourse"))
  }}>ADD NEW COURSE</button>
  <div className="courselist">
    {
      data.map((ele)=>{
        return <Singlecourse ele= {ele} ></Singlecourse>
      })
    }
  </div>
   </>
  )
}

export default Courselist