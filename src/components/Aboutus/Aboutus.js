import React from "react";

import "./Aboutus.css";
import AboutImg from "../../assets/about-img.png";
import PlayButton from "../../assets/play-button.svg"

export default function Banner() {
    return (
        <div className="wrapper row aboutus">
            <div className="image-box">
                <img src={AboutImg}></img>
            </div>
            <div className="text-box">
                <h1>Lorem Ipsum is simply
                    dummy text</h1>

                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                    an unknown printer took a galley of type.
                </p>
                <div className="btn-wrapper">
                    <a href="#" className="btn">View More</a>
                    <a href=""><img src={PlayButton}></img></a>
                </div>
            </div>
        </div>
    );
}
