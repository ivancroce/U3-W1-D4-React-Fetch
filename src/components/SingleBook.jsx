import { Card, Button } from "react-bootstrap";
import { Component } from "react";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false
  };

  handleSelect = () => {
    this.setState({
      selected: !this.state.selected
    });
  };
  render() {
    const { book } = this.props; // all props from the parent
    const { selected } = this.state;

    return (
      <Card className={`mb-3 shadow ${selected ? "card-selected" : ""}`}>
        <Card.Img onClick={this.handleSelect} className="card-img-ratio" variant="top" src={book.img} alt={book.title} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.price} €</Card.Text>
          <Button variant="primary">Add to the cart</Button>
          {selected && <CommentArea asin={this.props.book.asin} />}
        </Card.Body>
      </Card>
    );
  }
}
export default SingleBook;
