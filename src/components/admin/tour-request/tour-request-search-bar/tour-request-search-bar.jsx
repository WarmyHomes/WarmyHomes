"use client";

import React from 'react'
import { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { RiSearch2Line } from 'react-icons/ri';
import "./search-bar.scss";
const TourRequestSearchBar = () => {

    const [seacrhTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        console.log('aranan kelime', seacrhTerm);
    }

  return (
    <div className="search-input-container">
      <input type="text" placeholder='Type Something'
      onChange={(e)=>{setSearchTerm(e.target.value)}} />
      <div className="search-icon-container">
        <RiSearch2Line className='icon' onClick={handleSearch}/>
      </div>
    </div> 
  )
}

export default TourRequestSearchBar;