import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Post = () => {
     const [data,setdata]=useState([])
    const[page,setpage]=useState(1)

    const getdata =()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
        .then((res)=>res.json())
        .then((data)=>{
            setdata(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        getdata()
    },[page])
  return (
    <div className='data'>
        <div className='post'>
      {
        data.map((el)=>(
            <div key={el.id} style={{border:"2px solid black", marginTop:"20px auto" ,height:"350px",gap:"20px" , backgroundColor:"#7FA1C3"}}>
                <h3 style={{color:"black"}}>Id :{el.id}</h3>
                <h3>User Id :{el.userId}</h3>
                <h1 style={{color:"black"}}>{el.title}</h1>
                <h3>{el.body}</h3>
            </div>
        ))
      }
    </div>
    <div className='btns'>
      <button disabled ={page == 1} onClick={()=>setpage(page-1)} style={{backgroundColor:"#478CCF" , color:"white"}}>Prev Page</button>
      <span style={{marginLeft:"10px"}}>{page}</span>
      <button disabled ={page == 50} onClick={()=>setpage(page+1)} style={{backgroundColor:"#77E4C8"}}>Next Page</button>
      </div>
    </div>
  )
}

export default Post
