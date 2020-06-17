import React from "react";
import ResultsCard from "../ResultsCard";

function ResultsDeck({ searchResults, handleSave }) {
  return (
    <div className="row row-cols-2 row-cols-md-4 ">
      {searchResults.map((book) => {
        const imgLink = book.imageLinks
          ? book.imageLinks.thumbnail
          : "http://books.google.com/books/content?id=/ZbUACwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api";

        const authors = book.authors
          ? book.authors
          : ["Author(s) Not Available"];

        let desc = book.description
          ? book.description
          : "No Description Available";

        if (desc.length >= 280) {
          desc = desc.slice(0, 280);
          desc = desc + "...";
        }

        return (
          <ResultsCard
            title={book.title}
            desc={desc}
            imgSrc={imgLink}
            authors={authors}
            link={book.infoLink}
            handleSave={handleSave}
          ></ResultsCard>
        );
      })}
    </div>
  );
}

export default ResultsDeck;
