import React from "react";

import "./Pointbox.css";
import aipowered from "../../assets/ai-powered.svg";



export default function Pointbox() {
    return (
        <div className="points">
            <img src={aipowered}></img>
            <h4>AI Powered</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever.</p>
        </div>
    );
}
