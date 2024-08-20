import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../component/Home"
import Login from "../component/Login"
import Description from "../component/Description"
import Product from "../component/Product"
import Auth from '../component/Auth'
import About from '../component/About'

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/about' element={<About />}></Route>
       
        <Route path='/product' element=
        {<Auth>
          <Product />
        </Auth>}></Route>
        <Route path='/description/:id' element={<Description />}></Route>
      </Routes>
    </div>
  )
}

export default Allroutes
