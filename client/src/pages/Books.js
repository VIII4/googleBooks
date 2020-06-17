import React, { Component } from "react";
import API from "../utils/API";
import BooksCard from "../components/BooksCard";

class Books extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then((res) => this.setState({ books: res.data }))
      .catch((err) => console.log(err));
  };

  render() {
    return <BooksCard books={this.state.books}></BooksCard>;
  }
}

export default Books;
