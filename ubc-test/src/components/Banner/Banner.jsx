import React from "react";
import "./Banner.scss"

const Banner = () => {

    return (
        <section className="banner-container">
            <div className="information">
            <h1 className="banner-title">Innovating Your Digital Experience</h1>
            <span className="banner-info">We design and build web applications with a focus on performance and user experience.</span>
            <button className="btn">Get Started</button>
            </div>
        </section>
    )
}

export default Banner