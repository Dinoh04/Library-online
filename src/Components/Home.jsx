import { Alert } from '@mui/material'
import React, { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios';
import Card from './Card';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

export default function Home() {

  const [books,setBook] = useState([]);
  const [searchTitle,setSearchTitle] = useState('');
  const [searchResult, setSearchedResult] = useState([]);



  

  useEffect(()=>{
    axios.get(`http://localhost:4000/book`)
    .then((response)=>{
       setSearchedResult(response.data) 
       console.log(response.data);
    })
    .catch((error) =>{
      console.error("Error Searching book", error);
    })
  },[])

  return (
    <>
    <nav>
      <div className="logo_container">
      <h2 className='logo'>.Books</h2>
      </div>
       <div className='btn-container'>
        
        
        <button className='btn-1'><Link className='link-1' to="/Login">Log out</Link></button>
        <button className='btn-1'><Link className='link-2' to="/SignUp">Log in</Link></button>
       </div>
    
    </nav>
  <div className="container">
    <div className="title">
      <h1 className='title_below'><span>Welcome to world of book</span></h1>
    </div>
    {
        searchResult?.length > 0 
        ? (
          <div className="book-container">
          {searchResult.map((book) =>(
            <Card key={book.title} book={book} />
          ))}
        </div>
        ) : (
          <div className="empty">
             <h2>No book found</h2>
          </div>
        )}
  </div>
 
    </>
  
    
  )
}
