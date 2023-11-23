import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import SingleProduct from './components/SingleProduct';
import Cart from './pages/Cart';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Forgetpassword from './pages/Forgotpassword';
import Checkout from './pages/Checkout';
import ProductList from './pages/ProductList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<Forgetpassword />} />
            <Route path="/jouets" element={<ProductList />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/:id" element={<SingleProduct />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;