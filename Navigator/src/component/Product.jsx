import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  const [product, setproduct] = useState([])
  const [page, setpage] = useState(1)
  const getdata = () => {
    axios.get(`http://localhost:3000/products?_page=${page}&_limit=5`)
      .then((res) => {
        setproduct(res.data)
      })
      .catch((err) => {
        console.log((err))
      })
  }
  const handledelete=(id)=>{
 axios.delete(`http://localhost:3000/products/${id}`)
 .then((res)=>{
  alert("Deleted")
  getdata()
 })
 .catch((err)=>{
  console.log(err)
 })
  }
  useEffect(() => {
    getdata()
  }, [page])
  return (
    <div style={{ backgroundColor: "#F6E6CB" }}>
      <h1>Product Page</h1>
      <hr />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "5px" }}>
        {product.map((el) => (
          <div key={el.id} style={{ boxShadow: "rgba(200,100,111,0.2) 0px 7px 29px 0px", textAlign: "center" }}>
            <Link to={`/description/${el.id}`}>
              <img src={el.image} alt="" />
              <h3>{el.title}</h3>
              <h3>{el.price}</h3>
              <h3>{el.description}</h3>
           </Link>
           <button className='btn' onClick={()=>handledelete(el.id)}>Delete</button>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "10px", marginBottom: "20px", backgroundColor: "antiquewhite" }}>


        <button style={{ width: "80px", height: "35px", backgroundColor: "peachpuff", color: "black", marginTop: "10px" }} disabled={page == 1} onClick={() => setpage(page - 1)}>Prev</button>


        <span style={{ marginTop: "10px", padding: "8px", color: "black" }}>{page}</span>


        <button style={{ width: "80px", height: "35px", backgroundColor: "skyblue", color: "black", marginTop: "10px" }} disabled={page == 4} onClick={() => setpage(page + 1)}>Next</button>
      </div>
    </div>
  )
}


export default Product
