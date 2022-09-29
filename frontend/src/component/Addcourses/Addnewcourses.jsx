import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import "./singlecourse.css"
const Addnewcourses = () => {
    const [title,settitle] = useState("")
    const [banner,setbanner] = useState("")
    const [paragraph,setparagraph] = useState("")
    const [video,setvideo] = useState("")
    const [more,setmore] = useState("")
    const postdata = (body) => {
        axios.post("http://localhost:8080/addcourses",body).then((res)=>{
            if(res.data)
            {
                console.log(res.data)
                alert("Course Added")
            }
        }).catch((err)=>{
            console.log(err)
        })
    }

  return (<div className="addnewcourse">
    <h1>Add New Course</h1>
    <input type="text"  value={title}
    placeholder="Name"
    onChange={(e)=>{
        settitle(e.target.value)
    }}/>
    <br />
     <input type="text"  value={banner}
    placeholder="Banner link"
    onChange={(e)=>{
        setbanner(e.target.value)
    }}/>
    <br />
     <input type="text"  value={paragraph}
    placeholder="paragarph"
    onChange={(e)=>{
        setparagraph(e.target.value)
    }}/>
    <br />
     <input type="text"  value={video}
    placeholder="Video link"
    onChange={(e)=>{
        setvideo(e.target.value)
    }}/>
    <br />
     <input type="text"  value={more}
    placeholder="More Text"
    onChange={(e)=>{
        setmore(e.target.value)
    }}/>
    <br />
        <button
        onClick={()=>{
           let data = {
            name:title,
            banner:banner,
            body:{paragraph:paragraph,
            video:video,
            nextparagraph:more
        }
        
           } 
           postdata(data)
        }}>Create</button>
  </div>
  )
}

export default Addnewcourses