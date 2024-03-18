import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.selectedAsin !== prevProps.selectedAsin) {
      this.fetchComments(this.props.selectedAsin);
    }
  }

  fetchComments = (asin) => {
    if (!asin) return;

    fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYyZWYzMzcxYWZhZjAwMTkxNTY2YjAiLCJpYXQiOjE3MTA0MTk3NjMsImV4cCI6MTcxMTYyOTM2M30.W1bFSrQ1fLTPrzQ3oNeD6CePpjNXFbQl-ZZNSas7NcI",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log(response);
          return response.json();
        } else {
          throw new Error("errore for api call");
        }
      })
      .then((data) => {
        console.log(data);
        this.setState({ comments: data });
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    return (
      <div className="bg-secondary  border rounded p-4">
        {this.props.selectedAsin ? (
          <div>
            <h2 className="text-white">Commenti</h2>
            <CommentList comments={this.state.comments} />
            <AddComment asin={this.props.selectedAsin} />{" "}
          </div>
        ) : (
          <h1>Seleziona un libro per mostrarne i Commenti </h1>
        )}
      </div>
    );
  }
}

export default CommentArea;
