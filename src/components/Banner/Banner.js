import React from "react";

import "./Banner.css";
import { ReactComponent as BannerImg } from "../../assets/banner-img.svg";

export default function Banner() {
    return (
        <div className="container-fluid banner">
            <div className="wrapper row">
                <div className="text-box">
                    <h1>Lorem Ipsum is simply
                        dummy text</h1>

                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                        an unknown printer took a galley of type.
                    </p>
                    <a href="#" className="btn">View More</a>
                </div>
                <div className="image-box">
                    <BannerImg />
                </div>
            </div>
        </div>
    );
}
