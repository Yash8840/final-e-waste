import React, { useState } from 'react'
import './SelectState.css';
import data from '../FinalData.json';

const SelectState = (props) => {
  const selectCityHandler = (e)=>{
    e.preventDefault();
    console.log(e.target.value);
    console.log(data);
    const res = data.filter((item)=>{
      return item.State === e.target.value;
    })
    console.log(res);
    
    props.onSelect(res);
  }

  return (
    <>
    <div className='stateBox'>
      <div><span className='stateSpan'>Your State</span></div>
    <select onChange={selectCityHandler}>
    <option value="" disabled selected hidden>Select Your State</option>
    <option value="Uttar Pradesh">Uttar Pradesh</option>
    <option value="Delhi">Delhi</option>
    <option value="Assam">Assam</option>
    <option value="Maharashtra">Maharashtra</option>
    <option value="Madhya Pradesh">Madhya Pradesh</option>
  </select>
    </div>
    </>
  )
}

export default SelectState