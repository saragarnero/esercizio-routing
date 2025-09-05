import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"

function Card(props) {
    return (

        <Link to={"/about/"+ props.id+"/"+props.name}>
        <div className="card">
        <p className="title">{props.name}</p>
        <p className="id">ID: {props.id}</p>
        </div>
        </Link>
    );
}

export default Card;