"use client"
import React, { useState } from 'react';
import "./advert-type-from.scss"



const AdvertTypeFrom = () => {
  const [state, setState] = useState({
    errors: {} // İlgili hata durumları burada tutulabilir
  });

  return (
 
      <form id="advertTypeForm">
        <label htmlFor="title">Title:</label>

       
          <div>
            <div
              className={`form-floating  ${
                state.errors?.name ? 'is-invalid' : ''
              }`}
            >
              <input
                type="text"
                className="form-control"
                id="name"
                name="title"
                placeholder="title"
              />
            </div>
            <div className="invalid-feedback">{state.errors?.name}</div>
          </div>
      
        <button type="submit" className='button'>Create</button>
      </form>
    
  );
};

export default AdvertTypeFrom;
