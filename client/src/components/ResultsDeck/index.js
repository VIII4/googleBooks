import React from "react";
import ResultsCard from "../ResultsCard";

function ResultsDeck({ searchResults, handleSave }) {
  return (
    <div className="row row-cols-2 row-cols-md-4 ">
      {searchResults.map((book) => (
        <ResultsCard
          title={book.title}
          desc={book.description}
          imgSrc={book.imageLinks.thumbnail}
          authors={book.authors}
          link={book.infoLink}
          handleSave={handleSave}
        ></ResultsCard>
      ))}
    </div>
  );
}

export default ResultsDeck;
