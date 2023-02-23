import React from "react";

const Errorlabel = ({ content, styleLabel }) => {
    return (
        <>
            <div className={`${styleLabel} bg-red-100 text-red-800 rounded-lg py-2 px-3 my-3 text-base mb-3`}>{content}</div>
        </>
    );
}

export default Errorlabel;