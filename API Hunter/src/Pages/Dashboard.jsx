import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../components/AuthContext';
import ProductsTable from '../components/ProductsTable';
import Loader from '../Pages/Loader';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { authState, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          'https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products'
        );
        const data = await response.json();
        setProducts(data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <button data-testid="logout-btn" onClick={logoutUser} className='log-btn'>
        Logout
      </button>
      <p style={{fontSize:"28px",paddingBottom:"19px",textAlign:"center"}} data-testid="user-token">{authState.token}</p>
      {loading ? <Loader /> : <ProductsTable data={products} />}
    </div>
  );
};

export default Dashboard;