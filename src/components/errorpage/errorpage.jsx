import React from "react";
import './error.css'
import { Link } from "react-router-dom";
const Erorrpage = () => {
    return (
        <>
            <div className="erorr-page min-h-screen text-center h-screen flex flex-col justify-center
             px-4">
                <h1 className="text-7xl mb-4 text-gray-400" >404</h1>
                <h2 className="erorr-page__content text-2xl mb-3">عذرا هذه الصفحة غير موجودة

                </h2>
                <div className="btn flex space-x-2 justify-center">
                    <Link to='/' className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">عودة الى الصفحة الرئيسية</Link>
                </div>
            </div>
        </>
    );
}

export default Erorrpage;