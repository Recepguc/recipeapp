import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "../compenents/navbar/Navbar"
import Footer from '../compenents/footer/Footer'
import Login from "../pages/login/Login"
import Home from  "../pages/home/Home"
import About from  "../pages/about/About"
import Details from  "../pages/details/Details"


const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/details" element={<Details/>}/>


        </Routes>
        

        <Footer/>
      </BrowserRouter>
        
    </div>
  )
}

export default AppRouter