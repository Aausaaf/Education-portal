import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import "./Coursebody.css"
const Coursebody = (props) => {
    const [data,setdata] = useState({})
    const [paragraph,setparagraph] = useState("")
   
    const [video,setvideo] = useState("")
     const {name} = useParams()
    const getdata = () => {
        axios.get(`http://localhost:8080/getcourse/${name}`).
        then((res)=>{
            if(res.data)
            {
                setdata(res.data[0])
                let id = res.data[0].body.video.split("=")
                setvideo(id[1])
               
                setparagraph([res.data[0].body.paragraph,res.data[0].body.nextparagraph])
            }
        }).
        catch((err)=>{
            console.log(err)
        })
    }
    console.log(data)
    console.log(video)

    useEffect(()=>{
        getdata()
    },[])
  return (<div className='course_body'> 
  <h1>{data.name}</h1>
  <img src={data.banner} alt="" />
  <p>{paragraph[0]}</p>

  <iframe width="700" height="355" src={`https://www.youtube.com/embed/${video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <p>{paragraph[1]}</p>
  </div>
  
   
  )
}

export default Coursebody