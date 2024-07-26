import { useContext, useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Midsection from './component/Midsection'
import Button from './component/Button'
import {themecontext} from "./context/Themecontext"

function App() {
  const {theme}=useContext(themecontext)
  console.log(theme)
  return (
    <>
   
    <div style={{backgroundColor:theme=="light"?"white":"black",color:theme=="light"?"black":"white"}}>
    <Navbar />
    <Midsection />
    </div>
   <Button />
    </>
  )
}

export default App
