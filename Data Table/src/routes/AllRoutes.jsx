import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../components/Home"
import Addproduct from '../components/Addproduct'
import Product from '../components/Product'
import Login from "../components/Login"
import Privatepage from '../components/Privatepage'
import Description from '../components/Description'
import Editpage from '../components/Editpage'

 export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/add' element={<Addproduct />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/description/:id' element={<Description />}></Route>
        <Route path='/editpage/:id' element={<Editpage />}></Route>
        <Route path='/product' element={
          <Privatepage>
          <Product />
          </Privatepage>}>
          </Route>
        <Route path='/*' element={<h1>Page not found</h1>}></Route>
      </Routes>
    </div>
  )
}


