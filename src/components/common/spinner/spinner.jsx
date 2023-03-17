import './spinner.css'
import React from "react";


const Spinner = () => {
    return (<div className=" spinner absolute top-0 left-0 h-full w-full z-[999999]   flex justify-center items-center space-x-2" >
        <div
            className="inline-block border-black opacity-100 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current !border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite] "
            role="status">
            <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Loading...</span>
        </div>
    </div >);
}

export default Spinner;