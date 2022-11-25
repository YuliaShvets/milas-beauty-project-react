import React from "react"
import "./loader.css"
import {PacmanLoader} from "react-spinners"

function Loader() {
    return(
        <div className="loader">
            <PacmanLoader color="#c7909a" size="3vw" />
        </div>
    );
}

export default Loader;