import React from 'react'
import { addDoc,collection } from 'firebase/firestore'
import {useState} from 'react'
import {db} from '../Service/Firebase'
 export const Addproduct = () => {
  const [formdata,setformdata]=useState({
    title:"",
    price:"",
    description:"",
    image:"",
    category:""
  })

  const {title,description,image,category,price}=formdata
  const handlechange=(e)=>{
    setformdata({...formdata,[e.target.name]:e.target.value})
  }
  const handlesubmit=async(e)=>{
    e.preventDefault()
    console.log(formdata)
    try{
      const res=await addDoc(collection(db,"products"),formdata)
      console.log(res)
      alert("Data Added")
    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <div>

   <form onSubmit={(e)=>handlesubmit(e)}>
          <input name="image" value={image}type="text" placeholder="Image" onChange={(e)=>handlechange(e)}/> <br />
          <input input name="title" value={title} type="text" placeholder="title"  onChange={(e)=>handlechange(e)}/> <br />
          <select input name="category" value={category}  onChange={(e)=>handlechange(e)}>
            <option value={""}>select Your Category</option>
            <option value={"men's clothing"}>men's clothing</option>
            <option value={"jewelery"}>jewelery</option>
            <option value={"electronics"}>electronics</option>
            <option value={"women's clothing"}>women's clothing</option>
          </select>
          <input input name="price" value={price} type="text" placeholder="Price"  onChange={(e)=>handlechange(e)}/> <br />
          <input input name="description" value={description} type="text" placeholder="description"  onChange={(e)=>handlechange(e)} /> <br />
          <input type="submit" />
        </form>
    </div>
  )
}

export default Addproduct
