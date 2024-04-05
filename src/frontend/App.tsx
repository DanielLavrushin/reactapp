import React from "react";
import CommentsForm from "./components/CommentsForm"
import CommentsList from "./components/CommentsList"
import Comment from "./models/Comment"
import "./App.scss";


let comments = Array<Comment>();

type AppProps = {};
type AppState = {
  comments: Array<Comment>;
};

class App extends React.Component<AppProps, AppState> {


  state: AppState = { comments: comments };

  addComment = (comment: Comment) => {
    this.setState((state) => ({ comments: [...state.comments, comment] }));
  };

  render() {
    return (
      <div className="app">
        <div>React APP</div>
        <CommentsForm onSubmit={this.addComment} />
        <CommentsList comments={this.state.comments} />
      </div>
    );
  }
}

export default App;