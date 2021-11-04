import React from "react";

import "./Keypoints.css";
import Pointbox from "../Pointbox/Pointbox.js";


export default function Keypoints() {
    return (
        <div className="wrapper keypoints row">
            <div className="box">
                <h3>Key Points</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
            </div>
            <Pointbox></Pointbox>
            <Pointbox></Pointbox>
            <Pointbox></Pointbox>
            <Pointbox></Pointbox>
            <Pointbox></Pointbox>
        </div>
    );
}
