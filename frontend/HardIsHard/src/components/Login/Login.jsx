import React, { useState, useEffect, useContext } from 'react';
// components
// contexts
import LoginContext from '../../contexts/LoginContext';
// css
import './Login.css'
// image


const Login = () => {

    const loginContext = useContext(LoginContext);

    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [userData, setUserData] = useState({ firstName: null, lastName: null, email: null, token: null });
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const handleLogin = (e) => {
        if (!isLoggedIn) {
            setIsLoggedIn(true);
            setUserData({ name: 'Armin' })
        }
    };

    const handleLogout = (e) => {
        if (isLoggedIn) {
            setIsLoggedIn(false);
        }
    };

    useEffect(() => {
        loginContext.setIsLogin(isLoggedIn);
    }, [isLoggedIn]);

    return (
        <>
            {!isLoggedIn ? (
                <form className="d-flex" >
                    <input
                        className="form-control me-2"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={loginData.email}
                    />
                    <input
                        className="form-control me-2"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={loginData.password}
                    />
                    <button className="btn btn-outline-success" onClick={handleLogin}>
                        Login
                    </button>
                </form >
            ) : (
                <div className="d-flex align-items-center text-white gap-2">
                    <span>Welcome, <strong>{userData.name}</strong></span>
                    <button className="btn btn-outline-danger" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            )}
        </>
    );
};

export default Login;
