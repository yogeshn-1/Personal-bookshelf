import React, { useCallback, useEffect, useState } from "react";
import debounce from "lodash/debounce";
import BookCard from "./BookCard";
import { Link } from "react-router-dom";
import Loader from "../Loader.svg";

const SearchPage = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchBook = useCallback(
    debounce((book) => {
      if (book.length === 0) {
        setBooks([]);
        setLoading(false);
        return;
      }
      const apiQuery =
        "https://openlibrary.org/search.json?q=" + book + "&limit=10&page=1";
      setLoading(true);
      setError("");
      fetch(apiQuery)
        .then((res) => res.json())
        .then((res) => {
          setBooks(res.docs);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }, 300),
    []
  );

  useEffect(() => {
    fetchBook(query);
    console.log(books);
    return () => {};
  }, [query, fetchBook]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="container">
      <Link to="/shelf">
        <button className="routeButton" id="shelf">
          My Bookshelf
        </button>
      </Link>
      <h2 style={{ textAlign: "center" }}>Search by book name:</h2>
      <input
        id="query"
        type="text"
        placeholder="Enter book name to search"
        onChange={handleChange}
      />
      <div className="loadOrError">
        {loading && <img src={Loader} />}
        {error && <p>{error}</p>}
        {!error && !loading && query.length !== 0 && books.length === 0 && (
          <p>No book found with searched parameter</p>
        )}
      </div>
      <section id="bookContainer">
        {!loading &&
          !error &&
          books.length > 0 &&
          books.map((book, index) => <BookCard key={index} book={book} />)}
      </section>
    </div>
  );
};

export default SearchPage;
