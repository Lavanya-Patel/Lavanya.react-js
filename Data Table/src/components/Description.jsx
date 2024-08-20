import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Description = () => {
    const[descriptiondata,setdescriptiondata]=useState({})
    const params=useParams()
    const getproductdata=()=>{
        axios.get(`http://localhost:3000/products/${params.id}`)
        .then((res)=>{
            setdescriptiondata(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        getproductdata()
    },[])
  return (
    <div>
      <h1>Description</h1>
      <div style={{display:"flex", justifyContent:"center",textAlign:"center"}}>
        <div style={{width:"50%"}}>
            <h1>{descriptiondata.id}</h1>
            <img src={descriptiondata.image} alt="" height={200} width={200}/>
            <h3>{descriptiondata.title}</h3>
            <h3>{descriptiondata.price}</h3>
            <h5>{descriptiondata.category}</h5>
            <p>{descriptiondata.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Description
