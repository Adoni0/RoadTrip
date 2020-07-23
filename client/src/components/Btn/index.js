import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export const DeleteBtn = (props) => {
  return (
    <span className="btn btn-red" onClick={props.deleteHandler}>
      <ion-icon name="close-circle"></ion-icon>
      Delete
    </span>
  );
}

export const EditBtn = (props) => {
  return (
    <span className="btn btn-red" onClick={props.editHandler}>
      <ion-icon name="pencil"></ion-icon>
      Edit
    </span>
  );
}

export const SaveBtn = (props) => {
  return (
    <>
      {props.savedBookIds.includes(props.bookId) ? (
          <button className="btn btn-saved">Saved</button>
        ) : (
          <button className="btn btn-green" onClick={props.saveHandler}>Save</button>
        )}
    </>
  );
}

export const ViewBtn = ({ link }) => {
  return (
    <Link to={link} className="btn btn-red">
      <ion-icon name="eye"></ion-icon>
      View
    </Link>
  )
}


