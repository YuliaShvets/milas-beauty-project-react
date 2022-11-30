import React from "react";
import logo from '../../assets/images/homePage/logo.svg';
import "./header.css"
import {Link} from "react-router-dom";


function Header() {
    return (
        <header>
            <div className="logoImage">
                <Link to="/"><img src={logo} alt=""/></Link>
            </div>
            <div className="linksSec">
                <Link to="/catalog">CATALOG</Link>
                <Link to="/cart">CART</Link>
            </div>
        </header>
    );
};

export default Header;