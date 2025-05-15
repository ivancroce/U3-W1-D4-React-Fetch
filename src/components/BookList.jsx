import SingleBook from "./SingleBook";
import { Row, Col, Form } from "react-bootstrap";
import { Component } from "react";

class BookList extends Component {
  state = {
    searchBook: ""
  };

  render() {
    const { books } = this.props; // all props from the parent

    // filter books by the title
    const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(this.state.searchBook.toLowerCase()));

    return (
      <>
        <Form className="d-flex justify-content-center">
          <Form.Group className="w-50" controlId="exampleForm.ControlInput1">
            <Form.Control onChange={(e) => this.setState({ searchBook: e.target.value })} type="text" placeholder="Search a  title..." />
          </Form.Group>
        </Form>

        <Row className="g-4 my-5">
          {/* key value has to be unique, we can use key={book.asin} without the index on map() & key, or we can use index same as below */}
          {filteredBooks.map((book, index) => (
            <Col key={`book-${index}`} xs={12} sm={6} md={3} className="text-center">
              <SingleBook book={book} />
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default BookList;
