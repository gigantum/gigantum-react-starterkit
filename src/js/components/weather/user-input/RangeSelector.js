//Vendor
import React, {Component} from 'react';

// A customizeable slider 
const RangeSelector = (props) => {
  return (
    <div>
      <input type="range" min={props.min} max={props.max} onChange={props.handleChange} value={props.value}/>
    </div>
  )
}

export default RangeSelector