import React from "react";
import SavedCard from "../SavedCard";

function SavedDeck({ books }) {
  return (
    <div className="row row-cols-2 row-cols-md-4 ">
      {books.map((book) => (
        <SavedCard
          title={book.title}
          desc={book.description}
          imgSrc={book.image}
          authors={book.authors}
          link={book.link}
        ></SavedCard>
      ))}
    </div>
  );
}

export default SavedDeck;
