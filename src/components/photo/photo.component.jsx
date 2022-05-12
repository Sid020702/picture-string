import React from "react";

const Photo = ({ image }) => {
    return (
        < div className=" flex items-center justify-center bg-white text-black absolute w-[12rem] h-3/4 right-0 bottom-0 border-4 border-black translate-x-[50%] translate-y-[-25%] shadow-2xl shadow-black" >
            <div style={{ backgroundImage: `url("${image}")` }} className={`w-4/5 h-4/5 border-2 border-black  bg-cover bg-no-repeat bg-center  `} />
        </div >

    )
}

export default Photo