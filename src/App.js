import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Home from './components/Home';
import MyProfile from './components/userProfile/MyProfile'
import HomePage from './components/home/HomePage';
import Shop from './components/shop/Shop'
import Product from './components/product/Product';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/myProfile" element={<MyProfile />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
