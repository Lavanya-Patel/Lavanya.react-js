import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../Service/Firebase';

export const Product = () => {
  
  const [data, setData] = useState([]);
  

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

  useEffect(() => {
    getDataFromFirebase();
  }, []);

  return (
    <div>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "5px", fontSize: "20px", paddingTop: "20px"}}>
        {data.map((el) => (
          <div key={el.id} style={{ border: "2px solid black", textAlign: "center", marginTop: "5px", marginLeft: "15px", width: "500px", height: "450px" ,padding:"40px",paddingTop:"20px" }}>
            <img src={el.image} alt="" height={150} width={150} />
            <h6>{el.id}</h6>
            <h6>{el.title}</h6>
            <h6>{el.description}</h6>
            <h6>{el.category}</h6>
            <h6>{el.price}</h6>
            <div style={{ display: "flex",justifyContent:"space-between" }}>
              <button style={{width:"50px",paddingLeft:"10px",backgroundColor:"paleturquoise", height:"30px" ,border:"1px solid black"}} onClick={() => handleEdit(el)}>Edit</button>
              <button style={{width:"70px",paddingLeft:"15px",backgroundColor:"red" ,color:"white",border:"1px solid black"}} onClick={() => handleDelete(el.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};