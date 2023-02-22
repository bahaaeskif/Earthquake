import React from "react";
import Input from "../common/input/input";
import './register.css'
const Register = () => {
    return (
        <div className="register__container">
            <p className="text-xl mt-8 mb-8 text-center px-12">قم بانشاء حساب جديد ودع الاخرين يرونك</p>

            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md direction-rtl ">
                <form>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="form-group mb-6 ">
                            <Input type={'text'} label={'Email address'} placeholder={'اسم الاول'} isLabel={false} />
                        </div>
                        <div className="form-group mb-6">
                            <Input type={'text'} label={'Email address'} placeholder={'اسم الأخير'} isLabel={false} />
                        </div>
                    </div>
                    <div className="form-group mb-6">
                        <Input type={'email'} label={'Email address'} placeholder={'ادخل البريد الألكتروني'} isLabel={false} />
                    </div>
                    <div className="form-group mb-6">
                        <Input type={'password'} label={'Password'} placeholder={'كلمة المرور'} isLabel={false} />
                    </div>
                    <div className="form-group form-check mb-6">
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
      ease-in-out">انشاء حساب</button>
                </form>
            </div>
        </div>
    );
}

export default Register;