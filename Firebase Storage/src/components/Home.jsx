import React from 'react';

const Home = () => {
  const homeStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '516px',
    width: '100%',
    fontFamily:"cursive",
  };

  const titleStyle = {
    fontSize: '34px',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    animation: 'fadeIn 1s ease',
  };

const textStyle={
  fontSize: '28px',
  padding:"50px",
  fontFamily:"cursive",
}
  return (
    <div style={homeStyle}>
    
  
      <p style={textStyle}>Welcome to our CRUD application, where managing your data has never been easier! CRUD stands for Create, Read, Update, and Delete—the four essential operations that form the backbone of data management in modern applications. Our platform empowers users to seamlessly interact with their data, whether you're adding new entries, retrieving existing records, modifying details, or removing outdated information.
      In today's digital landscape, effective data management is crucial for businesses and individuals alike. Our application provides a user-friendly interface that simplifies these operations, ensuring a smooth experience for users of all technical backgrounds.</p>
    
    </div>
  );
};

export default Home;