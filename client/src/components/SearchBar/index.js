import React from "react";
import { Container, Row, Col } from "../Grid";

function SearchBar() {
  return (
    <div class="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search Books"
        aria-label="SearchBooks"
        aria-describedby="button-addon2"
      />
      <div className="input-group-append">
        <button
          className="btn btn-md btn-light m-0 px-3 py-2 z-depth-0 waves-effect"
          type="button"
          id="button-addon2"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
