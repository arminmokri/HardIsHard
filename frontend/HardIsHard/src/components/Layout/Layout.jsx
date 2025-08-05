import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
// components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// css
import './Layout.css'
// image

function Layout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1 container my-4">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
