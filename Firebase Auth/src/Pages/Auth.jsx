import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import './Auth.css';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleAuthMode = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="auth-container">
            {isLogin ? <Login toggleAuthMode={toggleAuthMode} /> : <Signup toggleAuthMode={toggleAuthMode} />}
        </div>
    );
};

export default Auth;