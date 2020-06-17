import React from "react";
import SavedCard from "../SavedCard";

function SavedDeck({ books, handleDelete }) {
  return (
    <div className="row row-cols-2 row-cols-md-4 ">
      {books.map((book) => {
        let desc = book.description
          ? book.description
          : "No Description Available";

        if (desc.length >= 280) {
          desc = desc.slice(0, 280);
          desc = desc + "...";
        }

        return (
          <SavedCard
            title={book.title}
            desc={desc}
            imgSrc={book.image}
            authors={book.authors}
            link={book.link}
            id={book._id}
            handleDelete={handleDelete}
          ></SavedCard>
        );
      })}
    </div>
  );
}

export default SavedDeck;
