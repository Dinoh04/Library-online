import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Card({ book }) {
  return (
    <>
      <div className="card-container">
          <div className="card" key={book.id}>
            <img src={book.img_url} alt={book.title} />
            <div className="card-content">
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Genre: {book.gender}</p>
            <p>Status: {book.Status ? 'Available' : 'Not Available'}</p>
            <p>Description: {book.description}</p>
            <button className='btn-card'>Read more</button>
            </div>
          
          </div>
       
      </div>
    </>
  )
}
