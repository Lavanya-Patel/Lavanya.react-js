import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc, addDoc, updateDoc } from 'firebase/firestore';
import { db } from '../Service/Firebase';

export const Product = () => {
  
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    image: '',
    title: '',
    category: '',
    price: '',
    description: '',
    id: null
  });

  const getDataFromFirebase = async () => {
    try {
      const res = await getDocs(collection(db, "products"));
      const newArr = res.docs.map((el) => ({ ...el.data(), id: el.id }));
      setData(newArr);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.id) {
      const productRef = doc(db, "products", formData.id);
      await updateDoc(productRef, {
        image: formData.image,
        title: formData.title,
        category: formData.category,
        price: formData.price,
        description: formData.description,
      });
    } else {
      await addDoc(collection(db, "products"), {
        image: formData.image,
        title: formData.title,
        category: formData.category,
        price: formData.price,
        description: formData.description,
      });
    }
    setFormData({ image: '', title: '', category: '', price: '', description: '', id: null });
    getDataFromFirebase(); 
  };

  const handleEdit = (product) => {
    
    setFormData(product);
   
  };

  useEffect(() => {
    getDataFromFirebase();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit} style={{width:"40%" ,justifyContent:"center"}}>
        <input
          type="text"
          placeholder="Image"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        /> <br />
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        /> <br />
        <select style={{height:"35px"}}
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        >
          <option value={""}>Select Your Category</option>
          <option value={"men's clothing"}>Men's Clothing</option>
          <option value={"jewelery"}>Jewelery</option>
          <option value={"electronics"}>Electronics</option>
          <option value={"women's clothing"}>Women's Clothing</option>
        </select>
        <input
          type="text"
          placeholder="Price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        /> <br />
        <input
          type="text"
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        /> <br />
        <input type="submit" />
      </form>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "5px", fontSize: "20px", paddingTop: "20px"}}>
        {data.map((el) => (
          <div key={el.id} style={{ border: "2px solid black", textAlign: "center", marginTop: "5px", marginLeft: "15px", width: "500px", height: "300px" ,padding:"40px",paddingTop:"20px" }}>
            <img src={el.image} alt="" height={150} width={150} />
            <h6>{el.id}</h6>
            <h6>{el.title}</h6>
            <h6>{el.description}</h6>
            <h6>{el.category}</h6>
            <h6>{el.price}</h6>
            <div style={{ display: "flex", marginLeft: "35%" }}>
              <button style={{width:"50px",paddingLeft:"10px",backgroundColor:"paleturquoise",border:"1px solid black"}} onClick={() => handleEdit(el)}>Edit</button>
              <button style={{width:"70px",paddingLeft:"15px",backgroundColor:"red" ,color:"white",border:"1px solid black"}} onClick={() => handleDelete(el.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};