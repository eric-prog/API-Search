import React from 'react';
import Nothing from "../assets/nothing.jpeg"
import "../styles/None.css"


function None() {
  return (
    <div className='none'>
        <img className='nothing' src={Nothing} alt="nothing" />
        <h1>No results found :\</h1>
    </div>
  );
}

export default None;
