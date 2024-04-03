"use client";
import React, { useState, useRef } from 'react';
import "./advert-type-from.scss";

import { initialResponse } from "@/helpers/form-validation";

import { swalAlert } from "@/helpers/swal";

import { useFormState } from "react";

const AdvertTypeFrom = () => {


 



  return (
    <form
      id="advertTypeForm">
      <label htmlFor="title">Title:</label>
      <div>
        <div
        >
          <input
            type="text"
            className="form-control"
            id="name"
            name="title"
            placeholder="title"
          />
        </div>
      
      </div>
      <button type="submit" className='button'>Create</button>
    </form>
  );
};

export default AdvertTypeFrom;
