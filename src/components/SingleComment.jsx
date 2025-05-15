import { ListGroup } from "react-bootstrap";

const SingleComment = ({ comment }) => (
  <ListGroup.Item key={comment._id}>
    <strong>⭐ {comment.rate}/5</strong> - {comment.comment}
  </ListGroup.Item>
);

export default SingleComment;
