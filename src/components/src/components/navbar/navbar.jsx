import React, { useState } from 'react';
import './navbar.css'
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
    const [subMenu, isSubMenu] = useState(false);
    const hundelClick = () => {
        subMenu === false ? isSubMenu(true) : isSubMenu(false);
    }

    return (<nav className=" z-50 relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
            <div className="container-fluid">
                <Link className="text-xl text-black " to='/' >Earth<span className=' text-sm'>Quake</span></Link>
            </div>
            <i className='bx bx-menu text-4xl relative  ' onClick={hundelClick}></i>
            <div className={`sub-menu shadow-lg z-40 scale-up-center bg-gray-50 p-4 ${subMenu ? 'block' : 'hidden'}`}>
                <div className='x'><i class='bx bx-x bx-rotate-90' onClick={hundelClick}></i></div>
                <li className='py-3'>
                    <NavLink to='/'>معلومات الزلازل</NavLink>
                </li>
                <li className='py-3'>
                    <NavLink to='/follow'>تتبع الاخرين</NavLink>
                </li>
                <li className='py-3'>
                    <NavLink to='/login'>تسجيل دخول</NavLink>
                </li>
                <li className='py-3'>
                    <NavLink to='/signup'>انشاء حساب</NavLink>
                </li>
            </div>
        </div>
    </nav >);
}

export default Navbar;