import React from "react";
import Photo from "../photo/photo.component";
const Hanger = ({ className, image }) => {
    return (
        <div className={className}>
            <Photo image={image} />
        </div>
    )
}

export default Hanger