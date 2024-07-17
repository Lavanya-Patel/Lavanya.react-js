import logo from './logo.svg';
import './App.css';
import Post from './component/Post'
import { useState } from 'react';

function App() {
  const[toggle,settoggle]=useState(false)
  return (
    <div className="App">
      <button onClick={()=> settoggle(!toggle)} style={{margin:"15px"}} className='btn'>{toggle? "Hide" : "Get Post"}</button>
      {
        toggle ? <Post />:""
      }
    </div>
  );
}

export default App;
