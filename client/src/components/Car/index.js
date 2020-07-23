import React from 'react';
import "./style.css";

const Car = props => {
  return (
    <div className="car-red" style={{top: `${props.top}rem`}}>
      <img
        src={`${process.env.PUBLIC_URL}/images/car-red.png`}
        style={{width: `${props.width}rem`}}
      />
    </div>
  )
}

export default Car;