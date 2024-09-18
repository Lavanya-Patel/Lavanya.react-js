import { Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';
import SingleProductPage from '../Pages/SingleProductPage';
import PrivateRoute from '../components/PrivateRoute';
import Home from './Home';
const AllRoutes = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/products/:id"
          element={
            <PrivateRoute>
              <SingleProductPage />
            </PrivateRoute>
          }
        />
      </Routes>

  );
};

export default AllRoutes;





































