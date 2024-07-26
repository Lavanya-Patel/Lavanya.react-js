import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./Home"
import About from "./About"
import Login from "./Login"
import Description from "./Description"
import Product from "./Product"
import Auth from './Auth'

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
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
