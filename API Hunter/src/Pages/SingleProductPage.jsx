import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Pages/Loader';

const SingleProductPage = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`
        );
        const data = await response.json();
        setProduct(data.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return null;
  }

  return (
    <div style={{display:"flex", justifyContent:"center",textAlign:"center"}}>
      {loading ? (
        <Loader />
      ) : (
        <div style={{border:"2px solid black",backgroundColor:'#E2BFD9',padding:"12px"}}>
          <h2 data-testid="product-brand">{product.brand}</h2>
          <img style={{height:"370px",width:"250px",backgroundColor:'#E2BFD9'}}
            data-testid="product-image"
            src={product.img}
            alt={product.brand}
          />
          <p style={{paddingBottom:"8px",fontSize:"20px"}} data-testid="product-category">{product.category}</p>
          <p style={{fontSize:"25px"}} data-testid="product-price">{product.price}</p>
          <p style={{paddingTop:"9px",fontSize:'20px'}} data-testid="product-details">{product.details}</p>
        </div>
      )}
    </div>
  );
};

export default SingleProductPage;