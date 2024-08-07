import { FaBeer } from 'react-icons/fa';
import { IoMoonSharp } from "react-icons/io5";
import { IoIosSunny } from "react-icons/io";
import { themecontext } from '../context/Themecontext';
import { useContext } from 'react';

const Button = () => {
  const { themeupdatefunction, theme} = useContext(themecontext)

  return (
    <div>
      <p
        style={{
          marginTop: '10px',
          backgroundColor: theme === 'light' ? 'white' : 'black',
          backgroundColor: theme === 'light' ? 'white' : 'black',
          color: theme === 'light' ? 'black' : 'white',
          padding: '30px ',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize:"30px",
          width:"40px",
          marginLeft:"47%"
        }}
        onClick={themeupdatefunction}
      >
    
        {theme === 'light' ? (
          <IoMoonSharp style={{ marginRight: '8px'}} />
        ) : (
          <IoIosSunny style={{ marginRight: '8px' }} />
        )}

      </p>
    </div>
  )
}

export default Button;