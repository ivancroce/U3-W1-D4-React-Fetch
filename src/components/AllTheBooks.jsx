import { Button, Card, Row, Col, Container, Dropdown } from "react-bootstrap";
import scifi from "../data/scifi.json";
import romance from "../data/romance.json";
import horror from "../data/horror.json";
import history from "../data/history.json";
import fantasy from "../data/fantasy.json";
import { Component } from "react";
import SingleBook from "./SingleBook";
import BookList from "./BookList";

class AllTheBooks extends Component {
  //default state
  state = {
    selectedCategory: "scifi",
    books: scifi
  };

  // function to change category
  handleCategoryChange = (category) => {
    let books;

    // switch case to select the books from that category
    switch (category) {
      case "romance":
        books = romance;
        break;
      case "horror":
        books = horror;
        break;
      case "history":
        books = history;
        break;
      case "fantasy":
        books = fantasy;
        break;
      default:
        books = scifi;
    }

    // update the state
    this.setState({
      selectedCategory: category,
      books: books
    });
  };

  render() {
    const { books } = this.state; // books to show
    console.log(books);

    return (
      <Container>
        {/* Buttons to select categories */}
        <div className="my-4 d-flex flex-wrap gap-2 justify-content-center">
          <Button variant="info" onClick={() => this.handleCategoryChange("scifi")}>
            Sci-Fi
          </Button>
          <Button variant="danger" onClick={() => this.handleCategoryChange("romance")}>
            Romance
          </Button>
          <Button variant="dark" onClick={() => this.handleCategoryChange("horror")}>
            Horror
          </Button>
          <Button variant="warning" onClick={() => this.handleCategoryChange("history")}>
            History
          </Button>
          <Button variant="success" onClick={() => this.handleCategoryChange("fantasy")}>
            Fantasy
          </Button>
        </div>

        {/* or dropdown to select categeories */}
        <Dropdown onSelect={this.handleCategoryChange} className="my-3 d-flex justify-content-end">
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Select Category
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="scifi">Sci-Fi</Dropdown.Item>
            <Dropdown.Item eventKey="romance">Romance</Dropdown.Item>
            <Dropdown.Item eventKey="horror">Horror</Dropdown.Item>
            <Dropdown.Item eventKey="history">History</Dropdown.Item>
            <Dropdown.Item eventKey="fantasy">Fantasy</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <h1 className="my-4 text-center">
          {this.state.selectedCategory === "scifi"
            ? "Sci-Fi Books"
            : this.state.selectedCategory.charAt(0).toUpperCase() + this.state.selectedCategory.slice(1) + " Books"}
        </h1>
        {/* books */}
        <BookList books={books} />
      </Container>
    );
  }
}

export default AllTheBooks;
