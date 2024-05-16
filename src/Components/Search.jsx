import React, { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios';
import Card from './Card';

export default function Search() {
    const [books,setBook] = useState([]);
    const [searchTitle,setSearchTitle] = useState('');
    const [searchResult, setSearchedResult] = useState([]);
    
  
  
  const handleSearch = () =>{
    axios.get(`http://localhost:4000/book/title/${searchTitle}`)
    .then((response)=>{
       setSearchedResult(response.data) 
    })
    .catch((error) =>{
      console.error("Error Searching title", error);
    })
  }
  
    return (
      <>
      <nav>
        <div className="logo_container">
        <h2 className='logo'>.Books</h2>
        </div>
         <div className='btn-container'>
          <button className='btn'>Log out</button>
          
          <button className='btn-1'>Log in</button>
         </div>
      
      </nav>
    <div className="container">
      <div className="title">
        <h1 className='title_below'>Welcome to world of book</h1>
      </div>
  
      <div className="input-container">
        <input type="text" placeholder='Search' value={searchTitle} onChange={(e)=>setSearchTitle(e.target.value)}/>
        <button className='seacrh' onClick={handleSearch}>Search</button>
      </div>
    </div>
    {
        searchResult?.length > 0 
        ? (
          <div className="container">
          {searchResult.map((book) =>(
            <Card book={book} />
          ))}
        </div>
        ) : (
          <div className="empty">
             <h2>No book found</h2>
          </div>
        )}
   
      </>
      
      
    )
}
