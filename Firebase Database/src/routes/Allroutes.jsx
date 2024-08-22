import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../component/Home'
import Login from '../component/Login'
import{ Product} from '../component/Product'
import Privatepage from '../component/Privatepage'

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/product' element={
            <Privatepage>
            <Product />
            </Privatepage>
        }></Route>
      </Routes>
    </div>
  )
}

export default Allroutes
