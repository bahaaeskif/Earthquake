import React from "react";

const Input = ({ placeholder, label, type, isLabel }) => {
    return (
        <>
            {isLabel ? <label htmlFor="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">{label}</label> : null}
            <input type={type} className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail2"
                aria-describedby="emailHelp" placeholder={placeholder} />
        </>
    );
}

export default Input;