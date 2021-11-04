import React from "react";

import "./Header.css";
import Logo from "../../assets/logo.svg";

export default function Header() {
    return (
        <div className="container-fluid header">
            <div className="wrapper row">
                <img src={Logo} className="logo"></img>
                <ul className="menu">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Community</a></li>
                    <li><a href="#">Our Team</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#" className="btn">Request a Demo</a></li>
                </ul>
            </div>
        </div>
    );
}
