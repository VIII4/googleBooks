import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid";
import SearchCard from "../components/SearchCard";
import API from "../utils/API";

class Search extends Component {
  state = {
    searchedBooks: [],
  };

  componentDidMount() {
    this.searchBooks("flowers");
  }

  searchBooks = (query) => {
    API.searchBook(query)
      .then((res) => {
        let temp = [];
        res.data.items.forEach((volume) => {
          temp.push(volume.volumeInfo);
        });
        this.setState({ searchedBooks: temp });
        debugger;
        console.log(temp);
      })
      .catch((err) => console.log(err));
  };

  saveBook = (info) => {
    console.log(info);
    API.saveBook(info)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  handleSearchClick = (query) => {
    this.searchBooks(query);
  };

  handleSaveClick = (info) => {
    this.saveBook(info);
  };

  render() {
    return (
      <SearchCard
        handleSearch={this.handleSearchClick}
        handleSave={this.handleSaveClick}
        searchResults={this.state.searchedBooks}
      />
    );
  }
}

export default Search;
