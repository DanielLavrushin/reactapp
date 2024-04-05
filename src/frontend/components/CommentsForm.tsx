import React, { FormEvent, FormEventHandler } from "react";
import "./CommentsForm.scss"
import CommentItem from "./CommentItem";
import Comment from "./../models/Comment";

type CommentsFormProps {
    onSubmit: (comment: Comment) => {};
}

class CommentsForm extends React.Component<CommentsFormProps> {

    addComment = (event: FormEvent) => {
        event.preventDefault();
        this.props.onSubmit(new Comment(this.state.comment));
    };

    state = { comment: '' };

    render() {
        return (
            <form className="comments-form" onSubmit={this.addComment}>
                <input name="comment" type="text" required
                    value={this.state.comment}
                    onChange={e => this.setState({ comment: e.target.value })} />
                <button>add a comment</button>
            </form>
        );
    }
}

export default CommentsForm;