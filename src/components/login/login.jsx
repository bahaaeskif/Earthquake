import React from "react";
import './login.css'
import { Link } from "react-router-dom";
import Input from "../common/input/input";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Errorlabel from "../common/errorlabel/Errorlabel";
import ButtonSumit from "../common/buttonsubmit/Buttonsubmit";
import Spinner from "../common/spinner/spinner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [isloading, setIsLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        }, validationSchema: Yup.object({
            password: Yup.string()
                .required('لم يتم ادخال أيا كلمة مرور')
                .min(8, 'كلمة المرور قصيرة للغاية يجب ان تكون على الاقل 8 أحرف')
                .matches(/[a-zA-Z]/, 'يجب ان تحتوي على أحرف لاتينية فقط'),
            email: Yup.string().email('البريد الالكتروني غير صالح').required('يرجى ادخال البريد الالكتروني'),
        }),
        onSubmit: (values) => {
            console.log(values);
            setTimeout(() => {
                setIsLoading(false);
                navigate('/');
            }, 1500);
            setIsLoading(true);
        }
    });

    return (
        <div className="login__container flex-col justify-start">

            <div className="block mt-8 p-6 rounded-lg shadow-lg bg-white max-w-sm direction-rtl">
                <form onSubmit={formik.handleSubmit}>
                    <p className="text-xl mb-8 text-center px-12">قم بتسجيل دخولك</p>
                    <div className="form-group mb-6">
                        <Input type={'text'} label={'البريد الألكتروني'} placeholder={'ادخل البريد الألكتروني'}
                            isLabel={1} id={"email"} name={'email'} onChange={formik.handleChange} value={formik.values.email} />
                        {formik.touched.email && formik.errors.email ? (
                            <Errorlabel styleLabel={` `} content={formik.errors.email} />
                        ) : null}
                    </div>
                    <div className="form-group mb-6">
                        <Input type={'password'} label={'كلمة المرور'} placeholder={'كلمة المرور'} isLabel={1} id={"password"} name={'password'} onChange={formik.handleChange} value={formik.values.password} />
                        {formik.touched.password && formik.errors.password ? (
                            <Errorlabel styleLabel={``} content={formik.errors.password} />
                        ) : null}
                    </div>
                    <div className="flex flex-row-reverse justify-between items-center mb-6">
                        <div className="form-group form-check">

                        </div>
                    </div>
                    <ButtonSumit label={'تسجيل دخول'} />
                    <p className="text-gray-800 mt-6 text-center">لست عضوا؟
                        <Link to='/signup'
                            className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">انشاء حساب</Link>
                    </p>

                </form>
                {isloading && <Spinner />}
            </div>
        </div>
    );
}

export default Login;