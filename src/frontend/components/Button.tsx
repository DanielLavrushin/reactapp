import React from "react";
import IButtonModel from "../models/ButtonModel";
import "./Button.scss";

function Button(props: IButtonModel) {

    let onClick = () => { props.onClick(this); };
    return (
        <button className="button" onClick={onClick}>{props.text}</button>
    );
}

export default Button;