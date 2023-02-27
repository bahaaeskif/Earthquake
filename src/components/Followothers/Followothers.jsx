import './followothers.css'
import React from "react";
import Input from '../common/input/input';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import Errorlabel from '../common/errorlabel/Errorlabel';
import Spinner from "../common/spinner/spinner";
import { useState } from "react";

const Followothers = () => {
    const navigate = useNavigate();
    const [isloading, setIsLoading] = useState(false);
    const formik = useFormik({
        initialValues: {
            location: '',
        },
        validationSchema: Yup.object({
            location: Yup.string()
                .required('يرجى ادخال موقعك')
        }),
        onSubmit: (values) => {
            console.log(values)
            setTimeout(() => {
                setIsLoading(false);
                navigate(`/follow/save/${formik.values.location}`);
            }, 1500);
            setIsLoading(true);

        }
    });
    return (<div className=" px-5 container__danger   min-h-screen flex flex-col items-center pt-16">
        <div className='datiles__form mt-9' >
            <div className="block transition-down  p-6 rounded-lg shadow-lg bg-white max-w-sm direction-rtl">
                <div className="flex justify-center">
                    <form className="mb-3 xl:w-96" onSubmit={formik.handleSubmit}>
                        <div className='flex items-center justify-center mb-5 px-3'>
                            <p className=''>أخبرنا عن موقعك الحالي ودعنا نساعدك بالوصول الى الاّخرين</p>
                            <i className='bx bx-error text-4xl text-red-700 bx-burst' ></i></div>
                        <Input type={'text'}
                            label={'أدخل موقعك'}
                            placeholder={'موقعي الحالي'} isLabel={1}
                            id={"location"} name={'location'}
                            onChange={formik.handleChange}
                            value={formik.values.location}
                        />
                        {
                            formik.touched.location && formik.errors.location ?
                                <Errorlabel content={formik.errors.location} /> : null
                        }
                        <div className="flex space-x-2 justify-center">
                            <button type='submit' className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition mt-9  duration-150 ease-in-out'>لقد شعرت بهزة </button>
                        </div>
                    </form>
                </div>

            </div>
            {isloading && <Spinner />}

        </div>
    </div>);
}

export default Followothers;