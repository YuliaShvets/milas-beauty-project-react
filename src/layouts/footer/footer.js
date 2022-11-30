import React from "react";
import "./footer.css"
import logo from '../../assets/images/homePage/logo.svg';
import gmail from '../../assets/images/homePage/icons8-gmail-logo-50.png';
import instagram from '../../assets/images/homePage/icons8-instagram-50.png';
import telegram from '../../assets/images/homePage/icons8-telegram-50.png';
import tiktok from '../../assets/images/homePage/icons8-tiktok-50.png';

function Footer() {
    return (
        <footer>
            <p>Copyright @ 2019</p>
            <img src={logo} alt=""/>
            <div>
                <img src={gmail} alt=""/>
                <img src={instagram} alt=""/>
                <img src={telegram} alt=""/>
                <img src={tiktok} alt=""/>
            </div>
        </footer>
    );
}

export default Footer;
