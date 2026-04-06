import React, { useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const searchBooks = async () => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;

    const response = await fetch(url);
    const data = await response.json();
    setBooks(data.items || []);
  };

  return (
    <div className="container">
      <h1>Book Explorer</h1>

      <input
        type="text"
        placeholder="Enter book name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={searchBooks}>Search</button>

      <div className="grid">
        {books.map((book, index) => {
          const info = book.volumeInfo;

          return (
            <div className="card" key={index}>
              <img
                src={
                  info.imageLinks
                    ? info.imageLinks.thumbnail
                    : "https://via.placeholder.com/100"
                }
                alt="book"
              />

              <h3>{info.title}</h3>
              <p>Author: {info.authors?.[0]}</p>
              <p>Publisher: {info.publisher}</p>
              <p>Year: {info.publishedDate}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
