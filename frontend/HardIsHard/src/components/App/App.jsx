import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// components
import SignUp from '../SignUp/SignUp';
import Layout from '../Layout/Layout';
import Message from '../Message/Message';
import Teacher from '../Teacher/Teacher';
import Student from '../Student/Student';
// contexts
import LoginContext from '../../contexts/LoginContext';
// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
// image

function App() {

  const [isLogin, setIsLogin] = useState(false);

  return (
    <LoginContext.Provider
      value={{
        isLogin: isLogin,
        setIsLogin
      }}
    >
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/message" element={<Message />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/student" element={<Student />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
