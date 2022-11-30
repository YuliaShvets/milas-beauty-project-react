import React from "react";

import "./Content.css";
import {useNavigate} from "react-router-dom";

function Content(props) {
    const navigate = useNavigate();
    return (
        <div className="item">
            <img src={props.image} alt=""/>
            <h3>{props.name}</h3>
            <p>{props.price}$</p>
            <button onClick={() => navigate(`/catalog/${props.id}`)} className="aboutBtn">Details..</button>
        </div>
    );

}

export default Content;