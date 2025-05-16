import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: "",
    rate: "1"
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <Form className="mb-3">
        <Form.Group controlId="comment">
          <Form.Label>Add Comment</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add your review..."
            value={this.state.comment}
            onChange={(e) => this.setState({ comment: e.target.value })}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="rate" className="mt-3">
          <Form.Label>Rating</Form.Label>
          <Form.Select value={this.state.rate} onChange={(e) => this.setState({ rate: e.target.value })}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
        </Form.Group>
      </Form>
    );
  }
}

export default AddComment;
