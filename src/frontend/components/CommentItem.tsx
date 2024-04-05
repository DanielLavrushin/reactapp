import React from "react"

class CommentItem extends React.Component<any> {

    render() {

        return (
            <li>{this.props.text}</li>
        );
    };
}

export default CommentItem;
