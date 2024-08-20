import axios from 'axios'
import React, { useState } from 'react'
const initalstate={
  title:"",
  price:"",
  description:"",
  category:"",
  image:""
}

const Addproduct = () => {
  const[formdata,setfordata]=useState(initalstate)
  const handlechange=(e)=>{
    setfordata({...formdata,[e.target.name]:e.target.value})
  }
  const{image,title,price,category,description}=formdata

  const handlesubmit=(e)=>{
    e.preventDefault()
  axios.post("http://localhost:3000/products",formdata)
  .then((res)=>{
    console.log(res)
    alert("DataAdded")
  }).catch((err)=>{
    console.log(err)
  })
  }
  return (
    <div>
      <h1>Addproduct</h1>
      <form onSubmit={(e)=>handlesubmit(e)}>
          <input name='image' value={image} onChange={(e)=>handlechange(e)}type="text" placeholder="Image" /> <br />
          <input  name='title' value={title} onChange={(e)=>handlechange(e)}type="text" placeholder="title" /> <br />
          <select style={{height:"40px"}} name='category' value={category} onChange={(e)=>handlechange(e)}>
            <option value={""}>select Your Category</option>
            <option value={"men's clothing"}>men's clothing</option>
            <option value={"Wine"}>Wine</option>
            <option value={"jewelery"}>jewelery</option>
            <option value={"electronics"}>electronics</option>
            <option value={"women's clothing"}>women's clothing</option>
          </select>
          <input name='price' value={price} onChange={(e)=>handlechange(e)} type="text" placeholder="Price" /> <br />
          <input name='description' value={description} onChange={(e)=>handlechange(e)} type="text" placeholder="description" /> <br />
          <input type="submit" />
        </form>
    </div>
  )
}

export default Addproduct
