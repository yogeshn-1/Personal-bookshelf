import React, { useCallback, useEffect, useState } from "react";
import debounce from "lodash/debounce";
import BookCard from "./BookCard";

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
  }, [query, fetchBook]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="container">
      <input
        id="query"
        type="text"
        placeholder="Enter book name to search"
        onChange={handleChange}
      />
      <section id="bookContainer">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading &&
          books.length > 0 &&
          books.map((book, index) => <BookCard key={index} book={book} />)}
      </section>
    </div>
  );
};

export default SearchPage;
