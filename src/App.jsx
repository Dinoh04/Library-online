import { useState } from 'react'

import './App.css'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Card from './Components/Card';
import Search from './Components/Search';



function App() {
  
  return(
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Search" element={<Search/>}/>
      </Routes>
    </>
  )
}



export default App
