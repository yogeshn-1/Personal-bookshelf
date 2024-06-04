import React from "react";
import BookCard from "./BookCard";
import { Link } from "react-router-dom";

const Shelf = () => {
  const shelfBooks = JSON.parse(localStorage.getItem("shelfBooks"));
  console.log(shelfBooks);
  return (
    <div className="container">
      <Link to="/">
        <button className="routeButton" style={{ left: "1rem" }}>
          Back
        </button>
      </Link>
    </div>
  );
};

export default Shelf;
