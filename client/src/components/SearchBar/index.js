import React, { Component } from "react";
import { Container, Row, Col } from "../Grid";

class SearchBar extends Component {
  state = {
    query: "",
  };

  handleInputChange = (event) => {
    let _query = event.target.value;

    this.setState({
      query: _query,
    });
  };

  handleSearch = (event) => {
    event.preventDefault();
    this.props.onClick(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search Books"
          aria-label="SearchBooks"
          aria-describedby="button-addon2"
          value={this.state.query}
          onChange={this.handleInputChange}
        />
        <div className="input-group-append">
          <button
            className="btn btn-md btn-light m-0 px-3 py-2 z-depth-0 waves-effect"
            type="button"
            id="button-addon2"
            onClick={this.handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
