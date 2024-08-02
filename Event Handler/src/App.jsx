import { useState } from 'react'
import './App.css'
import Post from './component/Post'

function App() {
  const [toggle,settogle]=useState(false)

  return (
    <>
    <button onClick={()=>settogle(!toggle)} style={{margin:"15px"}} className='btn'>
      {toggle ?"Hide":"Get Post"}
    </button>{
 toggle ? <Post />:""
    }
    
    </>
  )
}

export default App
