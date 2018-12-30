import loadingLogo from "../assets/compact-disc.png";
import React from "react";

const loadingComponent = () => {
    return (
        <div className="loader">
            <img src={loadingLogo} alt="" className="loader-img"/>
        </div>
    )
};

export default loadingComponent;
