import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router'
import "./singlecourse.css"
const Singlecourse = (props) => {
  const navigate = useNavigate()
  return (
    <div className="course">
        <div className="name_box">
            <h2>{props.ele.name}</h2>
            <div className="border"></div>
        </div>
        <p>Lorem ipsum, eveniet, eius, et facere id corporis sequi unde vitae consequuntur, nam odit molestias expedita maxime totam dolor sed.</p>
        <h5> Full Time | Part Time</h5>
        <h5>Duration 6 month</h5>
        <h5>Level Beginner</h5>
        {
          (props.type == "teacher" || props.type == "admin")?<button
          onClick={()=>{
            axios.delete(`http://localhost:8080/delete/${props.ele._id}`).then((res)=>{
              if(res.data)
              {

                alert(res.data.message)
                window.location.reload()
              }
            }).catch((err)=>{
              console.log(err)
            })
          }}
          >Delete</button>:""
        }
        <button 
        onClick={()=>{
          navigate(`/course/${props.ele.name}`)
        }}>VIEW DETAILS</button>
    </div>
  )
}

export default Singlecourse