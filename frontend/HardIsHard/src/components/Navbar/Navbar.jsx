import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
// components
// contexts
import LoginContext from '../../contexts/LoginContext';
// css
import './Navbar.css'
// image
import Login from '../Login/Login'
import logo from './HardIsHard.png';


const Navbar = () => {

    const loginContext = useContext(LoginContext);

    const [tabs, setTabs] = useState([]);
    const [activeTab, setActiveTab] = useState('Home');

    const updateNavbar = () => {
        const _tabs = [{ name: 'Home', url: "/home" }];
        if (loginContext.isLogin) {
            _tabs.push({ name: 'Message', url: "/message" })
            _tabs.push({ name: 'Student', url: "/student" })
            _tabs.push({ name: 'Teacher', url: "/teacher" })
        } else {
            _tabs.push({ name: 'Sign-Up', url: "/sign-up" })
        }
        setTabs(_tabs)
    }

    useEffect(() => {
        updateNavbar();
    }, []);

    useEffect(() => {
        updateNavbar();
    }, [loginContext.isLogin]);



    const handleSelect = (tab) => setActiveTab(tab);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
            <a className="navbar-brand d-flex align-items-center gap-2" href="#">
                <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
                HardisHard
            </a>

            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarContent"
                aria-controls="navbarContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarContent">
                {/* Left Pills */}
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {tabs.map((tab) => (
                        <li className="nav-item" key={tab.name}>
                            <Link
                                to={tab.url}
                                className={`nav-link ${activeTab === tab.name ? 'active' : ''}`}
                                onClick={() => handleSelect(tab.name)}
                            >
                                {tab.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right Login Form */}
                <Login />
            </div>
        </nav>
    );
};

export default Navbar;
