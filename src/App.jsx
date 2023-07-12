
import React from 'react'
import { useState } from 'react'
import './App.css'
import './index.css'
import {Route,Routes,Navigate} from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import ErrorPage from './Pages/ErrorPage'
import CategoryDisplay from './Pages/CategoryDisplay'
import NavigationBar from './Components/NavigationBar'
import Footer from './Components/Footer'
import CheckOut from './Pages/CheckOut'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Header from './Components/Header'
import ProductPage from './Pages/ProductPage'
import ContextProvider from "./context/login/Context";


function App() {

  const [User,setUser]=useState(true) 
  return (
    <>
        <ContextProvider>
    <NavigationBar/>
    <Header/>
   {
User 
? 
( 
   <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/products" element={<Products/>} />
  <Route path="/products/:productID" element={<ProductPage/>} />
  <Route path="/products/category/:cateogoryName" element={<CategoryDisplay/>} />
  {/* <Route path="/Contact" element={<Contact/>} />
  <Route path="/About" element={<About/>} />
  <Route path="/CheckOut" element={<CheckOut/>}/> */}
  <Route path="/*" element={<ErrorPage/>} />
</Routes>)
:
( 
   <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/Login" element={<Login/>} />
  <Route path="/SignUp" element={<SignUp/>} />
 {/*  <Route path="/Contact" element={<Contact/>} />
  <Route path="/AboutUs" element={<About/>} /> */}
  <Route path="/*" element={  <Navigate to="/Login" replace={true} />} />
</Routes>)

}
 <Footer/>   
 </ContextProvider>
</>
      

  )
}

export default App
