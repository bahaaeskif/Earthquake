import React from "react";
import Input from "../common/input/input";
import { useFormik } from "formik";
import './register.css'
import * as Yup from 'yup'
import Errorlabel from "../common/errorlabel/Errorlabel";
import ButtonSumit from "../common/buttonsubmit/Buttonsubmit";
import Spinner from "../common/spinner/spinner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [isloading, setIsLoading] = useState(false);
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
        }, validationSchema: Yup.object({
            firstname: Yup.string()
                .max(15, 'يجب أن يتألف من 20 حرف أو أقل')
                .required('يرجى ادخال اسمك الاول'),
            lastname: Yup.string()
                .max(20, 'يجب أن يتألف من 20 حرف أو أقل')
                .required('يرجى ادخال اسمك الاخير'),
            password: Yup.string()
                .required('لم يتم ادخال كلمة المرور')
                .min(8, 'كلمة المرور قصيرة للغاية يجب ان تكون على الاقل 8 أحرف')
                .matches(/[a-zA-Z]/, 'يجب ان تحتوي على أحرف لاتينية فقط'),
            email: Yup.string().email('البريد الالكتروني غير صالح').required('يرجى ادخال بريدك الالكتروني'),
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
        <div className="register__container">
            <p className="text-xl mt-8 mb-8 text-center px-12">قم بانشاء حساب جديد ودع الاخرين يرونك</p>

            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md direction-rtl ">
                <form onSubmit={formik.handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="form-group mb-6 ">
                            <Input type={'text'} label={'First name'}
                                placeholder={'اسم الاول'}
                                isLabel={false}
                                id={"firstname"}
                                name={'firstname'}
                                onChange={formik.handleChange}
                                value={formik.values.firstname}
                            />
                            {formik.touched.firstname && formik.errors.firstname ? (
                                <Errorlabel content={formik.errors.firstname} />
                            ) : null}
                        </div>
                        <div className="form-group mb-6">
                            <Input type={'text'}
                                label={'Last name'}
                                placeholder={'اسم الأخير'}
                                isLabel={false}
                                id={"lastname"}
                                name={'lastname'}
                                onChange={formik.handleChange}
                                value={formik.values.lastname}
                            />
                            {formik.touched.lastname && formik.errors.lastname ? (
                                <Errorlabel content={formik.errors.lastname} />
                            ) : null}
                        </div>
                    </div>
                    <div className="form-group mb-6">
                        <Input type={'text'} label={'Email address'}
                            placeholder={'ادخل البريد الألكتروني'}
                            isLabel={false}
                            id={"email"} name={'email'}
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <Errorlabel content={formik.errors.email} />
                        ) : null}
                    </div>
                    <div className="form-group mb-6">
                        <Input type={'password'}
                            label={'Password'}
                            placeholder={'كلمة المرور'}
                            isLabel={false}
                            id={"password"} name={'password'}
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <Errorlabel content={formik.errors.password} />
                        ) : null}                    </div>
                    <div className="form-group form-check mb-6">
                    </div>
                    <ButtonSumit label={'انشاء حساب'} />
                </form>
                {isloading && <Spinner />}
            </div>
        </div>
    );
}

export default Register;