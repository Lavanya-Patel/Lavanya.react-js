import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'

const Allroutes = () => {
  return (
    <div>
      <Routes>

        <Route path='/Login' element={<Login />} />
        <Route path='/signuppage' element={<Signup />} />

      </Routes>
    </div>
  )
}

export default Allroutes
