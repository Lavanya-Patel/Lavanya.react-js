import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  const[product,setproduct]=useState([])
  const[page,setpage]=useState(1)
  const getdata=()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>{
      setproduct(res.data)
    })
    .catch((err)=>{
      console.log((err))
    })
  }
  useEffect(()=>{
    getdata()
  },[page])
  return(
  <div>
    <h1>Product Page</h1>
    <hr />
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"5px"}}>
      {product.map((el)=>(
        <div key={el.id} style={{boxShadow:"rgba(100,100,111,0.2) 0px 7px 29px 0px", textAlign:"center"}}>
          <Link to={`/description/${el.id}`}>
       <img src={el.image} alt=""  height={"150px"} width={"100px"}/>
       <h3>{el.title}</h3>
       <h3>{el.price}</h3>
       <h3>{el.description}</h3>
       <button>Edit</button>
       <button>Delete</button>
       </Link>
        </div>
      ))}
    </div>
   <div style={{display:"flex" , justifyContent:"center" ,marginTop:"10px"}}>
   <button disabled ={page==0}onClick={()=>setpage(page-1)}>Prev</button>
    <span>{page}</span>
    <button  disabled ={page==4}onClick={()=>setpage(page+1)}>Next</button>
   </div>
  </div>
  )
}


export default Product
