import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'
import {Product} from '../components/Product'
import Addproduct from '../components/Addproduct'

 export const Allroutes = () => {
  return (
     <div >
         <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Product' element={<Product />}></Route>
        <Route path='/Addproduct' element={<Addproduct />}></Route>
      
      </Routes>
     </div>

  )
}


