import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
  const [product, setProduct] = useState([]);
  const [categoryOption, setCategoryOption] = useState(null);
  const [order, setOrder] = useState(null);
  const [search, setSearch] = useState('');
  
  const getDataFromServer = () => {
    axios.get("http://localhost:3000/products", {
      params: {
        category: categoryOption,
        _sort: "price",
        _order: order,
        title_like: search 
      }
    })
    .then((res) => {
      setProduct(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/products/${id}`)
    .then((res) => {
      console.log(res);
      alert("Deleted");
      getDataFromServer();
    })
    .catch((err) => {
      console.log(err);
    });
  };

  useEffect(() => {
    getDataFromServer();
  }, [categoryOption, order, search]);
  return (
    <div className='product'>
   
      <div style={{ display: "flex", justifyContent: "space-evenly"}}>
        <div className='Category'>
          <select onChange={(e) => setCategoryOption(e.target.value)}>
            <option value="">Select Your Category</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>
        <div className='product-btn'>
          <button style={{backgroundColor:"darkturquoise",border:"1px solid black"}} onClick={() => setOrder("asc")}>Low to High</button>
          <br />
          <button style={{backgroundColor:"darkcyan",color:"white",border:"1px solid black"}} onClick={() => setOrder("desc")}>High to Low</button>
        </div>
        <div style={{width:"33%",paddingTop:"30px"}}>
          <input 
            type="text" 
            placeholder="Search by title..." 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
          />
        </div>
      </div>
    
      <h1>Product</h1>
     
      <div className='data' style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "5px" }}>
        {product.map((el) => (
          <div key={el.id} style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
            <Link to={`/description/${el.id}`}>
              <img src={el.image} alt="" height={200} width={200} />
            </Link>
            <h3>{el.title}</h3>
            <h3>{el.price}</h3>
            <p>{el.description}</p>
            <div className='product-btns' style={{display:"flex" ,marginLeft:"30%"}}>
            <button style={{width:"40px",alignItems:"center",border:"1px solid black"}}><Link to={`/editpage/${el.id}`}>Edit</Link></button>
            <button style={{backgroundColor:"red",color:"white"}} onClick={() => handleDelete(el.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;