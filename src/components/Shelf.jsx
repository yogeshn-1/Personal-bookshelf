import React from "react";
import BookCard from "./BookCard";
import { Link } from "react-router-dom";

const Shelf = () => {
  const shelfBooks = JSON.parse(localStorage.getItem("shelfBooks"));
  return (
    <div className="container">
      <Link to="/">
        <button className="routeButton" style={{ left: "1rem" }}>
          Back
        </button>
      </Link>
      <section id="bookContainer">
        {shelfBooks.length > 0 &&
          shelfBooks.map((book) => (
            <BookCard
              key={book.cover_edition_key}
              book={book}
              isBookInShelf={true}
            />
          ))}
      </section>
    </div>
  );
};

export default Shelf;
