import React, { useContext } from "react";
import { ShelfContext } from "../App";

const BookCard = ({ book, isBookInShelf = false }) => {
  const { setShelfBooks } = useContext(ShelfContext);
  const addToshelf = (e) => {
    setShelfBooks((prev) => {
      const updatedShelfBooks = [...prev, book];
      localStorage.setItem("shelfBooks", JSON.stringify(updatedShelfBooks));
      return updatedShelfBooks;
    });
    e.target.style.display = "none";
  };
  return (
    <article className="bookCard">
      <div>
        <b>Title: </b>
        <p style={{ margin: "0 5px" }}>{book.title}</p>
      </div>
      <div>
        <b>Edition Count: </b>
        <p style={{ margin: "0 5px" }}>{book.edition_count}</p>
      </div>
      {!isBookInShelf && (
        <button className="addButton" onClick={addToshelf}>
          Add to shelf
        </button>
      )}
    </article>
  );
};

export default BookCard;
