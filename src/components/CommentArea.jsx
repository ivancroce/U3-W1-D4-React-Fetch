import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODI1Y2MwNzFlYmU4MjAwMTUwOWYyZjQiLCJpYXQiOjE3NDczMDc1MjcsImV4cCI6MTc0ODUxNzEyN30.oIIpMLSVjbsiZGMMOvIU4E2Kjr5Q4afdr9ee-JSDxKg";

class CommentArea extends Component {
  state = {
    comments: []
  };

  fetchComments = async () => {
    console.log("Fetching comments...");
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json"
        }
      });

      if (response.ok) {
        const comments = await response.json();
        this.setState({ comments });
      } else {
        throw new Error("Error with Comments");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    return (
      <div className="mt-3">
        <h5>Comments for this book</h5>
        <CommentsList comments={this.state.comments} />
        <AddComment />
      </div>
    );
  }
}

export default CommentArea;
