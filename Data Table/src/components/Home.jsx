import React from 'react';

const Home = () => {
  const homeStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '480px',
    width: '100%',
    fontFamily:"coromorent"
  };

  const titleStyle = {
    fontSize: '34px',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    animation: 'fadeIn 1s ease',
  };

  const subtitleStyle = {
    fontSize: '35px',
    fontWeight: 'bold',
    marginBottom: '2rem',
    animation: 'fadeIn 1.5s ease',
  };
const textStyle={
  fontSize: '28px',
  padding:"90px"

}
  return (
    <div style={homeStyle}>
      <h3 style={titleStyle}>Welcome to our Website</h3>
  
      <p style={textStyle}>At Mini Store, we strive to provide a seamless shopping experience where you can explore and purchase a variety of high-quality products. Our website is designed to be user-friendly, making it easy for you to find exactly what you need. Whether you're looking for the latest fashion trends, home essentials, or unique gifts, we have something for everyone.</p>
    
    </div>
  );
};

export default Home;