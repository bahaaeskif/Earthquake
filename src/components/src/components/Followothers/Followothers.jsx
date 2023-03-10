import './followothers.css'
import React from "react";
import Input from '../common/input/input';
import { Link } from 'react-router-dom';

const Followothers = () => {
    return (<div className=" px-5 container__danger   min-h-screen flex flex-col items-center mt-16">
        <i className='bx bx-error text-9xl text-red-700 bx-burst' ></i>
        <p className='mt-9 text-center px-3'>أخبرنا عن موقعك الحالي ودعنا نساعدك بالوصول الى الاّخرين</p>
        <div className='datiles__form mt-9' >
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm direction-rtl">
                <div className="flex justify-center">
                    <div className="mb-3 xl:w-96">
                        <Input type={'text'} label={'أدخل موقعك'} placeholder={'موقعي الحالي'} isLabel={1} />
                    </div>
                </div>
                <div className="flex space-x-2 justify-center">
                    <Link type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition mt-9  duration-150 ease-in-out">لقد شعرت بهزة </Link>
                </div>
            </div>

        </div>
    </div>);
}

export default Followothers;