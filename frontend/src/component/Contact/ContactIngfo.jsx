import React, { useState , useEffect} from 'react'
import axios from 'axios'
import "./contactinfo.css"
const ContactIngfo = () => {
    const [data,setdata] = useState({})
    const getdata = () => {
        axios.get("http://localhost:8080/getcontact").then((res)=>{
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

  return (<div className="contactInfo">
    <h1>Contact Information</h1>
    <div className="flex">
    <div className="details">
    <h5>Name: <span>{data.name}</span> </h5>
    <h5>Email: <span>{data.email}</span></h5>
    <h5>Phone no : <span>{data.phone}</span></h5>
    <h5>Address : <span>{data.Address}</span> </h5>
    </div>
    <div className="map_box">
        <iframe src={`https://maps.google.com/maps?q=${data.Address}&t=&z=15&ie=UTF8&iwloc=&output=embed`} frameborder="0"></iframe>
    </div>
    </div>
  </div>
  )
}

export default ContactIngfo