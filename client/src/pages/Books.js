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

  deleteBook = (bookId) => {
    API.deleteBook(bookId)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .finally(() => {
        this.loadBooks();
      });
  };

  handleDelete = (bookId) => {
    this.deleteBook(bookId);
  };

  render() {
    return (
      <BooksCard
        books={this.state.books}
        handleDelete={this.handleDelete}
      ></BooksCard>
    );
  }
}

export default Books;
