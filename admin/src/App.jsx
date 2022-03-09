import React from 'react'
import Product from './pages/Product'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Pay from './components/Pay'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Success from './pages/Success'
import { useSelector } from 'react-redux'

const App = () => {
  const {currentUser} = useSelector(state => state.user);
  
  return <Router>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/product/:id"  element={<Product />} />
        <Route path="/products/:category"  element={<ProductList />} />
        <Route path="/products"  element={<ProductList />} />

        <Route path="/pay"  element={<Pay />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/login" element={ currentUser ? <Navigate to="/" /> : <Login /> } />
        <Route path="/register" element={ currentUser ? <Navigate to="/" /> : <Register /> } />

      </Routes>
    </Router> 
}

export default App