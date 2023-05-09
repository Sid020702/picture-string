import React from "react"
import Hanger from "../hanger/hanger.component"
import "./styles.css"

const StringComponent = () => {
    const importAll = require =>
        require.keys().reduce((acc, next) => {
            acc[next.replace("./", "")] = require(next);
            return acc;
        }, {});

    const images = importAll(
        require.context("../../images", false, /\.(png|jpe?g|svg)$/)
    );
    const imageArray = Object.values(images);
    return (

        <div className="myGrid" id="grid" onClick={() => { window.location.href = "./about" }}>
            {
                imageArray.map((image, index) => {
                    return (
                        <Hanger className=" h-80 relative -z-10 border-pink-900 border-r-[5px]  " key={index} image={image} />
                    )
                })
            }

        </div>
    )
}

export default StringComponent