import React, { useContext } from "react";
import { ShelfContext } from "../App";

const BookCard = ({ book }) => {
  const { shelfBooks, setShelfBooks } = useContext(ShelfContext);
  const addToshelf = (e) => {
    console.log("shelfbook before : ", shelfBooks);
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
      <button className="addButton" onClick={addToshelf}>
        Add to shelf
      </button>
    </article>
  );
};

export default BookCard;
