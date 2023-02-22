import React from "react";
import './login.css'
import { Link } from "react-router-dom";
import Input from "../common/input/input";
const Login = () => {
    return (
        <div className="login__container flex-col justify-start">
            <p className="text-xl mt-8 mb-8 text-center px-12">قم بتسجيل دخولك</p>
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm direction-rtl">
                <form>
                    <div className="form-group mb-6">
                        <Input type={'email'} label={'البريد الألكتروني'} placeholder={'ادخل البريد الألكتروني'} isLabel={1} />
                    </div>
                    <div className="form-group mb-6">
                        <Input type={'password'} label={'كلمة المرور'} placeholder={'كلمة المرور'} isLabel={1} />
                    </div>
                    <div className="flex flex-row-reverse justify-between items-center mb-6">
                        <div className="form-group form-check">

                        </div>
                    </div>
                    <button type="submit" className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">تسجيل دخول</button>
                    <p className="text-gray-800 mt-6 text-center">لست عضوا؟
                        <Link to='/signup'
                            className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">انشاء حساب</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;