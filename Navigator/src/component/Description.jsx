import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Description = () => {
    const[description,setdescription]=useState({})
    const params=useParams()

    const getdescription=()=>{
 axios.get(`https://fakestoreapi.com/products/${params.id}`)
 .then((res)=>setdescription(res.data))
 .catch((err)=>console.log(err))
    }
    useEffect(()=>{
        getdescription()
    },[])
  return (
    <div>
      <h1>Description Page</h1>
      <div style={{display:"flex", justifyContent:"center",textAlign:"center"}}>
        <div style={{width:"50%"}}>
            <h1>{description.id}</h1>
            <img src={description.image} alt="" height={"250px"} width={"200px"} />
            <h3>{description.title}</h3>
            <p>{description.price}</p>
            <h4>{description.category}</h4>
            <p>{description.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Description
