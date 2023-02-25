import React, { useState } from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';
import logo from '../../imgs/logo.png'
import Navmenu from './responsiveNav/navmenu';
import Submenu from './responsiveNav/submenu';


const Navbar = () => {
    const [subMenu, isSubMenu] = useState(false);

    const hundelClick = () => {
        subMenu === false ? isSubMenu(true) : isSubMenu(false);
    }

    const hundelCancel = () => {
        isSubMenu(false);
    }

    return (<nav className=" z-50 relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
            <div className="container-fluid ">
                <Link className="flex items-center" to='/' >
                    <img className='logo w-9 mr-1 ' src={logo} alt="" />
                    <div className='text-xl text-black '>Earth<span className=' text-sm'>Quake</span></div>
                </Link>
            </div>
            <i className='bx bx-menu text-4xl relative md:hidden lg:hidden  ' onClick={hundelClick}></i>
            <Submenu hundelCancel={hundelCancel} hundelClick={hundelClick} subMenu={subMenu} />
            <Navmenu hundelCancel={hundelCancel} />
        </div>

    </nav >);
}

export default Navbar;