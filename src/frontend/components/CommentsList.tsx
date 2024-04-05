import React from "react"
import Comment from "./../models/Comment"
import CommentItem from "./CommentItem"

type CommentsListProps = {
    comments: Array<Comment>;
}

class CommentsList extends React.Component<CommentsListProps> {

    render() {
        return (
            <ul>
                {this.props.comments.map((comment) => <CommentItem {...comment} />)}
            </ul>
        );
    }
}

export default CommentsList;