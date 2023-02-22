import './spinner.css'
import React from "react";


const Spinner = () => {
    return (<div className=" spinner   flex justify-center items-center space-x-2" >
        <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-blue-600" role="status" ></div >
        <span className="visually-hidden" > Loading...</span >
    </div >);
}

export default Spinner;