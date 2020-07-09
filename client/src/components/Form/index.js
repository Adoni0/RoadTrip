import React from "react";
import "./style.css";

// This file exports the Input, TextArea, and FormBtn components

export const Input = props => {
  return (
    <div className="form-group">
      <label className="form-label">{props.label}</label>
      <input type="text" className="form-input" {...props} />
    </div>
  );
}


export const FormBtn = props => {
  return (
    <button {...props} className="btn-form">
      {props.children}
    </button>
  );
}
