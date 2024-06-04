import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="bookCard">
      <p>
        <b>Title</b> :{book.title}
      </p>
      <p>
        <b>Edition Count</b> : {book.edition_count}
      </p>
      <button className="addButton">Add to shelf</button>
    </div>
  );
};

export default BookCard;
