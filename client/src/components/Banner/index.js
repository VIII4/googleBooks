import React from "react";
import "./style.css";

function Banner() {
  return (
    <div className="jumbotron card card-image jumbo-image">
      <div className="text-white text-center py-5 px-4">
        <div>
          <h2 className="card-title display-2 pt-3 mb-5 font-bold">
            <strong>Google Books</strong>
          </h2>
          <p className="mx-5 mb-5">Disover and save your favorite books!</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
